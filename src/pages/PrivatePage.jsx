import { useState, useEffect } from "react";
import { Header, WorkersList, NewWorkerForm } from "../components";

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
    localStorage.removeItem("auth");
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <Header />
          <button style={{ marginTop: "30px" }} onClick={logOut}>
            Log out
          </button>
          <NewWorkerForm />
          <WorkersList />
        </div>
      ) : (
        <>
          <Header />
          <form onSubmit={handleSubmit}>
            <h1>Введите пароль для доступа к содержимому</h1>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Введите пароль"
            />
            <button type="submit">Войти</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Private;
