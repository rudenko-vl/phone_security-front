import { useState, useEffect, useRef } from "react";
import { getAll } from "../../services/api";
import {
  GadgetList,
  Container,
  Wrapper,
  GadgetItem,
  UserWrapper,
  SearchInput,
  Btn,
  Error,
  UserDescription,
  GadgetDescription,
  GadgetDescrItem,
  DefaultText,
  IntervalBtns,
} from "./ControlForm.styled";
import { Loader, Modal, Tooltip } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@mui/material";

export const ControlForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundUser, setFoundUser] = useState(null);
  const [isOk, setIsOk] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  let searchInputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (searchInputRef) {
        searchInputRef?.current?.focus();
      }
    }, 500);
  }, []);

  let interval = localStorage.getItem("interval") || 5000;

  const { data: workers, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAll,
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    const worker =
      workers.find((worker) => worker?.gadgets[0]?.sn === value) ||
      workers.find((worker) => worker?.gadgets[1]?.sn === value);
    setFoundUser(worker ? worker : null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchValue) return;
    setIsOk("ok");
    if (foundUser) {
      setIsOk("ok");
    } else {
      setIsOk("error");
    }
    setTimeout(() => {
      resetForm();
    }, interval);
  };

  const resetForm = () => {
    setFoundUser(null);
    setSearchValue("");
    setIsOk("ok");
    searchInputRef.current.focus();
  };

  if (isLoading) return <Loader size={100} />;

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <label>
            <SearchInput
              ref={searchInputRef}
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Поиск"
            />
          </label>
          <Btn type="button" onClick={resetForm}>
            Удалить
          </Btn>
          <Tooltip text="Время показа результата поиска">
            <Btn type="button" onClick={handleOpenModal}>
              Интервал
            </Btn>
          </Tooltip>
        </Wrapper>
      </form>
      {isOk === "error" && (
        <Error>
          <h1>Неизвестное устройство!</h1>
          <p>📵</p>
          <p>👮‍♂️</p>
        </Error>
      )}
      {foundUser && (
        <div
          style={{
            backgroundColor: "#232ca6",
            padding: "10px",
          }}
        >
          <UserWrapper>
            <UserDescription>
              <p>Сотрудник:</p>
              <h3>{foundUser.name}</h3>
              <p>Должность:</p>
              <h3>{foundUser.position}</h3>
            </UserDescription>
            <img
              src={foundUser.image ? foundUser.image : "/avatar.png"}
              alt="img"
              width={150}
              height={150}
            />
          </UserWrapper>
          <GadgetList>
            {foundUser.gadgets &&
              foundUser.gadgets.map((item, index) => {
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
                  </GadgetItem>
                );
              })}
          </GadgetList>
        </div>
      )}
      {!searchValue && (
        <DefaultText>Просканируйте IMEI устройства!</DefaultText>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <IntervalBtns>
          <h2>Выберите длительность отображения</h2>
          <Button
            onClick={() => {
              localStorage.setItem("interval", 3000);
            }}
            variant="contained"
          >
            3 секунды
          </Button>
          <Button
            onClick={() => {
              localStorage.setItem("interval", 5000);
            }}
            variant="contained"
          >
            5 секунд
          </Button>
          <Button
            onClick={() => {
              localStorage.setItem("interval", 10000);
            }}
            variant="contained"
          >
            10 секунд
          </Button>
          <Button
            onClick={() => {
              localStorage.setItem("interval", 5000000);
            }}
            variant="contained"
          >
            Управлять вручную
          </Button>
        </IntervalBtns>
      </Modal>
    </Container>
  );
};
