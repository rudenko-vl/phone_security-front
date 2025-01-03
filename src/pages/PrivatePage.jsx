import { useState, useEffect } from "react";
import { Header, WorkersList, ScrollButton } from "../components";
import { Button } from "@mui/material";
import { FaLock } from "react-icons/fa";
import {
  Form,
  Input,
  SubmitBtn,
} from "../components/NewWorkerForm/NewWorkerForm.styled";
import { Wrapper } from "../components/Person/Person.styled";

const Private = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("auth") || false);
  }, []);

  const correctPassword = "123";

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("auth", true);
    } else {
      alert("Неверный пароль");
      setPassword("");
    }
  };

  const logOut = () => {
    setIsAuthenticated(false);
    setPassword("");
    localStorage.removeItem("auth");
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Header />
          <Wrapper>
            <Button
              variant="contained"
              color="error"
              sx={{ width: "100px" }}
              onClick={logOut}
            >
              Lock
              <FaLock style={{ marginLeft: "10px" }} />
            </Button>
            <WorkersList />
          </Wrapper>
        </>
      ) : (
        <>
          <Header />
          <Form style={{ marginTop: "50px" }} onSubmit={handleSubmit}>
            <h2>Введите пароль для доступа к содержимому</h2>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Введите пароль"
            />
            <SubmitBtn type="submit">Войти</SubmitBtn>
          </Form>
        </>
      )}
      <ScrollButton />
    </div>
  );
};

export default Private;
