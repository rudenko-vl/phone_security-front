import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GadgetsWrapper = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 30px auto 0 auto;
  background-color: #00114ddb;

  > h2,
  h3 {
    text-align: center;
    font-size: 28px;
    color: white;
    margin-bottom: 30px;
  }
`;

export const Block = styled.div`
  display: flex;
  gap: 100px;
  margin: 0 auto;
`;

export const UserDescr = styled.div`
  margin-top: 30px;
  background-color: white;
  padding: 15px;
  > p {
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 25px;
  margin: 20px 0px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h2 {
    margin-bottom: 30px;
  }
`;

export const GadgetItem = styled.li`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  padding: 5px;
  height: 100%;
  max-width: 400px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 0px 10px 3px #d0ea27;
  > h3 {
    font-size: 16px;
    color: blue;
  }
  > img {
    width: 80%;
    height: 500px;
    cursor: pointer;
  }
`;

export const ArrowBtn = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-size: 26px;
  cursor: pointer;
`;
