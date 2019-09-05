import styled from "styled-components";

export const Button = styled.button`
  background-color: white;
  border: 0.1rem solid white;
  border-radius: 0.2rem;
  color: #8fceeb;
  cursor: pointer;
  font-weight: bold;
  margin-left: 1rem;
  padding: 0.75rem 1.5rem;
`;

export const ButtonOutline = styled(Button)`
  background-color: transparent;
  color: white;
`;