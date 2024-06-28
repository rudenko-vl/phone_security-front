import { useState } from "react";
import PropTypes from "prop-types";
import { updateUser } from "../../services/api";

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
    <form style={{ marginTop: "30px" }}>
      <input
        placeholder="name"
        name="name"
        type="text"
        onChange={handleInputChange}
        value={formData?.name}
      />
      <input
        placeholder="position"
        name="position"
        type="text"
        onChange={handleInputChange}
        value={formData?.position}
      />
      <input
        placeholder="link"
        name="image"
        type="text"
        onChange={handleInputChange}
        value={formData?.image}
      />
      <button onClick={handlerSubmit} type="button">
        Update
      </button>
    </form>
  );
};

UpdateUserForm.propTypes = {
  workerId: PropTypes.string,
};
