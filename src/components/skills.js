import styled from "styled-components";
import {
  faGithub,
  faHtml5,
  faCss3,
  faReact,
  faJs,
  faGitAlt,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMobileAlt,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import EachSkill from "./eachSkill";

const Container = styled.div`
  & h2 {
    margin: 40px 0;
    font-size: 30px;
  }
`;

const IconsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 20px;
  text-align: center;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <h2>skills</h2>
      <IconsContainer>
        <EachSkill icon={faHtml5} skill="html5" />
        <EachSkill icon={faCss3} skill="css3" />
        <EachSkill icon={faReact} skill="react" />
        <EachSkill icon={faJs} skill="javascript" />
        <EachSkill icon={faGitAlt} skill="git" />
        <EachSkill icon={faGithub} skill="github" />
        <EachSkill icon={faNpm} skill="npm" />
        <EachSkill icon={faMobileAlt} skill="responsive design" />
        <EachSkill icon={faUniversalAccess} skill="accessibility" />
      </IconsContainer>
    </Container>
  );
};

export default Skills;
