import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillContainer = styled.div`
  border: 3px solid ${({ theme }) => theme.color};
  padding: 40px;
  border-radius: 5px;

  :hover {
    box-shadow: inset 0 0 20px #ffd700;
  }

  & p {
    font-size: 25px;
    font-weight: 600;
  }

  & span {
    font-size: 60px;
  }

  @media (max-width: 600px) {
    padding: 20px;

    & p {
      font-size: 20px;
    }

    & span {
      font-size: 50px;
    }
  }

  @media (max-width: 400px) {
    padding: 10px;

    & p {
      font-size: 16px;
    }

    & span {
      font-size: 40px;
    }
  }
`;

const EachSkill = ({ skill, icon, direction }) => {
  return (
    <SkillContainer
      data-aos={direction}
      data-aos-easing="ease-in-out"
      // data-aos-duration="2500"
    >
      <p>{skill}</p>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
    </SkillContainer>
  );
};

export default EachSkill;
