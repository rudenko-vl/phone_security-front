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
    setTimeout(() => {
      if (searchInputRef) {
        searchInputRef?.current?.focus();
      }
    }, 500);
  }, []);

  const { data: workers, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAll,
  });

  const resetForm = () => {
    setSearchValue("");
    searchInputRef.current.focus();
  };

  const handleInputChange = (event) => {
    setFoundUser(null);
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
    resetForm();
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
              placeholder="Просканируйте IMEI устройства"
            />
          </label>
          <Btn
            type="button"
            onClick={() => {
              setFoundUser(null);
              setIsOk("ok");
              searchInputRef.current.focus();
            }}
          >
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
                      width={300}
                      height={450}
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
