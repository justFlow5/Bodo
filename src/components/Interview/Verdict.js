import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import Loader from '../loader/Loader';

import { device } from '../utils/media';

const fadeIn = keyframes`
    from {
        width: 1%;
  height: 1%;
      opacity: 0;
    }
    to {
        width: 50%;
  height: 55%;
      opacity: 1;
    }
`;

const VerdictContainer = styled.div`
  padding: 15px 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 1%;
  height: 1%;

  transform: translate(-50%, -50%);
  border: 3px solid ${({ color }) => color};
  animation: ${fadeIn} 0.3s linear forwards;
`;

const VerdictContent = styled.h3`
  font-size: 19px;
  color: black;
  width: 70%;
  text-align: center;
  line-height: 1.4;
  margin-top: 20px;
  transition: all 0.3s;
`;

const FeedbackTitle = styled.h1`
  text-align: center;
  font-size: 42px;
  color: black;
  width: 70%;
  text-align: center;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-shadow: 2px 2px 2px ${({ color }) => color};
  transition: all 0.3s;
`;

const GoBackButton = styled.button`
  cursor: pointer;
  width: 180px;
  height: 40px;
  padding: 5px 8px;
  border-radius: 4px;
  font-weight: 600;
  margin-top: 20px;
  font-size: 19px;
  letter-spacing: 0.8px;
  background: #4e5555;
  color: #ececec;
  transition: all 0.3s;
  &:hover {
    background: #232b2b;
    color: #d3d4d4;
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
    font-size: 38px;
  }

  & > .divider {
    font-size: 45px;
    margin-left: 2px;
    margin-right: 5px;
  }
  & > .max {
    font-size: 38px;
    position: relative;
    bottom: -5px;
  }
`;

const Verdict = ({ rateData, average }) => {
  const [verdict, setVerdict] = useState('');

  const poorVerdict = `Not enough. There are much better prepared candidates than you. As of now, You don't stand a chance against them. But don't let it worry you! Invest time in your preparation and come back stronger!`;
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
    else if (average < 4) return `#456aaf`;
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
      {/* <Link to="/interview"> */}
      <GoBackButton
        onClick={() => {
          window.location.reload(false);
        }}
      >
        Go Back
      </GoBackButton>
      {/* </Link> */}
    </VerdictContainer>
  ) : (
    <Loader />
  );
};

export default Verdict;
