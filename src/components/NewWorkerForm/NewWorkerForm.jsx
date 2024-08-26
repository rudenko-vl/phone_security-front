import { useState } from "react";
import PropTypes from "prop-types";
import { createWorker } from "../../services/api.js";
import { Toaster } from "react-hot-toast";
import { Form, Input, SubmitBtn, Container } from "./NewWorkerForm.styled.jsx";
import { Button } from "@mui/material";
import { IoPersonAdd } from "react-icons/io5";
import { Modal } from "../../components";

export const NewWorkerForm = ({ userRefetch }) => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    image: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
    setTimeout(() => {
      userRefetch();
    }, 1500);
  };

  return (
    <Container>
      <Button
        sx={{ width: "270px" }}
        onClick={handleOpenModal}
        color="success"
        variant="contained"
      >
        Добавить сотрудника
        <IoPersonAdd style={{ marginLeft: "25px" }} />
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Form onSubmit={handleSubmitUser}>
          <h2>Добавить сотрудника</h2>
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
      </Modal>
      <Toaster />
    </Container>
  );
};

NewWorkerForm.propTypes = {
  userRefetch: PropTypes.func,
};
