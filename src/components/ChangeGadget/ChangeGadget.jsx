import PropTypes from "prop-types";
import { UpdateGadgetForm, Modal } from "../../components";
import { useState } from "react";
import { Button } from "@mui/material";
import { BtnBox } from "./ChangeGadget.styled";
import { ModalContent } from "../Person/Person.styled";
import { deleteGadget } from "../../services/api";

export const ChangeGadget = ({ item, workerId, person, index, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  const handleOpenDelModal = () => setIsDelModalOpen(true);
  const handleCloseDelModal = () => setIsDelModalOpen(false);

  return (
    <div>
      <BtnBox>
        <Button
          onClick={handleOpenDelModal}
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
          closeModal={handleCloseModal}
        />
      </Modal>

      <Modal isOpen={isDelModalOpen} onClose={handleCloseDelModal}>
        <ModalContent>
          <h2>Хотите удалить?</h2>
          <BtnBox>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                deleteGadget(item._id, workerId);
                setTimeout(() => {
                  refetch();
                }, 1500);
              }}
            >
              Да
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleCloseDelModal}
            >
              Нет
            </Button>
          </BtnBox>
        </ModalContent>
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
