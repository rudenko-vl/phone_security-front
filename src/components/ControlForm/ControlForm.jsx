import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const ControlForm = () => {
  axios.defaults.baseURL = "http://localhost:3000/";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchValue, setSearchValue] = useState("");
  const [foundUser, setFoundUser] = useState(null);
  const [workers, setWorkers] = useState([]);

  const searchInputRef = useRef();
  let alarm = "Not found";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/worker");
        setWorkers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchUsers();
    setTimeout(() => {
      if (searchInputRef) {
        searchInputRef.current.focus();
      }
    }, 1000);
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);

    const worker = workers.find((worker) => worker.gadgets[0]?.sn === value);
    setFoundUser(worker ? worker : null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const resetForm = () => {
    setFoundUser(null);
    setSearchValue("");
    searchInputRef.current.focus();
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <form style={{ marginTop: "50px" }} onSubmit={handleSubmit}>
      <button type="button" onClick={resetForm}>
        Clear
      </button>
      <div>
        <label>
          Введите код пользователя:
          <input
            ref={searchInputRef}
            type="text"
            value={searchValue}
            onChange={handleInputChange}
          />
        </label>
      </div>
      {foundUser ? (
        <div>
          <p>Найден пользователь: {foundUser.name}</p>
          <img
            src={foundUser?.imgUrl || ""}
            alt="img"
            width={200}
            height={200}
          />
          {foundUser.gadgets &&
            foundUser.gadgets.map((item) => {
              return (
                <div key={item._id}>
                  <h3>Gadget:</h3>
                  <p>{item.title}</p>
                  <p>{item.brand}</p>
                  <p>{item.model}</p>
                  <p>{item.sn}</p>
                  <img src={item.imgUrl} alt="img" width={200} height={200} />
                </div>
              );
            })}
        </div>
      ) : (
        <h1>{alarm}</h1>
      )}
    </form>
  );
};
