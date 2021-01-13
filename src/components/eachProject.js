import React from "react";
import styled from "styled-components";

const Project = styled.div`
  & h2 {
    margin-top: 10px;
  }

  & img {
    border-radius: 15px;
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

const EachProject = ({ img, title, liveLink, githubLink }) => {
  return (
    <Project>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <ul>
        <a href={liveLink} target="_blank" rel="noreferrer">
          <li>live</li>
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer">
          {" "}
          <li>github</li>
        </a>
      </ul>
    </Project>
  );
};

export default EachProject;
