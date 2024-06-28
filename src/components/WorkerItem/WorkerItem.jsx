import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { deleteWorker } from "../../services/api";

export const WorkerItem = ({ index, name, position, id, image }) => {
  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{position}</td>
      <td>
        <img
          src={image}
          alt="img"
          width={150}
          height={150}
        />
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
  image: PropTypes.string,
  position: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
};
