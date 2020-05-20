import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Interviewers from '../../images/interview/interviewers.jpg';
import Interviewer from '../../images/interview/interviewer.jpg';

import IntructionInfo from './IntructionInfo';
import Timer from './Timer';
import Rating from './Rating';
import Verdict from './Verdict';
import ExitIcon from '../../images/interview/Exit';

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

const QuestionContainer = styled.div`
  background: ${({ isAnswer }) =>
    isAnswer ? `rgba(255, 255, 255, 0.7)` : `rgba(25, 28, 29, 0.6)`};
  width: 90%;
  /* height: 80px; */
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
  /* font-size: 26px; */
  line-height: 1.3;
  color: #d4dae0bf;
  color: #d4dae0e6;
  text-align: center;
  margin-bottom: ${({ isAnswer }) => (isAnswer ? `20px` : `0px`)};

  /* margin-bottom: 20px; */
  padding: ${({ isAnswer }) => (isAnswer ? `15px 20px 0` : `0px`)};
  /* padding: 15px 20px 0; */

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

// const Exit = styled.button`
//   /* width: 160px; */
//   /* height: 30px; */
//   /* padding: 8px 15px; */
//   /* border-radius: 5px; */
//   width: 50px;
//   height: 50px;
//   padding: 10px;
//   background: blue;
//   cursor: pointer;
//   position: fixed;
//   top: 10px;
//   left: 10px;
//   font-size: 18px;
//   letter-spacing: 0.9px;
//   border-radius: 50%;

//   &:hover {
//     &::before {
//       opacity: 1;
//       transform: rotate(180deg) translateX(15px);
//     }
//   }

//   &::before {
//     content: '\\2192';
//     font-size: 25px;
//     color: white;
//     position: absolute;
//     /* transform: scale(3); */
//     transform: rotate(180deg) translateX(0px);
//     opacity: 0;

//     /* padding-right: 10px; */
//     transition: all 0.3s;
//   }

//   &:hover > h3 {
//     /* padding-right: 10px; */
//   }

//   & > h3 {
//     font-size: 18px;
//     letter-spacing: 0.9px;
//   }
// `;

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

  //   const [typeOfQuestionDraw, setTypeOfQuestionDraw] = useState('');
  const [drawnQuestions, setDrawnQuestions] = useState([]);

  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem('questions'))
  );
  const [selectedCategories, setSelectedCategories] = useState(
    JSON.parse(localStorage.getItem('selectedTechs'))
  );

  const showTimer = () => {
    setTimeout(() => setIsTimer(true), 3000);
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
      // setCurrentQuestion(currentQuestion + 1);
      // activateOverlay(false);
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

  useEffect(() => {
    console.log('ratingData: ', ratingData);
  }, [ratingData]);

  // useEffect(() => {
  //   if (currentQuestion > 1) showTimer(true);
  // }, [currentQuestion]);

  useEffect(() => {
    if (ratingData.length === 5) {
      console.log('getAverage(ratingData): ', getAverage(ratingData));
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
            // getRandomQuestions={getRandomQuestions}
            setDrawnQuestions={setDrawnQuestions}
            typeOfQuestionDraw={typeOfQuestionDraw}
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
                        .sort()
                        .map((ans, id) =>
                          ans === 'title' ? (
                            <p className="titleAnswer">
                              {drawnQuestions[currentQuestion].answer[ans]}
                            </p>
                          ) : (
                            <p className="subAnswer">
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
