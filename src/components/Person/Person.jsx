import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NewGadgetForm, UpdateUserForm, Loader } from "../../components";
import { Button } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { deleteGadget, getOne } from "../../services/api";
import { Block, Wrapper, UserDescr, GadgetsWrapper } from "./Person.styled";
import {
  GadgetList,
  GadgetItem,
  GadgetDescription,
  GadgetDescrItem,
} from "../ControlForm/ControlForm.styled";

export const Person = ({ workerId }) => {
  const [person, setPerson] = useState(null);
  const [isUpdForm, setIsUpdForm] = useState(false);

  useEffect(() => {
    const worker = getOne(workerId, setPerson);
    if (worker) {
      setPerson(worker);
    }
  }, [workerId]);

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
              // disabled={true}
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
        <GadgetList>
          {person?.gadgets &&
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
            })}
        </GadgetList>
      </GadgetsWrapper>
    </Wrapper>
  );
};

Person.propTypes = {
  workerId: PropTypes.string,
};
