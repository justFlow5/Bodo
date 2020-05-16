import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Interviewers from '../../images/interview/interviewers.jpg';
import IntructionInfo from './IntructionInfo';
import Timer from './Timer';

import { device } from '../utils/media';

const fadeIn = keyframes`
    from {
      transform: scale(0);
      opacity: 0;
 
    }
    to {
      transform: scale(1);
      opacity: 1;

    }
`;

const fadeInTimer = keyframes`
    from {
      transform: translateX(100%); 
    }
    to {
        transform: translateX(0%); 
    }
`;

const Overlay = styled.section`
  position: fixed;
  bottom: 0;
  left: 100%;
  right: 0;
  background-color: #008cba;
  overflow: hidden;
  width: 0;
  height: 100%;

  & > .picWrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.3s;

    &.overlayOff {
      background-color: transparent;
    }
  }
  & img {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    filter: blur(3px) brightness(40%);
    -webkit-filter: blur(3px) brightness(40%);
    transition: all 0.3s;

    &.overlayOff {
      filter: blur(0px) brightness(100%);
      -webkit-filter: blur(0px) brightness(100%);
    }
  }

  transition: 0.5s ease;

  &.active {
    width: 100%;
    left: 0;
  }
`;

const TimerContainer = styled.div`
  height: 150px;
  width: 220px;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0px;
  transform: translateX(100%);
  animation: ${fadeInTimer} 0.3s ease forwards;

  /* transition: all 0.3s ease;

  &.active {
    transform: translateX(0%);
  } */
`;

const QuestionContainer = styled.div`
  background: ${({ isAnswer }) =>
    isAnswer ? `rgba(255, 255, 255, 0.7)` : `rgba(25, 28, 29, 0.6)`};
  width: 45%;
  /* height: 80px; */
  border-radius: 14px;
  display: inline-block;
  position: absolute;
  padding: 15px 20px;
  top: 20px;
  opacity: 0;
  transform: scale(0);

  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;
  animation: ${fadeIn} 0.3s linear 0.4s forwards;
  transition: all 0.3s;
`;
const QuestionContent = styled.h3`
  font-size: 21px;
  line-height: 1.3;
  color: #d4dae0bf;
  color: #d4dae0e6;

  color: ${({ isAnswer }) => (isAnswer ? `black` : `#d4dae0e6`)};
`;

const QuestionAnswer = styled.h3`
  font-size: 21px;
  line-height: 1.3;

  color: ${({ isAnswer }) => (isAnswer ? `black` : `#d4dae0e6`)};

  & .titleAnswer {
    font-size: 18px;
  }

  & .mainAnswer {
    font-size: 16px;
  }

  & .subAnswer {
    font-size: 16px;
  }
`;

const InterviewMode = ({ enterInterviewMode }) => {
  const [overlay, activateOverlay] = useState(true);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isQuestion, setIsQuestion] = useState(false);

  const [isTimer, setIsTimer] = useState(false);

  const showTimer = () => {
    setTimeout(() => setIsTimer(true), 6000);
  };

  useEffect(() => {
    if (!overlay) showTimer(true);
  }, [overlay]);

  return (
    <Overlay className={enterInterviewMode ? 'active' : null}>
      <img
        src={Interviewers}
        alt="interviewers"
        className={overlay ? '' : 'overlayOff'}
      />
      {enterInterviewMode && (
        <>
          <IntructionInfo
            activateOverlay={activateOverlay}
            setIsQuestion={setIsQuestion}
          />
          {isTimer && (
            <TimerContainer>
              <Timer
                activateOverlay={activateOverlay}
                setIsTimer={setIsTimer}
                setIsAnswer={setIsAnswer}
                setIsQuestion={setIsQuestion}
              />
            </TimerContainer>
          )}
          {/* QUESTION */}
          {(isAnswer || isQuestion) && (
            <QuestionContainer isAnswer={isAnswer}>
              <QuestionContent isAnswer={isAnswer}>
                Initially, we utilise useState react hook to create a new state
                variable counter in the functional component. counter holds the
                number of seconds the counter should start with. Then a native
                JavaScript function,
              </QuestionContent>
              {isAnswer && (
                <QuestionAnswer isAnswer={isAnswer}>
                  Teraz możesz przeglądać strony w trybie prywatnym. Inni
                  użytkownicy tego urządzenia nie zobaczą Twojej aktywności.
                  Pamiętaj tylko, że zakładki i pobrane pliki zostaną zapisane.
                  Więcej informacji
                </QuestionAnswer>
              )}
            </QuestionContainer>
          )}
          }
        </>
      )}
    </Overlay>
  );
};

export default InterviewMode;
