import styled from "styled-components";

export const Container = styled.div`
  background-color: #3D3F43;
  border-radius: 10px;
  padding: 10px;
  img {
      max-width: 100%;
      display: block;
      margin-bottom: 10px;
      border-radius: 10px;
  }
  button {
    background-color: #3D3F43;
    border: 0;
  }
  button:hover {
    opacity: .85;
    transition: .3s;
  }
`;

export const ButtonDelete = styled.div`
  display: block;
  width: 70px;
  background-color: #BF0F00;
  border: 0;
  color: #FFF;
  padding: 8px 16px;
  font-size: 15px;
  border-radius: 10px;
  margin: 10px auto 0 auto;
  cursor: pointer;
  text-align: center;

  button:hover {
    opacity: .85;
    transition: .3s;
  }
`;