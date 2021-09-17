import React from "react";
import Input from "../../atoms/Inputs/Input";
import styled from "styled-components";
import Button from "../../atoms/Buttons/Button";
import axios from "axios";

// custom styles
const StyledForm = styled.form`
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.2);
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
`;

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const age = e.target[2].value;
    const password = e.target[3].value;
    const userData = {
      name: name,
      surname: email,
      email: age,
      image: password,
    };
    axios
      .post("http://localhost:5000/api/users", userData)
      .then((res) => console.log(res));
    prompt("new user uploaded");
    e.target.reset();
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <Input inputType="text" text="name" />
      <Input InputType="text" text="surname" />
      <Input InputType="text" text="email" />
      <Input InputType="text" text="image" required />
      <Button buttonType="submit" buttonText="Submit" />
    </StyledForm>
  );
};

export default Form;
