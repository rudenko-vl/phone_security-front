import { useState } from "react";
import PropTypes from "prop-types";
import { updateGadget } from "../../services/api";
import { Form, Input, SubmitBtn } from "../NewWorkerForm/NewWorkerForm.styled";

export const UpdateGadgetForm = ({
  userId,
  gadgetId,
  person,
  index,
  refetch,
  closeModal,
}) => {
  const [formData, setFormData] = useState({
    brand: person?.gadgets[index].brand,
    model: person?.gadgets[index].model,
    sn: person?.gadgets[index].sn,
    image: person?.gadgets[index].image,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlerSubmit = () => {
    const updatedGadget = {
      brand: formData?.brand,
      model: formData?.model,
      sn: formData?.sn,
      image: formData?.image,
    };

    updateGadget(userId, gadgetId, updatedGadget);
    setFormData({
      brand: "",
      model: "",
      sn: "",
      image: "",
    });
    setTimeout(() => {
      refetch();
    }, 1000);
    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  return (
    <Form style={{ marginTop: "30px" }}>
      <h2>Изменить устройство</h2>
      <label htmlFor="brand">Бренд:</label>
      <Input
        placeholder="Бренд"
        name="brand"
        type="text"
        onChange={handleInputChange}
        value={formData?.brand}
      />
      <label htmlFor="model">Модель:</label>
      <Input
        placeholder="Модель"
        name="model"
        type="text"
        onChange={handleInputChange}
        value={formData?.model}
      />
      <label htmlFor="sn">SN:</label>
      <Input
        placeholder="SN"
        name="sn"
        type="text"
        onChange={handleInputChange}
        value={formData?.sn}
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

UpdateGadgetForm.propTypes = {
  userId: PropTypes.string,
  gadgetId: PropTypes.string,
  person: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
  closeModal: PropTypes.func,
};
