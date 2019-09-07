import React from "react";
import styled from "styled-components";

const StatusContainer = styled.div`
  background-color: #a5daf2;
  border-radius: 0.1rem;
  height: 0.3rem;
  margin-top: 1rem;
  overflow:hidden;
  width: 100%;
`;

const StatusBar = styled.div`
  background-color: ${props => getFillColor(props.percentage)};
  height: 100%;
  width: ${props => props.percentage}%;
  max-width: 100%;
`;

const getFillColor = (percentage) => {
  if (percentage >= 100) {
    return "#cc5757";
  }

  if (percentage >= 90) {
    return "#f9d28b";
  }

  return "white";
}

export const Status = ({ percentage }) => {
  return (
    <StatusContainer>
      <StatusBar percentage={percentage} />
    </StatusContainer>
  );
};
