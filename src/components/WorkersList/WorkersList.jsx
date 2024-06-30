import { useRef } from "react";
import { getAll, deleteUser } from "../../services/api";
import { WorkerItem, Loader, Tooltip } from "../../components";
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
              <th>Ссылка</th>
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
                  deleteUser={deleteUser}
                />
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
