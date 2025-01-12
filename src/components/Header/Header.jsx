// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  HeaderBox,
  HeaderLink,
  Logo,
  LogoImg,
  LogoTxt,
  Flag,
} from "./Header.styled";

export const Header = () => {
  // const location = useLocation();
  // const currentPath = location.pathname;
  return (
    <HeaderBox>
      <Link to="/main">
        <Logo>
          <LogoImg src="/warehouse.png" alt="logo" />
          <LogoTxt>
            <span>Vesko</span> <br />
            <span style={{ color: "#ffffff" }}>Invest</span>
          </LogoTxt>
          <Flag></Flag>
        </Logo>
      </Link>

      <HeaderLink style={{ marginRight: "20px" }} to="/main">
        Главная
      </HeaderLink>
      <HeaderLink to="/workers">Админ</HeaderLink>
    </HeaderBox>
  );
};
