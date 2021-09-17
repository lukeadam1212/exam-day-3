import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../atoms/Buttons/Button";

// custom style
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
const UserCard = () => {
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
    <>
      {userProfile.map((item) => (
        <StyledUserCard key={item._id}>
          <p>
            <span>NAME: </span>
            {item.name}
          </p>
          <p>
            <span>EMAIL:</span> {item.email}
          </p>
          <p>
            <span>AGE:</span> {item.age}
          </p>
          <p>
            <span>PASSWORD:</span> {item.password}
          </p>
          <button
            onClick={() => {
              deleteUser(item._id);
            }}
          >
            Delete user
          </button>
          <input type="text" ref={ref} />
          <Button
            buttonText="change age"
            action={(e) => {
              axios.put(`http://localhost:5000/api/users/${item._id}`, {
                age: ref.current.value,
              });
            }}
          />
        </StyledUserCard>
      ))}
      )
    </>
  );
};

export default UserCard;
