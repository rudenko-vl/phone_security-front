import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { Wrapper, Form } from "./NewGadgetForm.styled";
import PropTypes from "prop-types";
import { Toaster, toast } from "react-hot-toast";

export const NewGadgetForm = ({ workerId }) => {
  const location = useLocation();
  const inputFileRef = useRef(null);
  axios.defaults.baseURL = "http://localhost:3000/";

  const [img, setImg] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    model: "",
    sn: "",
  });

  const uploadedFile = img?.file.filename;
  const src = `http://localhost:3000/uploads/${img?.file.filename}` || "";

  const reset = () => {
    setFormData({ title: "", brand: "", model: "", sn: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const gadget = {
      title: formData.title,
      brand: formData.brand,
      model: formData.model,
      sn: formData.sn,
      imgUrl: src,
    };

    const myPromise = axios.post(`/worker/${workerId}/gadgets`, gadget);
    toast.promise(
      myPromise,
      {
        loading: "Создание...",
        success: "Успешно создано!",
        error: "Ошибка",
      },
      {
        style: {
          minWidth: "250px",
        },
        success: {
          duration: 2000,
          icon: "✅",
        },
      }
    );
    reset();
  };

  const handleChangeFile = async (e) => {
    console.log(e.target.files);
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      console.log(data);
      setImg(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Toaster />
      <Link to={location?.state ?? "/workers"}>
        <button>Назад</button>
      </Link>
      <Form onSubmit={handlerSubmit}>
        <TextField
          sx={{ marginBottom: "15px" }}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          autoComplete="off"
          label="title"
          variant="outlined"
        />
        <TextField
          sx={{ marginBottom: "15px" }}
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          autoComplete="off"
          label="brand"
        />

        <TextField
          sx={{ marginBottom: "15px" }}
          type="text"
          name="model"
          value={formData.model}
          onChange={handleInputChange}
          autoComplete="off"
          label="model"
        />

        <TextField
          sx={{ marginBottom: "15px" }}
          type="text"
          name="sn"
          value={formData.sn}
          onChange={handleInputChange}
          autoComplete="off"
          label="sn"
        />
        <input
          ref={inputFileRef}
          type="file"
          onChange={handleChangeFile}
          hidden
        />
        <button onClick={() => inputFileRef.current.click()}>Img</button>

        <Button type="submit" variant="contained" color="success">
          Создать
        </Button>
      </Form>
      <img src={uploadedFile ? src : ""} alt="img" width="300" height="300" />
    </Wrapper>
  );
};

NewGadgetForm.propTypes = {
  workerId: PropTypes.string,
};
