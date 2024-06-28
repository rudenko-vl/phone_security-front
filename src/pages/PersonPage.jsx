import { useEffect, useState } from "react";
import { Header, NewGadgetForm, UpdateUserForm } from "../components";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { deleteGadget, getOne } from "../services/api";

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
      <Toaster />
      <h1>Person Page</h1>
      <NewGadgetForm workerId={workerId} />
      {person && (
        <>
          <UpdateUserForm
            workerId={workerId}
          />
          <p>Name: {person.name}</p>
          <p>Position: {person.position}</p>
          <img src={person.image} alt="img" width={200} height={200} />
          {person.gadgets &&
            person.gadgets.map((item) => {
              return (
                <div key={item._id}>
                  <h3>Gadget:</h3>
                  <p>{item.title}</p>
                  <p>{item.brand}</p>
                  <p>{item.model}</p>
                  <p>{item.sn}</p>
                  <img src={item.image} alt="img" width={200} height={200} />
                  <Button
                    onClick={() => {
                      deleteGadget(item._id, workerId);
                    }}
                    type="button"
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
        </>
      )}
    </>
  );
};

export default PersonPage;
