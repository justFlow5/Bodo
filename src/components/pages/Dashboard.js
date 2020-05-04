import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Navbar from '../Navbar';

import { javascript } from '../../questionsCollection/Qjavascript';
import { css } from '../../questionsCollection/Qcss';
import { html } from '../../questionsCollection/Qhtml';
import { react } from '../../questionsCollection/Qreact';

import semiCircle from '../../images/mainPage/semiCircle.png';

const fadeIn = keyframes`
0% {
  top: -110px;
  opacity: 0;


  }
  100% {
    top: -20px;
    opacity: 1;
  }
`;

const fadeInTitle = keyframes`
0% {
  transform: translateY(-20px);
  opacity: 0;


  }
  100% {
  transform: translateY(0px);
    opacity: 1;
  }
`;

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

const StyledBurger = styled.button`
  position: fixed;
  top: 13%;
  right: 3%;
  right:  ${({ open }) => (open ? '1%' : '3%')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: all 0.3s;


  &::before {
    content: 'Categories';
    position: absolute;
    left: -415%;
    color: ${({ open }) => (open ? '#EFFFFA' : '#091d34')};
    font-size: 23px;
    font-weight: 700;
    margin-right: 10px;
    transition: color 0.3s;

  }
    &:hover::before  {
      color: ${({ open }) => (open ? '#D8D8D8' : '#11355f')};
    }

  &:hover > div {
      background: ${({ open }) => (open ? '#D8D8D8' : '#11355f')};
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#EFFFFA' : '#091d34')};
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
    transition: transform 0.3s linear;



    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      /* transform: ${({ open }) =>
        open ? 'translateX(20px)' : 'translateX(0)'}; */
      /* transform: ${({ open }) => (open ? 'opacity' : 'translateX(0)')}; */

    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <>
      <StyledBurger
        className="hamburg"
        open={open}
        onClick={() => setOpen(!open)}
      >
        {/* <span>Categories</span> */}
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

// #####################################################################################################
// #####################################################################################################
// #####################################################################################################
// #####################################################################################################

const SemiCircleContainer = styled.div`
  margin: 0px auto;
  /* margin: 55px auto; */
  z-index: 2;
  display: inline-block;
  position: fixed;
  /* top: -20px; */
  top: -110px;

  left: 50%;
  transform: translateX(-50%);

  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
  /* animation-timing-function: linear; */
  opacity: 0;

  animation-duration: 0.3s;

  & > div {
    width: 400px;
    height: 160px;
    border-radius: 50%;
    background: #091d34;
    border: 1px solid #236ab9;
    -moz-box-shadow: 0px -5px 9px -5px rgba(19, 56, 99, 1);
    box-shadow: 0px -5px 9px rgba(19, 56, 99, 1);
    text-align: center;
    /* vertical-align: bottom; */
    font-size: 32px;
    letter-spacing: 1px;
    font-weight: 600;
    color: #fff;
    position: relative;
    & > h3 {
      position: absolute;
      bottom: 27px;
      left: 0;
      right: 0;
      font-size: 36px;
      letter-spacing: 1.5px;
      font-weight: 700;
      color: #fff;
      margin-top: 20px;
      /* text-shadow: 2px 2px 2px #200ac7; */
      /* text-shadow: 2px 2px 2px #236ab9; */
      text-shadow: 2px 2px 2px #005fa3;
    }
  }

  & > img {
    width: 400px;
    height: 140px;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  position: relative;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  background: #e1ecf9;
  height: 100%;
`;

// const PageContent = styled.div`
//   position: relative;
//   width: 70%;
// `;

const Hamburger = styled.div`
  position: fixed;
  top: 80px;
  right: 15px;
`;

const SideNavbar = styled.div`
  position: fixed;
  right: 0;
  top: 55px;
  bottom: 0;
  width: 210px;
  background: #07274c;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  /* -webkit-box-shadow: -10px 0px 16px -9px rgba(19, 56, 99, 1);
  -moz-box-shadow: -10px 0px 16px -9px rgba(19, 56, 99, 1);
  box-shadow: -10px 0px 16px -9px rgba(19, 56, 99, 1); */
  transition: all 0.3s;
`;

const SideNavbarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SideNavbarItem = styled.li`
  height: 30px;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-bottom: 1px solid #133863;
  padding: 30px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #a3aefb;
  white-space: nowrap;

  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5), 2px 2px 2px rgba(163, 174, 251, 0);

  transition: all 0.3s;

  &:first-child {
    margin-top: 100px;
  }

  &:hover {
    text-shadow: none;
    color: #d8dcf9;

    -webkit-box-shadow: inset 0px 0px 20px 2px rgba(46, 74, 117, 1);
    -moz-box-shadow: inset 0px 0px 20px 2px rgba(46, 74, 117, 1);
    box-shadow: inset 0px 0px 15px 2px rgba(46, 74, 117, 1);

    & .numOfQuestions {
      left: -20px;
      opacity: 1;
    }
  }
`;

const NumOfQuestions = styled.div`
  opacity: 0;

  letter-spacing: 0.8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #a3aefb;
  color: #d8dcf9;
  width: 40px;
  height: 40px;
  background: rgba(19, 56, 99, 1);
  /* background: #a3aefbfa; */
  border-radius: 50%;
  border: 4px solid #e1ecf9;
  position: absolute;
  left: -20px;
  left: -25px;
  /* left: 10px; */
  /* -webkit-box-shadow: -10px 0px 16px -9px rgba(19, 56, 99, 1);
  -moz-box-shadow: -10px 0px 16px -9px rgba(19, 56, 99, 1);
  box-shadow: -10px 0px 16px -9px rgba(19, 56, 99, 1); */
  transition: all 0.4s cubic-bezier(0.08, 1.17, 0.96, 0.94);
  transition: all 0.3s cubic-bezier(0.23, 0.94, 0.86, 1);
  transition: all 0.3s ease;
`;

const QuestionsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 200px auto 50px;
  width: 60%;
  /* overflow-y: scroll; */

  & > .title {
    text-align: center;
    line-height: 1.2;

    font-size: 42px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #091d34;

    animation-name: ${fadeInTitle};
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
    /* animation-timing-function: linear; */
    opacity: 0;

    animation-duration: 0.3s;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  /* width: 90%; */
  margin: 40px auto 55px;
`;

const ContentList = styled.ul`
  /* margin-top: 40px; */
  display: flex;
  flex-direction: column;
`;

const ContentItem = styled.li`
  display: flex;
  flex-direction: column;

  margin: 15px 20px;

  & .question-title {
    font-size: 23px;
    font-weight: 600;
    line-height: 1.3;
    color: #091d34;
    padding: 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }

    & ~ input {
      display: none;
    }
    & ~ input:checked + div {
      display: inline-block;
      animation-name: ${fadeUp};
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
      /* animation-timing-function: linear; */
      /* opacity: 0; */

      animation-duration: 0.3s;
    }

    & > .question-number {
      font-size: 28px;
      padding-right: 8px;
      font-style: italic;
      font-weight: 600;
      color: #a3aefb;
    }
  }
`;

const Answer = styled.div`
  display: none;

  & .answer-main {
    font-size: 18px;
    margin: 10px;
    line-height: 1.3;
    color: #06254a;
    font-weight: 500;
  }

  & .answer-sub {
    color: #06254a;
    font-size: 17px;
    padding-left: 20px;
    line-height: 1.2;
    margin: 10px;

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
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [number, setNumber] = useState('');

  const toggleAnswer = (e) => {
    e.target.checked = !e.target.checked;
  };

  const techs = [
    ['HR questions', 15],
    ['HTML', html.length],
    ['CSS', css.length],
    ['JavaScript', javascript.length],
    ['React', react.length],
  ];

  const allQuestions = {
    html,
    css,
    javascript,
    react,
  };
  console.log('allQuestions: ', allQuestions);
  return (
    <>
      {' '}
      <PageContainer>
        {/* <PageContent> */}
        <Navbar />

        <Burger open={open} setOpen={setOpen} />
        {category && (
          <SemiCircleContainer className="tech-header">
            {' '}
            {/* <img src={semiCircle} /> */}
            <div>
              <h3>{category}</h3>
            </div>
          </SemiCircleContainer>
        )}

        <QuestionsContainer>
          {category && (
            <>
              <h3 className="title">
                Top{' '}
                {techs.map((tech) => {
                  if (tech[0] === category) return tech[1];
                })}{' '}
                {category} questions & answers
              </h3>
              <ContentContainer>
                <ContentList>
                  {allQuestions[category.toLowerCase()].map((question, id) => {
                    return (
                      <ContentItem>
                        <label
                          className="question-title"
                          htmlFor={id}
                          onClick={toggleAnswer}
                        >
                          <span className="question-number"> Q{id + 1}:</span>
                          {question.text}
                        </label>
                        <input id={id} type="checkbox" />
                        <Answer key={id}>
                          {Object.keys(question.answer).map((par, id) => {
                            if (id === 0) {
                              return (
                                <h5 className="answer-main">
                                  {question.answer[par]}
                                </h5>
                              );
                            } else {
                              return (
                                <p className="answer-sub">
                                  {question.answer[par]}
                                </p>
                              );
                            }
                          })}
                        </Answer>
                      </ContentItem>
                    );
                  })}
                </ContentList>
              </ContentContainer>
            </>
          )}
        </QuestionsContainer>

        <SideNavbar open={open}>
          <SideNavbarList>
            {techs.map((category) => (
              <SideNavbarItem onClick={() => setCategory(`${category[0]}`)}>
                {category[0]}{' '}
                <NumOfQuestions className="numOfQuestions">
                  {category[1]}
                </NumOfQuestions>
              </SideNavbarItem>
            ))}
          </SideNavbarList>
        </SideNavbar>
        {/* </PageContent> */}
      </PageContainer>
    </>
  );
};

export default Dashboard;
