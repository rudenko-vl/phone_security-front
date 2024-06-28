import { useState, useEffect, useRef } from "react";
import { fetchWorkers } from "../../services/api";

export const ControlForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundUser, setFoundUser] = useState(null);
  const [workers, setWorkers] = useState([]);
  // const [isOk, setIsOk] = useState(false);

  const searchInputRef = useRef();
  let alarm = "Not found";

  useEffect(() => {
    fetchWorkers(setWorkers);
    setTimeout(() => {
      if (searchInputRef) {
        searchInputRef.current.focus();
      }
    }, 1000);
  }, []);

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
  };

  const resetForm = () => {
    setFoundUser(null);
    setSearchValue("");
    searchInputRef.current.focus();
  };

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
          <img src={foundUser?.image} alt="img" width={200} height={200} />
          {foundUser.gadgets &&
            foundUser.gadgets.map((item) => {
              return (
                <div key={item._id}>
                  <h3>Gadget:</h3>
                  <p>{item.title}</p>
                  <p>{item.brand}</p>
                  <p>{item.model}</p>
                  <p>{item.sn}</p>
                  <img src={item.image} alt="img" width={200} height={200} />
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
