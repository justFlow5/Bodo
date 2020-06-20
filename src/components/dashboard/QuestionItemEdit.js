import React from 'react';
import styled from 'styled-components';
import { device } from '../mediaQueries/media';

import Textarea from '../forms/Textarea';

const EditItem = styled.div`
  background: #e6f2ff;
  position: relative;
  border-radius: 8px;
  margin: 15px 15px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: all 0.3s ease-in-out;

  @media ${device.laptop} {
    margin: 15px 15px 35px;
  }

  &:hover {
    -webkit-box-shadow: 0px 0px 14px 3px rgba(76, 161, 175, 1);
    -moz-box-shadow: 0px 0px 14px 3px rgba(76, 161, 175, 1);
    box-shadow: 0px 0px 14px 3px rgba(76, 161, 175, 1);
  }

  & > .delete {
    position: absolute;
    display: inline-block;
    top: -2px;
    right: 5px;
    cursor: pointer;
    color: black;

    font-size: 25px;
    z-index: 2;
    color: #001f33;
    transition: color 0.3s;

    @media ${device.laptop} {
      font-size: 35px;
    }

    &:hover {
      color: black;
    }
  }

  & div {
    flex: 1 1 auto;
    border-radius: 0;

    &:first-child {
      flex: 1 1 100%;
      border-radius: 8px 8px 0 0;
    }

    &:last-child {
      border-radius: 0 0 8px 8px;
    }

    & .text {
      font-size: 21px;

      @media ${device.mobileL} {
        font-size: 23px;
      }

      @media ${device.tablet} {
        font-size: 27px;
      }
      @media ${device.laptop} {
        font-size: 32px;
      }
    }
    & .answer {
      font-size: 15px;
      text-align: left;
      font-weight: 500;
      @media ${device.mobileL} {
        font-size: 16px;
      }
      @media ${device.tablet} {
        font-size: 17px;
      }

      @media ${device.laptop} {
        font-size: 20px;
      }
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

const QuestionItemEditComponent = ({
  questionData,
  editData,
  editMode,
  deleteQuestion,
}) => {
  return (
    <EditItem>
      <span
        className="delete"
        title="delete question"
        onClick={() => {
          deleteQuestion(questionData.id, questionData.technology);
        }}
      >
        &times;
      </span>
      <Textarea
        id={questionData.id}
        technology={questionData.technology}
        typeOfField={'text'}
        content={questionData.text}
        editData={editData}
        type="text"
      />
      {/* ANSWER */}
      <Answer editMode={editMode}>
        {typeof questionData.answer === 'string' ? (
          <Textarea
            id={questionData.id}
            technology={questionData.technology}
            typeOfField={'answer'}
            content={questionData.answer}
            editData={editData}
            type="answer"
          />
        ) : (
          Object.keys(questionData.answer).map((par, id) => (
            <Textarea
              key={id}
              id={questionData.id}
              technology={questionData.technology}
              typeOfField={'answer'}
              content={questionData.answer[par]}
              editData={editData}
              type={id === 0 ? 'title' : `par${id}`}
            />
          ))
        )}
      </Answer>
    </EditItem>
  );
};

export default QuestionItemEditComponent;
