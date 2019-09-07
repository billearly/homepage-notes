import React from "react";
import styled from "styled-components";

const StatusContainer = styled.div`
  background-color: #a5daf2;
  border-radius: 0.1rem;
  height: 0.3rem;
  margin-top: 1rem;
  width: 100%;
`;

const StatusBar = styled.div`
  background-color: white;
  border-radius: 0.1rem 0 0 0.1rem;
  height: 100%;
  width: ${props => props.percentage}%;
`;

export const Status = ({ percentage }) => {
  return (
    <StatusContainer>
      <StatusBar percentage={percentage} />
    </StatusContainer>
  );
};
