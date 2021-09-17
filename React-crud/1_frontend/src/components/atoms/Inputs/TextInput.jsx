import React from "react";

const TextInput = ({ label, id }) => {
  return label ? (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} />
    </>
  ) : (
    <input type="text" />
  );
};

export default TextInput;
