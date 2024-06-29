import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { DeleteBtn } from "./WorkerItem.styled";
import { MdPhonelinkSetup } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export const WorkerItem = ({ index, name, position, id, handleDelete }) => {
  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{position}</td>
      <td>
        {
          <Link to={`${id}`}>
            <MdPhonelinkSetup />
          </Link>
        }
      </td>
      <td>
        <DeleteBtn
          onClick={() => {
            handleDelete(id);
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
  handleDelete: PropTypes.func,
};
