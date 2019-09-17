import styled from "styled-components";

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.color || "black"};
  height: 24px;
  padding: 0;
`;
