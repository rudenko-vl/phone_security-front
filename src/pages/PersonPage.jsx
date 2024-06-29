import { useEffect, useState } from "react";
import { Header, NewGadgetForm } from "../components";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { deleteGadget, getOne } from "../services/api";
import { Block, Wrapper, UserDescr } from "./pagesStyle";
import {
  GadgetList,
  GadgetItem,
} from "../components/ControlForm/ControlForm.styled";

const PersonPage = () => {
  const [person, setPerson] = useState(null);
  let { workerId } = useParams();

  useEffect(() => {
    const worker = getOne(workerId, setPerson);
    if (worker) {
      setPerson(worker);
    }
  }, [workerId]);

  return (
    <>
      <Header />
      <Wrapper>
        <Toaster />
        <Block>
          {/* <UpdateUserForm workerId={workerId} />  */}
          {person && (
            <UserDescr>
              <img
                src={person.image ? person.image : "/funny_cat.jpg"}
                alt="img"
                width={200}
                height={200}
              />
              <p>Name: {person.name}</p>
              <p>Position: {person.position}</p>
            </UserDescr>
          )}
          <NewGadgetForm workerId={workerId} />
        </Block>
        <Wrapper>
          <h2>Список гаджетов {person?.name}</h2>
          <GadgetList>
            {person?.gadgets &&
              person.gadgets.map((item) => {
                return (
                  <GadgetItem key={item._id}>
                    <h3>Gadget:</h3>
                    <p>{item.title}</p>
                    <p>{item.brand}</p>
                    <p>{item.model}</p>
                    <p>{item.sn}</p>
                    <img
                      src={item.image ? item.image : "/gadget.png"}
                      alt="img"
                      width={200}
                      height={200}
                    />
                    <Button
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
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default PersonPage;
