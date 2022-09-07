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
    display: block;
    background-color: #BF0F00;
    border: 0;
    color: #FFF;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 10px auto 0 auto;
    cursor: pointer;
  }

  button:hover {
    opacity: .85;
    transition: .3s;
  }
`;