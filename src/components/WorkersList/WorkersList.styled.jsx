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
  gap: 20px;
  align-items: center;
  margin-bottom: 30px;
`;
