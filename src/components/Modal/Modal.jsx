import { useEffect } from "react";
import PropTypes from "prop-types";
import { ModalBox, ModalContentBox, CloseBtn } from "./Modal.styled";

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      const target = event.target;
      if (!target.closest("#drop") && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <ModalBox>
          <ModalContentBox id="drop">
            <CloseBtn onClick={onClose} />
            {children}
          </ModalContentBox>
        </ModalBox>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};
