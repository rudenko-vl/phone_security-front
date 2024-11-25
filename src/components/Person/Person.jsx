import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import {
  NewGadgetForm,
  UpdateUserForm,
  ChangeGadget,
  Modal,
} from "../../components";
import { Button } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { getAll, deleteUser } from "../../services/api";
import {
  Block,
  Wrapper,
  UserDescr,
  GadgetsWrapper,
  BtnBox,
  GadgetItem,
  ModalContent,
} from "./Person.styled";
import {
  GadgetList,
  GadgetDescription,
  GadgetDescrItem,
} from "../ControlForm/ControlForm.styled";
import { useQuery } from "@tanstack/react-query";

export const Person = ({ workerId }) => {
  const [isUpdForm, setIsUpdForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const { data: persons, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getAll,
  });

  const person = persons?.find((person) => person?._id === workerId);

  const userRemove = () => {
    deleteUser(person?._id);
    setTimeout(() => {
      handleCloseModal();
      refetch();
    }, 1500);
  };

  return (
    <Wrapper>
      <Toaster />
      <Link to="/workers">
        <Button variant="contained">
          <IoArrowBackOutline />
          Назад
        </Button>
      </Link>
      {person ? (
        <Block>
          <UserDescr>
            <img
              src={person.image ? person.image : "/avatar.png"}
              alt="img"
              width={300}
              height={350}
            />
            <p>Имя: {person.name || ""}</p>
            <p>Должность: {person.position || ""}</p>
            <BtnBox>
              <Button
                onClick={() => setIsUpdForm(!isUpdForm)}
                variant="contained"
              >
                {isUpdForm ? "Добавить гаджет" : "Изменить"}
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleOpenModal}
              >
                Удалить
              </Button>
            </BtnBox>
          </UserDescr>
          {isUpdForm ? (
            <UpdateUserForm
              userRefetch={refetch}
              workerId={workerId}
              person={person}
            />
          ) : (
            <NewGadgetForm userRefetch={refetch} workerId={workerId} />
          )}
        </Block>
      ) : (
        <h1 style={{ textAlign: "center", color: "red" }}>
          Сотрудник был удалён!
        </h1>
      )}
      {person && (
        <GadgetsWrapper>
          <h2>Список гаджетов {person?.name}</h2>
          <GadgetList>
            {person?.gadgets.length > 0 ? (
              person?.gadgets.map((item, index) => {
                return (
                  <GadgetItem key={item._id}>
                    <h3>Гаджет {index + 1}:</h3>
                    <GadgetDescription>
                      <GadgetDescrItem>
                        Тип:
                        <p>{item.title}</p>
                      </GadgetDescrItem>
                      <GadgetDescrItem>
                        Бренд:
                        <p>{item.brand}</p>
                      </GadgetDescrItem>
                      <GadgetDescrItem>
                        Модель:
                        <p>{item.model}</p>
                      </GadgetDescrItem>
                      <GadgetDescrItem>
                        IMEI (S/N):
                        <p>{item.sn}</p>
                      </GadgetDescrItem>
                    </GadgetDescription>
                    <img
                      src={item.image ? item.image : "/1.jpg"}
                      alt="img"
                      width={300}
                      height={500}
                    />
                    <ChangeGadget
                      item={item}
                      workerId={workerId}
                      person={person}
                      index={index}
                      refetch={refetch}
                    />
                  </GadgetItem>
                );
              })
            ) : (
              <h3>Пока ничего нет</h3>
            )}
          </GadgetList>
        </GadgetsWrapper>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalContent>
          <h2>Хотите удалить {person?.name}?</h2>
          <BtnBox>
            <Button variant="contained" color="success" onClick={userRemove}>
              Да
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleCloseModal}
            >
              Нет
            </Button>
          </BtnBox>
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};

Person.propTypes = {
  workerId: PropTypes.string,
};
