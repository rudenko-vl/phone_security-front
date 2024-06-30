import { useState } from "react";
import PropTypes from "prop-types";
import { NewGadgetForm, UpdateUserForm, Loader } from "../../components";
import { Button } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { deleteGadget, getAll } from "../../services/api";
import { Block, Wrapper, UserDescr, GadgetsWrapper } from "./Person.styled";
import {
  GadgetList,
  GadgetItem,
  GadgetDescription,
  GadgetDescrItem,
} from "../ControlForm/ControlForm.styled";
import { useQuery } from "@tanstack/react-query";

export const Person = ({ workerId }) => {
  const [isUpdForm, setIsUpdForm] = useState(false);
  const { data: persons, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getAll,
  });

  const person = persons?.find((person) => person?._id === workerId);

  return (
    <Wrapper>
      <Toaster />
      <Block>
        {person ? (
          <UserDescr>
            <img
              src={person.image ? person.image : "/funny_cat.jpg"}
              alt="img"
              width={300}
              height={350}
            />
            <p>Имя: {person.name}</p>
            <p>Должность: {person.position}</p>
            <Button
              sx={{ marginTop: "20px" }}
              onClick={() => setIsUpdForm(!isUpdForm)}
              variant="contained"
            >
              {isUpdForm ? "Добавить гаджет" : "Изменить"}
            </Button>
          </UserDescr>
        ) : (
          <Loader size={80} />
        )}
        {isUpdForm ? (
          <UpdateUserForm workerId={workerId} />
        ) : (
          <NewGadgetForm workerId={workerId} />
        )}
      </Block>
      <GadgetsWrapper>
        <h2>Список гаджетов {person?.name}</h2>
        <Button
          sx={{ width: "200px", margin: "20px auto" }}
          variant="contained"
          onClick={() => refetch()}
        >
          Обновить
        </Button>
        <GadgetList>
          {person?.gadgets.length > 0 ? (
            person.gadgets.map((item, index) => {
              return (
                <GadgetItem key={item._id}>
                  <h3>Гаджет {index + 1}:</h3>
                  <GadgetDescription>
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
                    src={item.image ? item.image : "/gadget.png"}
                    alt="img"
                    width={200}
                    height={200}
                  />
                  <Button
                    sx={{ margin: "20px auto" }}
                    onClick={() => {
                      deleteGadget(item._id, workerId);
                    }}
                    type="button"
                    variant="contained"
                    color="error"
                  >
                    Удалить
                  </Button>
                </GadgetItem>
              );
            })
          ) : (
            <h3>Пока ничего нет</h3>
          )}
        </GadgetList>
      </GadgetsWrapper>
    </Wrapper>
  );
};

Person.propTypes = {
  workerId: PropTypes.string,
};
