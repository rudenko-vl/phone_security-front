import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { deleteWorker } from "../../services/api";

export const WorkerItem = ({ index, name, position, id }) => {
  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{position}</td>
      <td>{<Link to={`${id}`}>link</Link>}</td>
      <td>
        <button
          onClick={() => {
            deleteWorker(id);
          }}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
};

WorkerItem.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
};
