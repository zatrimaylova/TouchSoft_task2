import styled from 'styled-components';

export const WrappersHeader = styled.div`
  width: 40%;
  margin: 0 auto 50px;
  padding: 30px 0;
  text-align: center;
  border-bottom: 1px solid black;

  h1, h2 {
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  div {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }

  button {
    padding: 20px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 3px;
    outline: none;
    border: none;
    background-color: transparent;
  }

  button:hover {
    color: crimson;
  }
`;

export const WrappersList = styled.ul`
  width: 30%;
  margin: 0 auto;
  
  li {
    margin-bottom: 20px;
  }
`;