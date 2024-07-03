import { useRef, useState } from "react";
import { getAll, deleteUser } from "../../services/api";
import { WorkerItem, Loader, Tooltip, Filter } from "../../components";
import { ExcelBtn, ButtonWrapper } from "./WorkersList.styled";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@mui/material";
import { utils, writeFileXLSX } from "xlsx";
import { nanoid } from "nanoid";
import { SiMicrosoftexcel } from "react-icons/si";
import { Toaster } from "react-hot-toast";

export const WorkersList = () => {
  const { data: workers, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getAll,
  });

  const tbl = useRef(null);
  const [value, setValue] = useState("");
  const changeFilter = (e) => {
    setValue(e.target.value);
  };
  const clearFilter = () => {
    setValue("");
  };

  const filteredPersons =
    workers?.length > 0
      ? workers.filter((item) =>
          (item.position + item.name)
            .toLowerCase()
            .includes(value.trim().toLowerCase())
        )
      : [];

  return (
    <div>
      <Toaster />
      <ButtonWrapper>
        <Button variant="contained" onClick={() => refetch()}>
          Обновить
        </Button>
        <Tooltip text="Импорт в Excel">
          <ExcelBtn
            onClick={() => {
              const fileName = nanoid(7);
              const wb = utils.table_to_book(tbl.current);
              writeFileXLSX(wb, `${fileName}.xlsx`);
            }}
          >
            <SiMicrosoftexcel />
          </ExcelBtn>
        </Tooltip>
        <h2>Кол-во сотрудников: {filteredPersons?.length}</h2>
        <Filter
          value={value}
          clearFilter={clearFilter}
          changeFilter={changeFilter}
        />
      </ButtonWrapper>
      {!workers ? (
        <Loader size={80} />
      ) : (
        <table ref={tbl}>
          <thead>
            <tr>
              <th>№</th>
              <th>Имя</th>
              <th>Должность</th>
              <th>Устройств</th>
              <th>Ссылка</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {filteredPersons
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
                  gadgetsLength={person.gadgets.length || 0}
                  deleteUser={deleteUser}
                />
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
