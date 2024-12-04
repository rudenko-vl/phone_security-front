import styled from "@emotion/styled";

export const ExcelBtn = styled.button`
  border: none;
  outline: 1px solid green;
  border-radius: 5px;
  padding: 3px;
  background: transparent;
  cursor: pointer;
  transition: 1.5s;
  > svg {
    color: green;
    font-size: 22px;
  }
  & :hover {
    color: #0ec40e;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  align-items: center;
  margin: 20px auto 30px auto;
  background-color: #151313c2;
  padding: 5px 10px;
  > h2 {
    color: white;
  }
`;

export const Clue = styled.span`
  cursor: pointer;
  > svg {
    color: #ff1852;
    font-size: 20px;
    transition: 0.5s;
    &:hover {
      color: #800784;
      transform: scale(1.1);
    }
  }
`;
