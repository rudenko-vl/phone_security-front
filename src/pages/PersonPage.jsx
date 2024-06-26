import { useEffect, useState } from "react";
import { Header, NewGadgetForm } from "../components";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const PersonPage = () => {
  const [person, setPerson] = useState(null);
  let { workerId } = useParams();
  axios.defaults.baseURL = "http://localhost:3000/";
  const getOne = async (id) => {
    const { data } = await axios.get(`/worker/${id}`);
    setPerson(data);
  };
  useEffect(() => {
    const worker = getOne(workerId);
    if (worker) {
      setPerson(worker);
    }
  }, [workerId]);

  const deleteGadget = (id) => {
    const myPromise = axios.delete(`/worker/${workerId}/gadgets/${id}`);

    toast.promise(
      myPromise,
      {
        loading: "Удаление...",
        success: "Успешно удалено!",
        error: "Ошибка",
      },
      {
        style: {
          minWidth: "250px",
        },
        success: {
          duration: 2000,
          icon: "✅",
        },
      }
    );

    setTimeout(() => {
      location.reload();
    }, 1500);
  };

  return (
    <>
      <Header />
      <Toaster />
      <h1>Person Page</h1>
      <NewGadgetForm workerId={workerId} />
      {person && (
        <>
          <p>Name: {person.name}</p>
          <p>Position: {person.position}</p>
          <img src={person.imgUrl} alt="img" width={200} height={200} />
          {person.gadgets &&
            person.gadgets.map((item) => {
              return (
                <div key={item._id}>
                  <h3>Gadget:</h3>
                  <p>{item.title}</p>
                  <p>{item.brand}</p>
                  <p>{item.model}</p>
                  <p>{item.sn}</p>
                  <img src={item.imgUrl} alt="img" width={200} height={200} />
                  <Button
                    onClick={() => {
                      deleteGadget(item._id);
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
