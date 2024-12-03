import styled from "@emotion/styled";
import { IoPersonAdd } from "react-icons/io5";

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 30px auto;
  > h2 {
    margin-bottom: 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  box-sizing: border-box;
`;
export const SubmitBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45a049;
  }
`;

export const AddWorkerBtn = styled(IoPersonAdd)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 38px;
  color: green;
  border: 4px solid green;
  padding: 8px;
  cursor: pointer;
`;
