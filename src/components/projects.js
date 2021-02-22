import React from 'react';
import styled from 'styled-components';
import CovidTracker from '../images/covid-tracker.png';
import AllInOne from '../images/all-in-one-sports.png';
import DevJobs from '../images/devjobs.png';
import NumberSystem from '../images/number-system-conversion.png';
import SpotoStats from '../images/spotoStats.png';
import EachProject from './eachProject';
import 'aos/dist/aos.css';

const Container = styled.div`
  & h2 {
    margin: 40px 0;
    font-size: 30px;
  }
`;

const ProjectsContainer = styled.div`
  & div {
    margin: 10px 0;
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
          description="view your top tracks & artists as well as discover new music on spotify."
          direction="1"
          tech="react | react router | styled components | spotify api"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/devJobs"
          img={DevJobs}
          liveLink="https://devjobss.netlify.app/"
          title="devjobs"
          direction="2"
          description="view the latest developer jobs"
          tech="react | styled components | github api"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/converter"
          img={NumberSystem}
          liveLink="https://numbersystemconversion.netlify.app/"
          title="numberConversion"
          direction="3"
          description="real time conversions among binary, decimal and hexadecimal with steps"
          tech="react | material ui | useContext api"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/All-in-one-sports-page"
          img={AllInOne}
          liveLink="https://all-in-one-sports.netlify.app/"
          title="allInOne"
          direction="4"
          description="displays popular articles of all major sports"
          tech="react | react-bootstrap | styled components"
        />
        <EachProject
          githubLink="https://github.com/cadellsingh/covid-19-tracker"
          img={CovidTracker}
          liveLink="https://cadellsingh-covid-19-tracker.netlify.app/"
          title="covidTracker"
          direction="5"
          description="view the latest covid-19 cases all around the world"
          tech="react | react-bootstrap | styled components"
        />
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
