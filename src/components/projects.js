import React from "react";
import styled from "styled-components";
import CovidTracker from "../images/covid-tracker.png";
import AllInOne from "../images/all-in-one-sports.png";
import DevJobs from "../images/devjobs.png";
import Todo from "../images/todo.png";
import NumberSystem from "../images/number-system-conversion.png";
import EachProject from "./eachProject";

const Container = styled.div`
  & h1 {
    margin: 40px 0;
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
    <Container>
      <h1>projects</h1>
      <ProjectsContainer>
        <EachProject
          githubLink="https://github.com/cadellsingh/devJobs"
          img={DevJobs}
          liveLink="https://devjobss.netlify.app/"
          title="devjobs"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/converter"
          img={NumberSystem}
          liveLink="https://numbersystemconversion.netlify.app/"
          title="numberSystemConversion"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/All-in-one-sports-page"
          img={AllInOne}
          liveLink="https://all-in-one-sports.netlify.app/"
          title="allInOne"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/covid-19-tracker"
          img={CovidTracker}
          liveLink="https://cadellsingh-covid-19-tracker.netlify.app/"
          title="covidTracker"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/todoList"
          img={Todo}
          liveLink="https://cadellsingh-todolist.netlify.app/"
          title="todo"
        />
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
