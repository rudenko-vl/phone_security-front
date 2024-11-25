import { useState } from "react";
import PropTypes from "prop-types";
import { createGadget } from "../../services/api";
import { Form, Input, SubmitBtn } from "../NewWorkerForm/NewWorkerForm.styled";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { getAll } from "../../services/api";
import { useQuery } from "@tanstack/react-query";

export const NewGadgetForm = ({ workerId, userRefetch }) => {
  const [gadgetData, setGadgetData] = useState({
    title: "Смартфон",
    brand: "",
    model: "",
    sn: "",
    image: "",
  });

  const { data: workers } = useQuery({
    queryKey: ["users"],
    queryFn: getAll,
  });
  console.log(workers[0]);

  const reset = () => {
    setGadgetData({
      title: "Смартфон",
      brand: "",
      model: "",
      sn: "",
      image: "",
    });
  };

  const handleGadgetChange = (e) => {
    const { name, value, files } = e.target;
    setGadgetData((prevGadgetData) => ({
      ...prevGadgetData,
      [name]: files ? files[0] : value,
    }));
  };

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
    reset();
    setTimeout(() => {
      userRefetch();
    }, 1500);
  };

  return (
    <div>
      <Form onSubmit={handleSubmitGadget}>
        <h2>Добавить гаджет</h2>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Тип устройства</InputLabel>
          <Select
            sx={{ height: "40px" }}
            name="title"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gadgetData.title}
            label="Тип устройства"
            onChange={handleGadgetChange}
          >
            <MenuItem value={"Смартфон"}>Смартфон</MenuItem>
            <MenuItem value={"Смарт-часы/Фитнес-браслет"}>
              Смарт-часы/Фитнес-браслет
            </MenuItem>
          </Select>
        </FormControl>
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
  userRefetch: PropTypes.func,
};
