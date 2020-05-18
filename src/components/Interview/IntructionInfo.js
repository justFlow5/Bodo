import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

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

const InfoContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* z-index: 10; */
`;

const InfoContent = styled.div`
  position: relative;
  width: 300px;
  height: 170px;
  border: 1px solid #a6a6a6;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.7);
  /* margin: 0 auto; */
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

  &.hide {
    display: none;
    /* opacity: 0;
    transform: scale(0); */
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
  font-size: 15px;
  color: black;
  padding: 15px 20px;
  margin-bottom: 10px;
  line-height: 1.2;
  text-align: left;

  /* top: 50%;
  transform: translateY(-50%); */

  &.goodluck {
    font-size: 24px;
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
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  transition: all 0.3s;

  &:hover {
    background: silver;
  }
`;

const Instruction = ({
  questions,
  activateOverlay,
  setIsQuestion,
  // getRandomQuestions,
  setDrawnQuestions,
  typeOfQuestionDraw,
}) => {
  const [step, setStep] = useState(1);

  const [hide, setHide] = useState('');

  const [selectedCategories, setSelectedCategories] = useState(
    JSON.parse(localStorage.getItem('selectedTechs')) || []
  );

  const [info, setInfo] = useState(
    'You will be asked 5 questions from the selected category.'
  );

  const oneCategory = 'You will be asked 5 questions from';

  const manyCategories =
    'You will be asked 5 questions from each of the selected category.';

  const questionTime = 'For each question You will be given 1 min to answer.';
  const questionTimeEnd =
    'When the time is over You will be asked to evaluate the quality of your answer given the correct one.';

  const endingInfo = `At the end of the interview You will be given a verdict whether You passed the interview.`;

  const goodluck = `Good luck!`;

  // get random integer (inclusively - exlusively)
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const handleIntruction = () => {
    let categories = selectedCategories.join(', ');
    switch (step) {
      case 1:
        // return selectedCategories.length > 1
        //   ? `${oneCategory} ${selectedCategories.join(', ')}`
        //   : null;
        // break;
        return selectedCategories.length > 0
          ? `${oneCategory} ${categories}.`
          : null;

        // return `${oneCategory} ${selectedCategories.join(', ')}`;

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
    console.log('DrawnQuestions FUNCTIOn');
    console.log('typeOfDistribution: ', typeOfDistribution);

    const selectedNumbers = [];
    const selectedQuestions = [];
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
        }
        // else {
        //   i = -1;
        // }
      }
    } else if (typeOfDistribution === 'between-categories') {
      const numOfCat = selectedCategories.length;
      console.log('numOfCat: ', numOfCat);

      const selectedQuestionsId = [];
      for (let i = 0; i < 5; i++) {
        console.log('hello');
        let randomNumberCategory = randomNumber(0, numOfCat);
        console.log('randomNumberCategory: ', randomNumberCategory);
        let choosenCategory = selectedCategories[randomNumberCategory];
        console.log('choosenCategory: ', choosenCategory);

        let randomNumberQuestion = randomNumber(
          0,
          setOfQuestions[choosenCategory].length
        );
        console.log('randomNumberQuestion: ', randomNumberQuestion);

        let choosenQuestion =
          setOfQuestions[choosenCategory][randomNumberQuestion];
        console.log('choosenQuestion: ', choosenQuestion);

        if (!selectedQuestionsId.includes(choosenQuestion.id)) {
          console.log('if (!selectedQuestionsId.includes: ', choosenQuestion);

          selectedQuestions.push(choosenQuestion);
          selectedQuestionsId.push(choosenQuestion.id);
        }
        // else i -= 1;
      }
    } else if (typeOfDistribution === 'many-categories') {
      selectedCategories.forEach((category) => {
        let randomNumberQ = randomNumber(0, setOfQuestions[category].length);
        selectedQuestions.push(setOfQuestions[category][randomNumberQ]);
      });
    }
    console.log('DrawnQuestions: ', selectedQuestions);

    selectedQuestions.length === 5 && saveDrawnQuestions(selectedQuestions);
    selectedQuestions.length === 5 &&
      console.log('DrawnQuestions: ', selectedQuestions);
  };

  const handleSkip = () => {
    activateOverlay(false);
    setIsQuestion(true);
    setHide('hide');
    // getRandomQuestions()setOfQuestions,
    // selectedCategories,
    // typeOfDistribution
  };

  useEffect(() => {
    if (step > 5) {
      setHide('hide');
      activateOverlay(false);
      setIsQuestion(true);
    }
  }, [step]);

  useEffect(() => {
    console.log('questions: ', questions);
    console.log('selectedCategories: ', questions);

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
          {handleIntruction(step)}
        </InfoContentText>
        <ButtonContainer>
          {/* <NextButton onClick={() => handleIntruction('back')}>back</NextButton> */}
          {/* <NextButton onClick={() => handleIntruction('next')}>next</NextButton> */}
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
