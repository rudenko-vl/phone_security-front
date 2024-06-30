import { useState } from "react";
import PropTypes from "prop-types";

export function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "5px",
            borderRadius: "5px",
            zIndex: "10",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};