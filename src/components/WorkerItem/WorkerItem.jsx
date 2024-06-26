import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

export const WorkerItem = ({ index, name, position, id, imgUrl }) => {
  axios.defaults.baseURL = "http://localhost:3000/";
  const deleteWorker = async (id) => {
    const { data } = await axios.delete(`/worker/${id}`);
    console.log(data);
    setTimeout(() => {
      location.reload();
    }, 1500);
  };

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{position}</td>
      <td>
        <img src={imgUrl} alt="img" width={150} height={150} />
      </td>
      <td>{<Link to={`${id}`}>link</Link>}</td>
      <td>
        <button
          onClick={() => {
            deleteWorker(id);
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

WorkerItem.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  position: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
};
