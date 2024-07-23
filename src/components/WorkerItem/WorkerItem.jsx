import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { DeleteBtn } from "./WorkerItem.styled";
import { RiDeleteBin6Line } from "react-icons/ri";

export const WorkerItem = ({
  index,
  name,
  position,
  id,
  deleteUser,
  gadgetsLength,
  image,
}) => {
  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{position}</td>
      {/* <td>{image}</td> */}
      <td>{gadgetsLength}</td>
      <td>{<Link to={`${id}`}>Открыть</Link>}</td>
      <td>
        <DeleteBtn
          onClick={() => {
            deleteUser(id);
          }}
        >
          <RiDeleteBin6Line />
        </DeleteBtn>
      </td>
    </tr>
  );
};

WorkerItem.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
  deleteUser: PropTypes.func,
  gadgetsLength: PropTypes.number,
  image: PropTypes.string,
};
