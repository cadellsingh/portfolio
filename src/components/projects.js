import React from "react";
import styled from "styled-components";
import CovidTracker from "../images/covid-tracker.png";
import AllInOne from "../images/all-in-one-sports.png";
import DevJobs from "../images/devjobs.png";
import Todo from "../images/todo.png";
import NumberSystem from "../images/number-system-conversion.png";
import SpotoStats from "../images/spotoStats.png"
import EachProject from "./eachProject";
import "aos/dist/aos.css";

const Container = styled.div`
  & h2 {
    margin: 40px 0;
    font-size: 30px;
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 30px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = () => {
  return (
    <Container id="projects">
      <h2>projects</h2>
      <ProjectsContainer>
      <EachProject
          githubLink="https://github.com/cadellsingh/spotifyStats"
          img={SpotoStats}
          liveLink="https://spotostats.netlify.app/"
          title="spotoStats"
          direction="fade-right"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/devJobs"
          img={DevJobs}
          liveLink="https://devjobss.netlify.app/"
          title="devjobs"
          direction="fade-left"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/converter"
          img={NumberSystem}
          liveLink="https://numbersystemconversion.netlify.app/"
          title="numberSystemConversion"
          direction="fade-right"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/All-in-one-sports-page"
          img={AllInOne}
          liveLink="https://all-in-one-sports.netlify.app/"
          title="allInOne"
          direction="fade-left"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/covid-19-tracker"
          img={CovidTracker}
          liveLink="https://cadellsingh-covid-19-tracker.netlify.app/"
          title="covidTracker"
          direction="fade-right"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/todoList"
          img={Todo}
          liveLink="https://cadellsingh-todolist.netlify.app/"
          title="todo"
          direction="fade-left"
        />
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
