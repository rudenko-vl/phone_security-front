import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const WorkerItem = ({ index, name, position, id, gadgetsLength }) => {
  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{position}</td>
      <td>{gadgetsLength}</td>
      <td>{<Link to={`${id}`}>Открыть</Link>}</td>
    </tr>
  );
};

WorkerItem.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
  gadgetsLength: PropTypes.number,
};
