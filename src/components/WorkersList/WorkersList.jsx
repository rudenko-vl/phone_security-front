import { useState, useEffect } from "react";
import axios from "axios";
import { WorkerItem } from "../../components";

export const WorkersList = () => {
  axios.defaults.baseURL = "http://localhost:3000/";
  const [workers, setWorkers] = useState(null);

  const getAll = async () => {
    const { data } = await axios.get("/worker");
    setWorkers(data);
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    workers && (
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>id</th>
            <th>Имя</th>
            <th>Должность</th>
            <th>Photo</th>
            <th>Ссылка</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {workers
            .sort(function (a, b) {
              const nameA = a.name.toUpperCase();
              const nameB = b.name.toUpperCase();

              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            })
            .map((person, index) => (
              <WorkerItem
                key={person._id}
                id={person._id}
                index={index}
                name={person.name}
                position={person.position}
                imgUrl={person.imgUrl}
              />
            ))}
        </tbody>
      </table>
    )
  );
};
