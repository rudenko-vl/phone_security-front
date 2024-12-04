import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const WorkerItem = ({
  index,
  name,
  position,
  id,
  gadgetsLength,
  gadgets,
}) => {
  const checkboxStyle = {
    width: "20px",
    height: "20px",
    border: "2px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    cursor: "pointer",
    marginRight: "8px",
  };

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{position}</td>
      <td>{gadgetsLength}</td>
      <td>
        {gadgetsLength > 0 && (
          <span style={{ marginLeft: "10px" }}>
            {gadgets?.map((gadget, index) => (
              <input
                key={index}
                type="checkbox"
                checked={gadget?.image !== ""}
                readOnly
                style={checkboxStyle}
              />
            ))}
          </span>
        )}
      </td>
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
  gadgets: PropTypes.array,
};
