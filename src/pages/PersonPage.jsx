import { Header, Person } from "../components";
import { useParams } from "react-router-dom";

const PersonPage = () => {
  let { workerId } = useParams();

  return (
    <>
      <Header />
      <Person workerId={workerId} />
    </>
  );
};

export default PersonPage;
