import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  opacity: ${props => props.isDisplayed ? 1 : 0};
  padding: ${props => props.theme.padding};
  transition: opacity ${props => props.theme.animationSpeed};
  width: 100%;
`;

const TitleInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid;
  border-bottom-color: transparent;
  font-size: 1rem;
  width: 100%;

  &:focus {
    border-bottom-color: black;
    outline: none;
  }
`;

export const NoteTitle = ({
  placeholder,
  value,
  onChange,
  onBlur,
  isDisplayed
}) =>
  <TitleContainer isDisplayed={isDisplayed}>
    <TitleInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  </TitleContainer>