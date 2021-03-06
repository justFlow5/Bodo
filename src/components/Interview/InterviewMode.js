import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import Interviewers from '../../images/interviewMode/interviewers.jpg';
import Interviewer from '../../images/interviewMode/interviewer.jpg';
import ExitIcon from '../../images/interviewMode/Exit';
import StopIcon from '../../images/interviewMode/StopIcon';

import IntructionInfo from './IntructionInfo';
import Timer from './Timer';
import Rating from './Rating';
import Verdict from './Verdict';
import { device } from '../mediaQueries/media';

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
  width: 0;
  height: 100%;
  overflow: hidden;

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

    &.single {
      display: inline-block;

      @media ${device.tablet} {
        display: none;
      }
    }

    &.many {
      display: none;

      @media ${device.tablet} {
        display: inline-block;
      }
    }
  }

  transition: 0.5s ease;

  &.active {
    width: 100%;
    left: 0;
  }
`;

const TimerContainer = styled.div`
  border-radius: 5px 0 0 0;

  height: 96px;
  width: 130px;

  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0px;
  transform: translateX(100%);
  animation: ${fadeInTimer} 0.3s ease forwards;

  @media ${device.tablet} {
    height: 150px;
    width: 220px;
  }
`;

const StopIconContainer = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  display: inline-block;
  top: 3px;
  right: 3px;
  cursor: pointer;
  z-index: 1000;

  @media ${device.tablet} {
    width: 30px;
    height: 30px;
  }

  &[aria-label]:after {
    opacity: 0;
    content: attr(aria-label);
    padding: 4px 8px;
    border-radius: 7px;
    position: absolute;
    height: 35px;
    width: 150px;
    left: -430%;
    top: -200%;
    white-space: pre-wrap;
    line-height: 1.4;
    z-index: 20;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    transition: opacity 0.3s;
    pointer-events: none;
    font-size: 11px;

    @media ${device.tablet} {
      left: -430%;
      top: -140%;
    }
  }

  &[aria-label]:hover:after {
    opacity: 1;
  }

  & svg {
    width: 100%;
    height: 100%;
    position: relative;
    fill: #40434a;
    transition: all 0.3s;
    &:hover {
      fill: black;
    }
  }
`;

const QuestionContainer = styled.div`
  background: ${({ isAnswer }) =>
    isAnswer ? `rgba(255, 255, 255, 0.7)` : `rgba(25, 28, 29, 0.6)`};
  width: 90%;
  border-radius: 14px;
  display: inline-block;
  position: absolute;
  padding: 15px 20px;
  opacity: 0;
  transform: scale(0);

  top: 13%;
  left: 0;
  right: 0;
  max-height: 80%;

  margin-left: auto;
  margin-right: auto;
  animation: ${fadeIn} 0.3s linear 0.4s forwards;

  overflow-y: scroll;

  transition: all 0.3s;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.mobileL} {
    width: 70%;
  }

  @media ${device.tablet} {
    width: 50%;
    top: 20px;
    max-height: 90%;
    padding: 15px 30px;
  }
`;
const QuestionContent = styled.h3`
  font-size: ${({ isAnswer }) => (isAnswer ? `26px` : `21px`)};
  line-height: 1.3;
  color: #d4dae0bf;
  color: #d4dae0e6;
  text-align: center;
  margin-bottom: ${({ isAnswer }) => (isAnswer ? `20px` : `0px`)};
  padding: ${({ isAnswer }) => (isAnswer ? `15px 20px 0` : `0px`)};
  color: ${({ isAnswer }) => (isAnswer ? `black` : `#d4dae0e6`)};
  @media ${device.tablet} {
    font-size: 30px;
  }
`;

const AnswerContainer = styled.h3`
  font-size: 21px;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  position: relative;

  color: ${({ isAnswer }) => (isAnswer ? `black` : `#d4dae0e6`)};

  & .titleAnswer {
    font-size: 15px;

    @media ${device.mobileL} {
      font-size: 17px;
    }

    @media ${device.tablet} {
      font-size: 19px;
    }
    @media ${device.laptop} {
      font-size: 21px;
      margin: 10px;
    }
  }

  & .mainAnswer {
    font-size: 16px;
    margin: 10px;
  }

  & .subAnswer {
    font-size: 14px;
    margin: 6px 10px;

    @media ${device.tablet} {
      font-size: 16px;
      margin: 10px;
    }
  }
`;

const NextQuestionButton = styled.button`
  position: absolute;
  margin-top: 50px;
  border-radius: 6px;
  bottom: 5px;
  right: 10px;
  cursor: pointer;

  width: 135px;
  height: 35px;
  font-size: 16px;

  padding: 6px 14px;
  background: #4e5555;
  color: #bdbfbf;
  letter-spacing: 0.8px;
  transition: all 0.3s;

  &:hover {
    background: #232b2b;
    color: #d3d4d4;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;

    &:hover {
      background: #4e5555;
      color: #bdbfbf;
      cursor: not-allowed;
    }
  }

  @media ${device.mobileL} {
    width: 145px;
    height: 38px;
    font-size: 17px;
  }

  @media ${device.tablet} {
    width: 160px;
    height: 40px;
    font-size: 20px;
  }
`;

const Exit = styled.button`
  & svg {
    width: 65px;
    height: 65px;
    position: fixed;
    top: 10px;
    left: 10px;
    fill: ${({ color }) => color};
    cursor: pointer;
    /* transform: rotateY(0deg); */
    /* padding: 10px; */
    transition: all 0.5s ease-out;
    &:hover {
      transform: rotateY(360deg);
    }
  }
`;

const InterviewMode = ({ enterInterviewMode, typeOfQuestionDraw }) => {
  const [overlay, activateOverlay] = useState(true);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isQuestion, setIsQuestion] = useState(false);
  const [isTimer, setIsTimer] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ratingData, setRatingData] = useState([]);
  const [rateUpdate, setRateUpdate] = useState(false);
  const [average, setAverage] = useState();

  const [ratingValue, setRatingValue] = useState(0);

  const [showVerdict, setShowVerdict] = useState(false);

  const [drawnQuestions, setDrawnQuestions] = useState([]);

  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem('questions'))
  );

  const showTimer = () => {
    setTimeout(() => setIsTimer(true), 3000);
  };

  const showAnswer = () => {
    console.log('IM CLICKEDD HELL YEHA');
    setIsTimer(false);
    activateOverlay(true);
    setIsAnswer(true);
    setIsQuestion(true);
  };

  const handleConfirmation = () => {
    if (ratingData.length < 4) {
      setIsAnswer(false);
      setCurrentQuestion(currentQuestion + 1);
      activateOverlay(false);
      showTimer();
      setRateUpdate(false);
      setRatingData([...ratingData, ratingValue]);
      setRatingValue(0);
    } else {
      // THE FINAL ANSWER CONFIRMATION
      setIsAnswer(false);
      setIsQuestion(false);
      setRateUpdate(false);
      setRatingData([...ratingData, ratingValue]);
      setRatingValue(0);
    }
  };

  const getAverage = (arrayOfRates) => {
    return arrayOfRates.reduce((a, b) => a + b) / arrayOfRates.length;
  };

  useEffect(() => {
    if (!overlay) showTimer(true);
  }, [overlay]);

  useEffect(() => {}, [ratingData]);

  useEffect(() => {
    if (ratingData.length === 5) {
      setAverage(getAverage(ratingData));
      setShowVerdict(true);
    }
  }, [ratingData]);

  return (
    <Overlay className={enterInterviewMode ? 'active' : null}>
      <img
        src={Interviewers}
        alt="interviewers"
        className={overlay ? 'many' : 'many overlayOff'}
      />
      <img
        src={Interviewer}
        alt="interviewers"
        className={overlay ? 'single' : 'single overlayOff'}
      />
      {enterInterviewMode && (
        <>
          <IntructionInfo
            questions={questions}
            activateOverlay={activateOverlay}
            setIsQuestion={setIsQuestion}
            typeOfQuestionDraw={typeOfQuestionDraw}
            setDrawnQuestions={setDrawnQuestions}
            typeOfQuestionDraw={typeOfQuestionDraw}
          />
          {isTimer && (
            <TimerContainer>
              <StopIconContainer
                onClick={showAnswer}
                aria-label="I have nothing more to add - stop timer"
              >
                <StopIcon />
              </StopIconContainer>
              <Timer showAnswer={showAnswer} isTimer={isTimer} />
            </TimerContainer>
          )}
          {/* QUESTION */}
          {/* {currentQuestion <=5?  */}
          {(isAnswer || isQuestion) && (
            <QuestionContainer isAnswer={isAnswer}>
              <QuestionContent isAnswer={isAnswer}>
                {drawnQuestions[currentQuestion].text}
              </QuestionContent>
              {isAnswer && drawnQuestions.length > 0 && (
                <>
                  <AnswerContainer isAnswer={isAnswer}>
                    {typeof drawnQuestions[currentQuestion].answer ===
                    'string' ? (
                      <p className="mainAnswer">
                        {' '}
                        {drawnQuestions[currentQuestion].answer}{' '}
                      </p>
                    ) : (
                      Object.keys(drawnQuestions[currentQuestion].answer)
                        .sort((a, b) =>
                          a.toLowerCase() > b.toLowerCase() ? -1 : 1
                        )
                        .map((ans, id) =>
                          ans === 'title' ? (
                            <p className="titleAnswer" id={id}>
                              {drawnQuestions[currentQuestion].answer[ans]}
                            </p>
                          ) : (
                            <p className="subAnswer" id={id}>
                              {drawnQuestions[currentQuestion].answer[ans]}
                            </p>
                          )
                        )
                    )}

                    <Rating
                      // setRatingData={setRatingData}
                      ratingData={ratingData}
                      setRateUpdate={setRateUpdate}
                      ratingValue={ratingValue}
                      setRatingValue={setRatingValue}
                    />
                    <NextQuestionButton
                      disabled={rateUpdate ? false : true}
                      onClick={handleConfirmation}
                    >
                      Accept
                    </NextQuestionButton>
                  </AnswerContainer>
                </>
              )}
            </QuestionContainer>
          )}
          {showVerdict ? (
            <Verdict ratingData={ratingData} average={average} />
          ) : null}
          <Exit
            color={overlay ? 'white' : 'black'}
            onClick={() => {
              window.location.reload(false);
            }}
          >
            <ExitIcon />
          </Exit>
          }
        </>
      )}
    </Overlay>
  );
};

export default InterviewMode;
