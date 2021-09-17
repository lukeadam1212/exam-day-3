import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../components/atoms/Buttons/Button";

// custom styles

const StyledDivAbout = styled.div`
  height: 90vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;

const StyledUserCard = styled.div`
  height: 23rem;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid white;
  margin: 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  img {
    height: 7rem;
    width: 7rem;
    object-fit: cover;
    border-radius: 1rem;
  }
  button {
    width: 15rem;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: rgba(2, 47, 65, 0.87);
    color: white;
  }
  input {
    width: 15rem;
    height: 2rem;
    border-radius: 0.5rem;
  }
`;

const AboutScreen = () => {
  // Hooks
  const ref = useRef();
  const [userProfile, setUserProfile] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUserProfile([...res.data]));
  });
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`);
    console.log("User deleted");
  };

  return (
    <StyledDivAbout>
      <h1>Our Team</h1>
      <StyledUsers>
        {userProfile.map((item) => (
          <StyledUserCard key={item._id}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.surname}</p>
            <p>{item.email}</p>
            <button
              onClick={() => {
                deleteUser(item._id);
              }}
            >
              Delete user
            </button>
            <input type="text" ref={ref} />
            <Button
              buttonText="upload new image"
              action={(e) => {
                axios.put(`http://localhost:5000/api/users/${item._id}`, {
                  image: ref.current.value,
                });
              }}
            />
          </StyledUserCard>
        ))}
      </StyledUsers>
    </StyledDivAbout>
  );
};

export default AboutScreen;
