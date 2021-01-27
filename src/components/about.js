import React from "react";
import styled from "styled-components";
import Cadell from "../images/Cadelly.jpg";
import TypingEffect from "./typingEffect";
import "aos/dist/aos.css";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.7fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-row-gap: 15px;
    width: 100%;
  }
`;

const Details = styled.div`
  padding-right: 30px;
  line-height: 35px;
  letter-spacing: 1px;
  font-size: 20px;
  color: ${({ theme }) => theme.aboutTextColor};

  & p {
    font-weight: bold;
  }

  & p:nth-child(2n) {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media(min-width: 1500px) {
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 3px;
  }
`;

const ImageContainer = styled.div`
  & img {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 900px) {
    width: 70%;
    margin: 20px auto;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <Container 
    data-aos="zoom-in-up" 
    data-aos-easing="ease-in-out-back"
    >
      <Details>
        <TypingEffect />

        <p>
          currently a 2nd year student at the university of trinidad & tobago
          specializing in software engineering. for the most part, i'm a self
          taught front end dev who has a passion for creating beautiful
          responsive web applications.
        </p>

        <p>
          apart from web development, my other interests include anything music
          related, gaming, rewatching episodes of the office & talking/watching
          basketball. on an unrelated note.
        </p>
      </Details>

      <ImageContainer>
        <img src={Cadell} alt="Cadell" />
      </ImageContainer>
    </Container>
  );
};

export default About;
