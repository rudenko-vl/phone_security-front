import { useState, useEffect } from "react";
import { getAll, deleteWorker } from "../../services/api";
import { WorkerItem, Loader } from "../../components";
import { Toaster } from "react-hot-toast";

export const WorkersList = () => {
  const [workers, setWorkers] = useState(null);
  useEffect(() => {
    getAll(setWorkers);
  }, []);

  return (
    <div>
      <Toaster />
      {!workers ? (
        <Loader size={80} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Имя</th>
              <th>Должность</th>
              <th>Добавить гаджет</th>
              <th>Удалить</th>
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
                  handleDelete={deleteWorker}
                />
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
