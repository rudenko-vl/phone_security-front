import { Link } from "react-router-dom";
import { PrevDiv } from "../components/Header/Header.styled";
import { Button } from "@mui/material";
const PrevievPage = () => {
  return (
    <PrevDiv>
      <h1>Phone security</h1>
      <Button variant="contained" color="success" sx={{ padding: "10px" }}>
        <Link
          style={{ color: "white", fontSize: "35px", fontWeight: "700" }}
          to="/main"
        >
          Start
        </Link>
      </Button>
    </PrevDiv>
  );
};

export default PrevievPage;
