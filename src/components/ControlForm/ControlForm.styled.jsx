import styled from "@emotion/styled";

export const GadgetList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0px auto;
  width: 75%;
  gap: 30px;
  flex-wrap: wrap;
`;

export const GadgetItem = styled.li`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  padding: 5px;
  height: 600px;
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

export const UserWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  border-radius: 30px;
  padding: 20px;
  height: 600px;
  width: 450px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 0px 10px 3px #d0ea27;
  > img {
    margin-top: 20px;
    width: 100%;
    height: 400px;
    cursor: pointer;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding: 30px;
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
  width: 600px;
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

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  > h3 {
    color: #2700ff;
    font-size: 20px;
    text-align: center;
  }
  > p {
    color: #5a0303;
    font-weight: 700;
    text-align: center;
  }
`;

export const DefaultText = styled.h1`
  text-align: center;
  color: blue;
  font-size: 36px;
  margin-top: 50px;
`;

export const SearchInput = styled.input`
  width: 370px;
  height: 50px;
  border: 3px solid #37076d;
  border-radius: 26px;
  padding: 10px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #060691;
  &:focus {
    border: none;
    outline: none;
    box-shadow: 3px 4px 7px rgb(235 215 215 / 92%);
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

// export const Screensaver = styled.div`
//   height: 500px;
//   background-image: url("/ua.jpg");
//   background-repeat: no-repeat;
//   background-position: 50% 50%;
//   background-size: contain;
// `;

export const MyButton = styled.button`
  padding: 10px 35px;
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 1.3em;
  font-weight: 600;
  background: #921111;
  text-decoration: none;
  letter-spacing: 0.1em;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: #bababa;
    background: #bc1616;
    text-shadow: 3px 4px 7px #e3c508c8;
  }
`;
