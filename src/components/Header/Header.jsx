// import { useLocation } from "react-router-dom";
import { HeaderBox, HeaderLink } from "./Header.styled";

export const Header = () => {
  // const location = useLocation();
  // const currentPath = location.pathname;
  return (
    <HeaderBox>
      <HeaderLink style={{ marginRight: "20px" }} to="/main">
        Главная
      </HeaderLink>
      <HeaderLink to="/workers">Админ</HeaderLink>
    </HeaderBox>
  );
};
