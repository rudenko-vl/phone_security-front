import { useState } from "react";
import PropTypes from "prop-types";
import { updateUser } from "../../services/api";
import { Form, Input, SubmitBtn } from "../NewWorkerForm/NewWorkerForm.styled";

export const UpdateUserForm = ({ workerId }) => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    image: "",
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
  };

  return (
    <Form style={{ marginTop: "30px" }}>
      <Input
        placeholder="Имя"
        name="name"
        type="text"
        onChange={handleInputChange}
        value={formData?.name}
      />
      <Input
        placeholder="кладовщик"
        name="position"
        type="text"
        onChange={handleInputChange}
        value={formData?.position}
      />
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
};
