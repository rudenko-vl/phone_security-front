import { useState } from "react";
import PropTypes from "prop-types";
import { createGadget } from "../../services/api";
// import { useMutation } from "@tanstack/react-query";
import { Form, Input, SubmitBtn } from "../NewWorkerForm/NewWorkerForm.styled";

export const NewGadgetForm = ({ workerId }) => {
  const [gadgetData, setGadgetData] = useState({
    title: "",
    brand: "",
    model: "",
    sn: "",
    image: "",
  });

  const reset = () => {
    setGadgetData({ title: "", brand: "", model: "", sn: "", image: "" });
  };

  const handleGadgetChange = (e) => {
    const { name, value, files } = e.target;
    setGadgetData((prevGadgetData) => ({
      ...prevGadgetData,
      [name]: files ? files[0] : value,
    }));
  };

  // const { mutate: create } = useMutation({
  //   mutationFn: createGadget,
  // });

  const handleSubmitGadget = (e) => {
    e.preventDefault();
    const gadget = {
      title: gadgetData.title,
      brand: gadgetData.brand,
      model: gadgetData.model,
      sn: gadgetData.sn,
      image: gadgetData.image,
    };

    createGadget(workerId, gadget);
    // create(workerId, gadget);
    reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmitGadget}>
        <h2>Добавить гаджет</h2>
        <div></div>
        <div>
          <label htmlFor="title">Название*:</label>
          <Input
            id="title"
            name="title"
            type="text"
            value={gadgetData.title}
            onChange={handleGadgetChange}
            required
            placeholder="Телефон/Смарт часы"
          />
        </div>
        <div>
          <label htmlFor="brand">Бренд*:</label>
          <Input
            id="brand"
            name="brand"
            type="text"
            value={gadgetData.brand}
            onChange={handleGadgetChange}
            required
            placeholder="Apple"
          />
        </div>
        <div>
          <label htmlFor="model">Модель*:</label>
          <Input
            id="model"
            name="model"
            type="text"
            value={gadgetData.model}
            onChange={handleGadgetChange}
            required
            placeholder="model 1"
          />
        </div>
        <div>
          <label htmlFor="sn">Серийный номер*:</label>
          <Input
            id="sn"
            name="sn"
            type="text"
            value={gadgetData.sn}
            onChange={handleGadgetChange}
            required
            placeholder="IMEI (S/N)"
          />
        </div>
        <div>
          <label htmlFor="image">Фото:</label>
          <Input
            id="image"
            name="image"
            type="text"
            value={gadgetData.image}
            onChange={handleGadgetChange}
            placeholder="фото"
          />
        </div>
        <SubmitBtn type="submit">Создать</SubmitBtn>
      </Form>
    </div>
  );
};

NewGadgetForm.propTypes = {
  workerId: PropTypes.string,
};
