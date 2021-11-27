import styled from 'styled-components';

export const CounterBody = styled.li`
  width: 500px;
  height: 250px;
  background-color: rgba(0, 0, 0, 30%);
  border-radius: 40px;
  padding: 30px 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    outline: none;
    padding: 20px 30px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  button:hover {
    color: white;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1, h3 {
    text-align: center;
  };
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ButtonCount = styled.button`
  font-size: 24px;
`;

export const RemoveButton = styled.button`
  display: block;
  margin: 0 auto;
`;