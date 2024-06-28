import axios from "axios";
import { toast } from "react-hot-toast";

// axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.baseURL = "https://phone-security-back.vercel.app/";

export const deleteWorker = async (id) => {
  const { data } = await axios.delete(`/users/${id}`);
  console.log(data);
};

export const getAll = async (func) => {
  const { data } = await axios.get("/users");
  func(data);
};

export const deleteGadget = (id, workerId) => {
  const myPromise = axios.delete(`/users/${workerId}/gadgets/${id}`);

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
};

export const getOne = async (id, func) => {
  const { data } = await axios.get(`/users/${id}`);
  func(data);
};

export const fetchWorkers = async (func) => {
  try {
    const response = await axios.get("/users");
    func(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const createGadget = (workerId, gadget) => {
  const myPromise = axios.post(`/users/${workerId}/gadgets`, gadget);
  toast.promise(
    myPromise,
    {
      loading: "Создание...",
      success: "Успешно создано!",
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
};

export const createWorker = (worker) => {
  const myPromise = axios.post("/users", worker);

  toast.promise(
    myPromise,
    {
      loading: "Создание...",
      success: "Успешно создано!",
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
};

export const updateUser = async (editUserId, editUserData) => {
  try {
    const response = await axios.put(
      `/users/${editUserId}`,
      editUserData
    );
    console.log(response.data);
    alert("Данные пользователя обновлены успешно");
  } catch (error) {
    console.error("Ошибка при обновлении данных пользователя:", error);
    alert("Ошибка при обновлении данных пользователя");
  }
};
