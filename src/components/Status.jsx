import React from "react";
import styled from "styled-components";

const StatusContainer = styled.div`
  background-color: ${props => props.theme.colorGrayMedium};
  border-radius: ${props => props.theme.borderRadius};
  height: 0.3rem;
  margin-top: ${props => props.theme.paddingX2};
  overflow:hidden;
  width: 100%;
`;

const StatusBar = styled.div`
  background-color: ${props => getFillColor(props.percentage, props.theme.colorGrayDark, props.theme.colorOrange, props.theme.colorRed)};
  height: 100%;
  max-width: 100%;
  transition: width ${props => props.theme.animationSpeedFast};
  width: ${props => props.percentage}%;
`;

const getFillColor = (percentage, baseColor, warningColor, limitColor) => {
  if (percentage >= 100) {
    return limitColor;
  }

  if (percentage >= 90) {
    return warningColor;
  }

  return baseColor;
}

export const Status = ({ percentage }) => {
  return (
    <StatusContainer>
      <StatusBar percentage={percentage} />
    </StatusContainer>
  );
};
