import axios from "axios";
import { toast } from "react-hot-toast";

// axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.baseURL = "https://phone-security-back.vercel.app/";

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`/users/${id}`);
    console.log(response.data);
    alert("Сотрудник успешно удален!");
  } catch (error) {
    console.error("Ошибка при удалении пользователя:", error);
    alert("Ошибка при удалении");
  }
};

export const getAll = async () => {
  const { data } = await axios.get("/users");
  return data;
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

export const getOne = async (id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
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
    const response = await axios.put(`/users/${editUserId}`, editUserData);
    console.log(response.data);
    alert("Данные пользователя обновлены успешно");
  } catch (error) {
    console.error("Ошибка при обновлении данных пользователя:", error);
    alert("Ошибка при обновлении данных пользователя");
  }
};

export const updateGadget = async (userId, gadgetId, updatedData) => {
  try {
    const response = await axios.put(
      `/users/${userId}/gadgets/${gadgetId}`,
      updatedData
    );
    console.log(response.data);
    alert("Данные пользователя обновлены успешно");
  } catch (error) {
    console.error("Ошибка при обновлении данных пользователя:", error);
    alert("Ошибка при обновлении данных пользователя");
  }
};
