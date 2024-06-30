import { useState } from "react";
import { createWorker } from "../../services/api.js";
import { Toaster } from "react-hot-toast";
import { Form, Input, SubmitBtn, Container } from "./NewWorkerForm.styled.jsx";
import { Button } from "@mui/material";

export const NewWorkerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    image: "",
  });

  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitUser = async (e) => {
    e.preventDefault();
    const newPerson = {
      name: formData.name,
      position: formData.position,
      image: formData.image,
    };
    createWorker(newPerson);
    setFormData({
      name: "",
      position: "",
      image: "",
    });
  };

  return (
    <Container>
      <Button
        onClick={() => setIsVisibleForm(!isVisibleForm)}
        color="success"
        variant="contained"
      >
        {isVisibleForm ? "Скрыть форму" : "Добавить сотрудника"}
      </Button>
      {isVisibleForm && (
        <Form onSubmit={handleSubmitUser}>
          <div>
            <label htmlFor="name">Имя:</label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleUserChange}
              required
            />
          </div>
          <div>
            <label htmlFor="position">Должность:</label>
            <Input
              id="position"
              name="position"
              type="text"
              value={formData.position}
              onChange={handleUserChange}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Фото:</label>
            <Input
              id="image"
              name="image"
              type="text"
              value={formData.image}
              onChange={handleUserChange}
            />
          </div>
          <SubmitBtn type="submit">Создать</SubmitBtn>
        </Form>
      )}
      <Toaster />
    </Container>
  );
};
