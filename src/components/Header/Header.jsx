import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link style={{ marginRight: "20px" }} to="/">
        Main
      </Link>
      <Link style={{ marginRight: "20px" }} to="/workers">
        Private
      </Link>
    </header>
  );
};
