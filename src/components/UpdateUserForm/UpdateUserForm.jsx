import { useState } from "react";
import PropTypes from "prop-types";
import { updateUser } from "../../services/api";
import { Form, Input, SubmitBtn } from "../NewWorkerForm/NewWorkerForm.styled";

export const UpdateUserForm = ({ workerId, person }) => {
  const [formData, setFormData] = useState({
    name: person?.name,
    position: person?.position,
    image: person?.image,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlerSubmit = () => {
    const updatedUser = {
      name: formData?.name,
      position: formData?.position,
      image: formData?.image,
    };
    updateUser(workerId, updatedUser);
    setFormData({
      name: "",
      position: "",
      image: "",
    });
  };

  return (
    <Form style={{ marginTop: "30px" }}>
      <h2>Изменить данные</h2>
      <label htmlFor="name">Имя:</label>
      <Input
        placeholder="Имя"
        name="name"
        type="text"
        onChange={handleInputChange}
        value={formData?.name}
      />
      <label htmlFor="position">Должность:</label>
      <Input
        placeholder="кладовщик"
        name="position"
        type="text"
        onChange={handleInputChange}
        value={formData?.position}
      />
      <label htmlFor="image">Фото:</label>
      <Input
        placeholder="фото"
        name="image"
        type="text"
        onChange={handleInputChange}
        value={formData?.image}
      />
      <SubmitBtn onClick={handlerSubmit} type="button">
        Обновить
      </SubmitBtn>
    </Form>
  );
};

UpdateUserForm.propTypes = {
  workerId: PropTypes.string,
  person: PropTypes.object,
};
