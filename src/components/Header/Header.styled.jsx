import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  min-height: 64px;
  padding: 0 40px;
  color: #fff;
  background-color: #360560;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  color: white;
  transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
  }
  :not(last-child) {
    margin-right: 15px;
  }

  &.active {
    color: #e2e207;
  }
`;

export const PrevDiv = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-image: url("/security-img.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  > h1 {
    color: white;
    margin-bottom: 50px;
    font-size: 46px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

export const Flag = styled.div`
  width: 40px;
  height: 25px;
  background-image: linear-gradient(to bottom, #230cf7 50%, #f2f20d 50%);
`;

export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const LogoTxt = styled.span`
  color: #f52a2a;
  font-size: 18px;
  font-style: italic;
  font-weight: 600;
  line-height: 1.2;
  margin: 0px 15px;
`;
