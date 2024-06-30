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
} from "./ControlForm.styled";
import { Loader } from "../../components";
import { useQuery } from "@tanstack/react-query";

export const ControlForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundUser, setFoundUser] = useState(null);
  const [isOk, setIsOk] = useState(null);

  let searchInputRef = useRef();

  useEffect(() => {
    // searchInputRef?.current?.focus();
    setTimeout(() => {
      if (searchInputRef) {
        searchInputRef?.current?.focus();
      }
    }, 500);
  }, []);

  let interval;

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
    }, interval || 3000);
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
            backgroundColor: "#4cff4c",
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
    </Container>
  );
};
