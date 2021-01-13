import React from "react";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";

const about = [
  "cadell singh",
  "a front end dev",
  "a tech enthusiast",
  "a lifelong student",
  "a believer",
  "a gamer",
];

const Header = styled.h1`
  font-size: 30px;

  & span {
    color: #ffd700;
  }

  @media (max-width: 400px) {
    font-size: 25px;
  }
`;

const TypingEffect = () => {
  return (
    <div>
      hi 👋🏽, i'm{" "}
      <Header>
        <ReactTypingEffect
          text={about}
          speed={50}
          eraseSpeed={50}
          typingDelay={1000}
          eraseDelay={1500}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <span>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return <span key={key}>{char}</span>;
                })}
              </span>
            );
          }}
        />
      </Header>
    </div>
  );
};

export default TypingEffect;
