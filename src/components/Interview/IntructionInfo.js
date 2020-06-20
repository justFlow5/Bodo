import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

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

const InfoContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const InfoContent = styled.div`
  position: relative;
  width: 250px;
  height: 170px;
  border: 1px solid #a6a6a6;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(0);
  animation: ${fadeIn} 0.3s linear 0.3s forwards;
  -webkit-box-shadow: 0px 0px 26px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 26px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 26px -6px white;
  transition: all 0.3s;

  @media ${device.tablet} {
    width: 300px;
  }

  &.hide {
    display: none;
  }

  & .skip {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 12px;
    border-bottom: 1px solid transparent;
    color: #595959;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-bottom: 1px solid black;
      color: black;
    }
  }
`;

const InfoContentText = styled.h3`
  font-size: 14px;
  color: black;
  padding: 15px 20px;
  margin-bottom: 5px;
  line-height: 1.3;
  text-align: left;
  &.goodluck {
    font-size: 24px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const NextButton = styled.button`
  position: relative;
  cursor: pointer;
  width: 30%;
  height: 30px;
  color: #3a3737;
  border: 1px solid #ad9f9f;
  border-radius: 5px;
  letter-spacing: 0.8px;
  text-align: center;
  font-size: 15px;
  transition: all 0.3s;

  &:hover {
    background: #d0d0d0;
    color: black;
  }
`;

const Instruction = ({
  questions,
  activateOverlay,
  setIsQuestion,
  setDrawnQuestions,
  typeOfQuestionDraw,
}) => {
  const [step, setStep] = useState(1);

  const [hide, setHide] = useState('');

  const [selectedCategories, setSelectedCategories] = useState(
    JSON.parse(localStorage.getItem('selectedTechs')) || []
  );

  const oneCategory = 'You will be asked 5';
  const manyCats =
    'You will be asked 1 question for each of these technologies';

  const questionTime = 'For each question You will be given 1 min to answer.';
  const questionTimeEnd =
    'When the time is over You will be asked to evaluate the quality of your answer given the correct one.';

  const endingInfo = `At the end of the interview You will be given a feedback whether or not You passed the interview.`;

  const goodluck = `Good luck!`;

  // get random integer (inclusively - exlusively)
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const handleIntruction = (step, typeOfInterview) => {
    let categories = selectedCategories.join(', ');
    switch (step) {
      case 1:
        return typeOfInterview === 'many-categories'
          ? `${manyCats} ${categories} questions + 1 HR question.`
          : `${oneCategory} ${categories} questions + 1 HR question.`;
        break;

      case 2:
        return questionTime;
        break;
      case 3:
        return questionTimeEnd;

        break;
      case 4:
        return endingInfo;

        break;
      case 5:
        return goodluck;

        break;
    }
  };

  const getRandomQuestions = (
    setOfQuestions,
    selectedCategories,
    typeOfDistribution,
    saveDrawnQuestions
  ) => {
    const selectedNumbers = [];
    const selectedQuestions = [];

    // GET HR QUESTION
    let randomNumberQ = randomNumber(0, setOfQuestions.HR.length);
    let selectedQuestion = setOfQuestions.HR[randomNumberQ];
    selectedQuestions.push(selectedQuestion);

    // 5 questions for the same gcateogrys
    if (typeOfDistribution === 'single-category') {
      let selectedCategory = selectedCategories[0];

      for (let i = 0; i < 5; i++) {
        let randomNumberQ = randomNumber(
          0,
          setOfQuestions[selectedCategory].length
        );

        if (!selectedNumbers.includes(randomNumberQ)) {
          let selectedQuestion =
            setOfQuestions[selectedCategory][randomNumberQ];

          selectedQuestions.push(selectedQuestion);
          selectedNumbers.push(randomNumberQ);
        } else {
          i -= 1;
        }
      }
    } else if (typeOfDistribution === 'between-categories') {
      const numOfCat = selectedCategories.length;
      const selectedQuestionsId = [];
      for (let i = 0; i < 5; i++) {
        let randomNumberCategory = randomNumber(0, numOfCat);
        let choosenCategory = selectedCategories[randomNumberCategory];
        let randomNumberQuestion = randomNumber(
          0,
          setOfQuestions[choosenCategory].length
        );
        let choosenQuestion =
          setOfQuestions[choosenCategory][randomNumberQuestion];
        if (!selectedQuestionsId.includes(choosenQuestion.id)) {
          selectedQuestions.push(choosenQuestion);
          selectedQuestionsId.push(choosenQuestion.id);
        } else i -= 1;
      }
    } else if (typeOfDistribution === 'many-categories') {
      selectedCategories.forEach((category) => {
        let randomNumberQ = randomNumber(0, setOfQuestions[category].length);
        selectedQuestions.push(setOfQuestions[category][randomNumberQ]);
      });
    }
    selectedQuestions.length === 6 && saveDrawnQuestions(selectedQuestions);
  };

  const handleSkip = () => {
    activateOverlay(false);
    setIsQuestion(true);
    setHide('hide');
  };

  useEffect(() => {
    if (step > 5) {
      setHide('hide');
      activateOverlay(false);
      setIsQuestion(true);
    }
  }, [step]);

  useEffect(() => {
    getRandomQuestions(
      questions,
      selectedCategories,
      typeOfQuestionDraw,
      setDrawnQuestions
    );
  }, []);

  return (
    <InfoContainer>
      <InfoContent className={hide}>
        <span className="skip" onClick={handleSkip}>
          skip
        </span>
        <InfoContentText className={step === 5 ? 'goodluck' : null}>
          {' '}
          {handleIntruction(step, typeOfQuestionDraw)}
        </InfoContentText>
        <ButtonContainer>
          {step > 1 && (
            <NextButton onClick={() => setStep(step - 1)}>back</NextButton>
          )}
          <NextButton onClick={() => setStep(step + 1)}>
            {step === 5 ? 'start' : 'next'}
          </NextButton>
        </ButtonContainer>
      </InfoContent>
    </InfoContainer>
  );
};

export default Instruction;
