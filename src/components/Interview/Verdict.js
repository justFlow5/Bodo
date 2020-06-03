import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import Loader from '../loader/Loader';

import { device } from '../mediaQueries/media';

function fadeInBuilder(w2, h2) {
  const fadeIn = keyframes`
      from {
        width: 1%;
  height: 1%;
      opacity: 0;
    }
    to {
        width: ${w2};
  height: ${h2};
      opacity: 1;
    }
    `;
  return fadeIn;
}

const VerdictContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  padding: 10px 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  width: 80%;
  min-height: 55%;
  transform: translate(-50%, -50%);
  border: 3px solid ${({ color }) => color};

  @media ${device.tablet} {
    min-height: 60%;
    width: 45%;
  }

  @media ${device.laptopL} {
    min-height: 53%;
    width: 40%;
  }
`;

const VerdictContent = styled.h3`
  font-size: 14px;
  color: black;
  width: 80%;
  text-align: center;
  line-height: 1.4;
  margin-top: 20px;
  transition: all 0.3s;

  @media ${device.mobileL} {
    width: 70%;
    font-size: 16px;
  }

  @media ${device.tablet} {
    width: 70%;
    font-size: 19px;
  }
`;

const FeedbackTitle = styled.h1`
  padding-top: 50px;
  text-align: center;
  font-size: 34px;
  color: black;
  width: 70%;
  text-align: center;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-shadow: 2px 2px 2px ${({ color }) => color};
  transition: all 0.3s;

  @media ${device.tablet} {
    font-size: 42px;
  }
`;

const GoBackButton = styled.button`
  cursor: pointer;
  width: 170px;
  height: 35px;
  padding: 5px 8px;
  border-radius: 4px;
  font-weight: 500;
  margin-top: 30px;

  font-size: 19px;
  letter-spacing: 0.8px;
  background: #4e5555;
  color: #ececec;
  text-shadow: 1px 1px 1px ${({ color }) => color};
  transition: all 0.3s;
  &:hover {
    background: #232b2b;
    color: #d3d4d4;
  }

  @media ${device.tablet} {
    margin-top: 20px;

    font-weight: 600;
    width: 180px;
    height: 40px;
  }
`;

const Score = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-style: italic;

  background: transparent;
  color: ${({ color }) => color};
  padding: 15px;

  & > .score {
    position: relative;
    bottom: 13px;
    font-size: 32px;

    @media ${device.tablet} {
      font-size: 38px;
    }
  }

  & > .divider {
    font-size: 40px;
    margin-left: 2px;
    margin-right: 5px;

    @media ${device.tablet} {
      font-size: 45px;
    }
  }
  & > .max {
    position: relative;
    bottom: -5px;

    font-size: 32px;

    @media ${device.tablet} {
      font-size: 38px;
    }
  }
`;

const Verdict = ({ average }) => {
  const [verdict, setVerdict] = useState('');

  const poorVerdict = `Not enough. There are much better prepared candidates than you. As of now, You don't stand a chance against them. But don't let it worry you! Invest your time in preparation and come back stronger!`;
  const okVerdict = `Fairly good. With this knowledge You are able to compete with other candidates and make quite a positive impression on inteviewers. Unless there is some candidate with above average knowledge You should be hired. But in case that knowledgeable guy was also invited for the same interview You would be doomed. Get better!`;
  const passingVerdict = `Very good! You are really well prepared for this job and the interviewers surely will notice that. Your skills are top-notch and You should easily get your desired job. Congrats!`;

  const getEvaluation = (averageRating) => {
    if (averageRating < 3) setVerdict(poorVerdict);
    else if (averageRating < 4) setVerdict(okVerdict);
    else setVerdict(passingVerdict);
  };

  useEffect(() => getEvaluation(average), []);

  const chooseColor = () => {
    if (average < 3) return `#ff3333`;
    else if (average < 4) return `#054ed8`;
    else return `#23e832`;
  };

  return average >= 0 ? (
    <VerdictContainer color={() => chooseColor()}>
      <Score color={() => chooseColor()}>
        <span className="score">{average}</span>
        <span className="divider">/</span>
        <span className="max">5</span>
      </Score>
      <FeedbackTitle color={() => chooseColor()}>Feedback</FeedbackTitle>
      <VerdictContent>{verdict}</VerdictContent>

      <GoBackButton
        color={() => chooseColor()}
        onClick={() => {
          window.location.reload(false);
        }}
      >
        Go Back
      </GoBackButton>
    </VerdictContainer>
  ) : (
    <Loader />
  );
};

export default Verdict;
