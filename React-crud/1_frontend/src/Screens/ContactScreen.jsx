import styled from "styled-components";
import Form from "../components/organisms/Forms/Form";

const ContactDivAbout = styled.div`
  height: 90vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContactScreen = () => {
  // hooks

  return (
    <ContactDivAbout>
      <h1>Contact Us</h1>
      <Form />
    </ContactDivAbout>
  );
};

export default ContactScreen;
