import React from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../mediaQueries/media';

import Checkbox from '../forms/Checkbox';

const fadeUp = keyframes`
0% {
 
  opacity: 0;
  transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const QuestionItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 5px 20px;
  & .question-title {
    font-size: 21px;
    font-weight: 600;
    line-height: 1.3;
    color: #091d34;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    @media ${device.laptop} {
      font-size: 23px;
    }
    &:hover {
      background: #ccccff;
      & .question-number {
        color: #6666ff;
      }
    }
    & ~ input {
      display: none;
    }
    & ~ input:checked + div {
      display: inline-block;
      animation-name: ${fadeUp};
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
      animation-duration: 0.3s;
    }
    & > .question-number {
      font-size: 28px;
      padding-right: 8px;
      font-style: italic;
      font-weight: 600;
      color: #a3aefb;
      transition: all 0.3s;
    }
  }
`;

const Answer = styled.div`
  display: ${(props) => (props.editMode ? 'inline-block' : 'none')};
  & .answer-main {
    font-size: 16px;
    margin: 10px;
    line-height: 1.3;
    color: #06254a;
    font-weight: 500;
    margin: 10px 20px;
    @media ${device.laptop} {
      font-size: 18px;
    }
  }
  & .answer-sub {
    color: #06254a;
    font-size: 15px;
    padding-left: 20px;
    line-height: 1.2;
    margin: 10px;
    @media ${device.laptop} {
      font-size: 17px;
    }
    &::before {
      content: '';
      display: inline-block;
      border-radius: 50%;
      height: 6px;
      width: 6px;
      background: #a3aefb;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
`;

const QuestionItemComponent = ({
  editMode,
  questionData,
  questionId,
  iterator,
  toggleAnswer,
  updateKnown,
}) => {
  return (
    <QuestionItem>
      {' '}
      {!editMode && (
        <Checkbox
          id={questionData.id}
          boxId={questionId}
          technology={questionData.technology}
          updateKnown={updateKnown}
          key={questionId}
          known={questionData.known}
        />
      )}{' '}
      <label
        className="question-title"
        htmlFor={questionData.id}
        onClick={toggleAnswer}
        // key={question.id}
      >
        <span className="question-number"> {`Q${iterator + 1}`}: </span>{' '}
        {questionData.text}{' '}
      </label>{' '}
      <input id={questionData.id} type="checkbox" />
      <Answer editMode={editMode}>
        {' '}
        {typeof questionData.answer === 'string' ? (
          <h5 className="answer-main"> {questionData.answer} </h5>
        ) : (
          Object.keys(questionData.answer).map((par, id) => {
            if (id === 0) {
              return (
                <h5 className="answer-main"> {questionData.answer[par]} </h5>
              );
            } else {
              return <p className="answer-sub"> {questionData.answer[par]} </p>;
            }
          })
        )}{' '}
      </Answer>{' '}
    </QuestionItem>
  );
};

export default QuestionItemComponent;
