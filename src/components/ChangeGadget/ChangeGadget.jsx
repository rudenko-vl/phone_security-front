import PropTypes from "prop-types";
import { UpdateGadgetForm, Modal } from "../../components";
import { useState } from "react";
import { Button } from "@mui/material";
import { BtnBox } from "./ChangeGadget.styled";
import { deleteGadget } from "../../services/api";

export const ChangeGadget = ({ item, workerId, person, index, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <div>
      <BtnBox>
        <Button
          onClick={() => {
            deleteGadget(item._id, workerId);
            setTimeout(() => {
              refetch();
            }, 1500);
          }}
          type="button"
          variant="contained"
          color="error"
        >
          Удалить
        </Button>
        <Button onClick={handleOpenModal} variant="contained">
          Изменить гаджет
        </Button>
      </BtnBox>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <UpdateGadgetForm
          userId={workerId}
          gadgetId={item._id}
          person={person}
          index={index}
          refetch={refetch}
        />
      </Modal>
    </div>
  );
};

ChangeGadget.propTypes = {
  workerId: PropTypes.string,
  item: PropTypes.object,
  person: PropTypes.object,
  index: PropTypes.number,
  refetch: PropTypes.func,
};
