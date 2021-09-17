import React from "react";
import TextInput from "../../atoms/Inputs/TextInput";

const TextInputs = ({ data }) => {
  return data.map((item) => (
    <TextInput label={item.label} id={item.id} key={item.id} />
  ));
};

export default TextInputs;
