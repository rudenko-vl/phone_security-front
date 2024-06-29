import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GadgetsWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
  margin: 0 auto;
  > h2 {
    text-align: center;
    font-size: 28px;
    color: #530083;
  }
`;

export const Block = styled.div`
  display: flex;
  gap: 100px;
  margin: 0 auto;
`;

export const UserDescr = styled.div`
  margin-top: 30px;
  > p {
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
  }
`;
