import styled from "@emotion/styled";

export const ScrollToUpBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f8fe57;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    font-size: 24px;
  }
`;
