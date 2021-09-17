import styled from "styled-components";
import forest from "../assets/images/forest.png";

// custom styles

const StyledDivHome = styled.div`
  height: 90vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${forest});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HomeScreen = () => {
  return (
    <StyledDivHome>
      <h1>Home is the forest</h1>
    </StyledDivHome>
  );
};

export default HomeScreen;
