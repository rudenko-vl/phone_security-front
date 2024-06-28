import { useState } from "react";
import { createWorker } from "../../services/api.js";
import { Toaster } from "react-hot-toast";

export const NewWorkerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    image: "",
  });

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
  };

  return (
    <div>
      <h1>Управление пользователями и гаджетами</h1>
      <form onSubmit={handleSubmitUser}>
        <h2>Добавить пользователя</h2>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleUserChange}
            required
          />
        </div>
        <div>
          <label htmlFor="position">Position:</label>
          <input
            id="position"
            name="position"
            type="text"
            value={formData.position}
            onChange={handleUserChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Photo:</label>
          <input
            id="image"
            name="image"
            type="text"
            value={formData.image}
            onChange={handleUserChange}
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
      <Toaster />
    </div>
  );
};
