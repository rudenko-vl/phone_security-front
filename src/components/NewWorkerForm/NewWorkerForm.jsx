import { useRef, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export const NewWorkerForm = () => {
  axios.defaults.baseURL = "http://localhost:3000/";
  const [img, setImg] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
  });
  const inputFileRef = useRef(null);
  const uploadedFile = img?.file.filename;
  const defaultSrs = "/funny_cat.jpg";
  const src = `/uploads/${img?.file.filename}` || "";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const handleSubmit = () => {
    const worker = {
      name: formData.name,
      position: formData.position,
      imgUrl: src,
    };

    const myPromise = axios.post("/worker", worker);

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
    setTimeout(() => {
      location.reload();
    }, 1500);
  };

  return (
    <div>
      <h1>Phone security</h1>
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleChangeFile}
        hidden
      />
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="position"
        value={formData.position}
        onChange={handleInputChange}
      />
      <button onClick={() => inputFileRef.current.click()}>Img</button>
      <button onClick={handleSubmit}>Submit</button>
      <h2>{img?.file.filename}</h2>
      <img
        src={uploadedFile ? src : defaultSrs}
        alt="img"
        width="150"
        height="150"
      />
      <Toaster />
    </div>
  );
};
