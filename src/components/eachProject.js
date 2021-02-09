import React from "react";
import styled from "styled-components";
import Img from "react-cool-img";

const Project = styled.div`
  & h3 {
    margin-top: 10px;
    font-size: 20px;
  }

  & img {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
  }

  & img:hover {
    transition: ease-in 0.4s;
    opacity: 0.6;
  }

  & ul {
    display: flex;
    margin-top: 10px;
  }

  & ul li:first-of-type {
    margin-right: 10px;
  }

  & a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const EachProject = ({ img, title, liveLink, githubLink, direction }) => {
  return (
    <Project
      data-aos={direction}
      data-aos-easing="ease-in-out"
      data-aos-duration="1500"
    >
      <Img src={img} alt={title} />
      <h3>{title}</h3>
      <ul>
        <li>
          <a href={liveLink} target="_blank" rel="noreferrer">
            live
          </a>
        </li>
        <li>
          <a href={githubLink} target="_blank" rel="noreferrer">
            github
          </a>
        </li>
      </ul>
    </Project>
  );
};

export default EachProject;
