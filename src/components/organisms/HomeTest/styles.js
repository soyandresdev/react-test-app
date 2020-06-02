import styled, { keyframes } from 'styled-components';

export const App = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img`
  height: 30vmin;
  animation: ${rotate360} infinite 20s linear;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;

export const AppHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin-bottom: 5rem;
`;

export const AppLink = styled.a`
  color: ${({ theme }) => theme.colors.amnesiaBlue};
`;
