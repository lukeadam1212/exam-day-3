import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 15rem;
  height: 2rem;
  border-radius: 0.5rem;
  outline: none;
  padding-left: 1rem;
`;

const StyledLabel = styled.label`
  color: rgb(2, 47, 65);
`;

const Input = ({ inputType, text, required }) => {
  return (
    <>
      <StyledLabel>{text}</StyledLabel>
      <StyledInput type={inputType} required={required} />
    </>
  );
};

export default Input;
