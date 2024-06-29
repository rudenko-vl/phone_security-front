import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Block = styled.div`
  display: flex;
  gap: 40px;
  margin: 0 auto;
  width: 80%;
`;

export const UserDescr = styled.div`
  margin-top: 30px;
  > p {
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
  }
`;
