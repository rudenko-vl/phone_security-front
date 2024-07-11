import styled from "@emotion/styled";

export const GadgetList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 20px auto 0px auto;
  width: 80%;
  gap: 50px;
  flex-wrap: wrap;
  padding: 20px 40px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  box-shadow: 0px 0px 10px 3px #28287f;
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

export const InfoWrapper = styled.div`
  width: 100%;
  background-color: #232ca6;
  padding: 20px;
`;

export const GadgetDescription = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const GadgetDescrItem = styled.li`
  display: flex;
  color: red;
  font-weight: 600;
  > p {
    color: #01003e;
    font-weight: 600;
    margin-left: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
`;
export const Error = styled.div`
  background-color: #ff2f2f;
  height: 500px;
  margin: 0 auto;
  padding: 20px;
  > h1 {
    font-size: 45px;
    color: white;
    text-align: center;
  }
  > p {
    font-size: 140px;
    text-align: center;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
  border: 2px solid white;
  border-radius: 6px;
  background-color: white;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  > h3 {
    color: #2700ff;
    font-size: 25px;
  }
  > p {
    color: #5a0303;
    font-weight: 700;
  }
`;

export const DefaultText = styled.h1`
  text-align: center;
  color: blue;
  font-size: 36px;
  margin-top: 50px;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 37px;
  border: 2px solid #4c056c;
  border-radius: 6px;
  padding: 10px;
  margin-right: 20px;
`;

export const IntervalBtns = styled.div`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  > h2 {
    text-align: center;
    margin-bottom: 15px;
  }
`;
