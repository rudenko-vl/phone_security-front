import { useState } from "react";
import PropTypes from "prop-types";
import { createGadget } from "../../services/api";

export const NewGadgetForm = ({ workerId }) => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   getAll(setUsers);
  // }, []);
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
    // const updatedUsers = users.map((user) => {
    //   if (user._id === workerId) {
    //     return { ...user, gadgets: [...user.gadgets, response.data.gadget] };
    //   }
    //   return user;
    // });
    // setUsers(updatedUsers);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmitGadget}>
        <h2>Добавить гаджет пользователю</h2>
        <div></div>
        <div>
          <label htmlFor="title">Название:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={gadgetData.title}
            onChange={handleGadgetChange}
            required
          />
        </div>
        <div>
          <label htmlFor="brand">Бренд:</label>
          <input
            id="brand"
            name="brand"
            type="text"
            value={gadgetData.brand}
            onChange={handleGadgetChange}
            required
          />
        </div>
        <div>
          <label htmlFor="model">Модель:</label>
          <input
            id="model"
            name="model"
            type="text"
            value={gadgetData.model}
            onChange={handleGadgetChange}
            required
          />
        </div>
        <div>
          <label htmlFor="sn">Серийный номер:</label>
          <input
            id="sn"
            name="sn"
            type="text"
            value={gadgetData.sn}
            onChange={handleGadgetChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Photo:</label>
          <input
            id="image"
            name="image"
            type="text"
            value={gadgetData.image}
            onChange={handleGadgetChange}
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

NewGadgetForm.propTypes = {
  workerId: PropTypes.string,
};
