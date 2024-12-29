import { Header, Person, ScrollButton } from "../components";
import { useParams } from "react-router-dom";

const PersonPage = () => {
  let { workerId } = useParams();

  return (
    <>
      <Header />
      <Person workerId={workerId} />
      <ScrollButton />
    </>
  );
};

export default PersonPage;
