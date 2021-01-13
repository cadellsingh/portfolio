import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faBars, faMoon } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  & h1 {
    margin: 40px 0;
  }
`;

const Skills = () => {
  return (
    <Container>
      <h1>skills</h1>
    </Container>
  );
};

export default Skills;
