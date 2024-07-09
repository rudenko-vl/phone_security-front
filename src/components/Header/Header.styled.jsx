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
  background-color: #4c056c;
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
