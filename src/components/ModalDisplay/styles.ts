import styled from "styled-components";

export const Container = styled.div`

`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, .8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #3D3F43;
  width: 80%;
  max-width: 1000px;
  border-radius: 10px;
  padding: 10px;
  position: center;
`;

export const ButtonClose = styled.div`
  float: right;
  background-color: transparent;
  outline: none;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  opacity: .5;
`;