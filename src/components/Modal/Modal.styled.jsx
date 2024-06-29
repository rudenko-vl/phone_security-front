import styled from "@emotion/styled";

export const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContentBox = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* width: 350px; */
  /* max-width: 600px; */
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  opacity: 0.5;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border: 0;
  outline: 0;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
  &::before {
    position: absolute;
    content: "";
    width: 2px;
    height: 15px;
    background: rgb(0, 95, 163);
    transform: rotate(45deg);
  }
  &::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 15px;
    background: rgb(0, 95, 163);
    transform: rotate(-45deg);
  }
`;
