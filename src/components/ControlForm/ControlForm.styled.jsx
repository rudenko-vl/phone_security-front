import styled from "@emotion/styled";

export const GadgetList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 20px auto 0px auto;
  width: 80%;
  gap: 50px;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const GadgetItem = styled.li`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  border: 2px solid purple;
  border-radius: 6px;
  padding: 5px;
  > h3 {
    font-size: 16px;
    color: blue;
  }
  > img {
    cursor: pointer;
  }
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
  width: 600px;
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

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const DefaultText = styled.h1`
  text-align: center;
  color: blue;
  font-size: 36px;
  margin-top: 50px;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  border: 2px solid #4c056c;
  border-radius: 6px;
  padding: 10px;
`;

export const Btn = styled.button`
  margin-left: 10px;
  border-radius: 6px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 100px;
  height: 35px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: #303f9f;
  }
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
