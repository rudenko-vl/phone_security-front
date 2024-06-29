import { useState, useEffect } from "react";
import { getAll } from "../../services/api";
import { WorkerItem } from "../../components";

export const WorkersList = () => {
  const [workers, setWorkers] = useState(null);
  useEffect(() => {
    getAll(setWorkers);
  }, []);

  return (
    workers && (
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
              />
            ))}
        </tbody>
      </table>
    )
  );
};
