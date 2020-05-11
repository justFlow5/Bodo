import React, { useState, useEffect, useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import db from '../../firebase/base';
import { addQuestion, getQuestions } from '../localStorage';
import lodash from 'lodash';
import { uuid } from 'uuidv4';

import { AuthContext } from '../../contexts/Auth';
import { device } from '../utils/media';
// import { groupBy } from '../utils/helperFunctions';

import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import SortASC from '../../images/dashboard/sortASC';
import SortDESC from '../../images/dashboard/sortDESC';

import Navbar from '../Navbar';

import { JavaScript } from '../../questionsCollection/Qjavascript';
import { CSS } from '../../questionsCollection/Qcss';
import { HTML } from '../../questionsCollection/Qhtml';
import { react } from '../../questionsCollection/Qreact';
import { staticQuestions } from '../../questionsCollection/staticQuestions';

import semiCircle from '../../images/mainPage/semiCircle.png';

import Datalist from '../forms/Datalist';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

import Checkbox from '../forms/Checkbox';

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

const fadeBottom = keyframes`
0% {
  bottom: -70px;
  opacity: 0;
  }
  100% {
    bottom: -10px;
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

// const fadeIn = keyframes`
// 0% {
//   top: -1px;
//   opacity: 0;

//   }
//   100% {
//     top: -20px;
//     opacity: 1;
//   }
// `;

const StyledBurger = styled.button`
outline: none;
  position: fixed;
  top: 3%;
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
  @media ${device.laptop} {
    top: 13%;
}
  &::before {
    content: 'Categories';
    position: absolute;
    left: -415%;
    color: ${({ open }) => (open ? '#9999ff' : '#091d34')};
    font-size: 23px;
    font-weight: 700;
    margin-right: 10px;
    /* background:  ${({ open }) => (open ? '#E1ECF9' : 'transparent')}; */
    /* background: ${({ open }) => (open ? '#a3aefb' : 'transparent')}; */
    /* background: ${({ open }) => (open ? 'transparent' : '#E1ECF9')}; */
    z-index: 11;
    transition: color 0.3s linear;
 
  }
    &:hover::before  {
      color: ${({ open }) => (open ? '#ADADFF' : '#11355f')};
    }
  &:hover > div {
      background: ${({ open }) => (open ? '#ADADFF' : '#11355f')};
  }
  &:focus {
    outline: none;
    outline: 0;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#9999ff' : '#091d34')};
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
        {/* <span>Categories</span> */} <div />
        <div />
        <div />
      </StyledBurger>{' '}
    </>
  );
};

// #####################################################################################################
// #####################################################################################################
// #####################################################################################################
// #####################################################################################################

const SemiCircleContainer = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto; */
  position: relative;
  z-index: 2;
  display: inline-block;
  animation-name: ${fadeBottom};
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
  /* animation-timing-function: linear; */
  opacity: 0;
  animation-duration: 0.4s;
  @media ${device.laptop} {
    animation-name: ${fadeIn};
  }
  & > div {
    position: relative;
    position: fixed;
    z-index: 999;
    bottom: -40px;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: auto;
    width: 300px;
    height: 120px;
    border-radius: 50%;
    background: #091d34;
    border: 1px solid #236ab9;
    -moz-box-shadow: 0px -5px 9px -5px rgba(19, 56, 99, 1);
    box-shadow: 0px -5px 9px rgba(19, 56, 99, 1);
    text-align: center;
    /* vertical-align: bottom; */
    font-size: 27px;
    letter-spacing: 0.8px;
    font-weight: 600;
    color: #fff;
    @media ${device.laptop} {
      top: -20px;
      bottom: unset;
      width: 400px;
      height: 160px;
      font-size: 32px;
    }
    & > h3 {
      position: absolute;
      z-index: 999;
      top: -5px;
      left: 0;
      right: 0;
      font-size: 24px;
      letter-spacing: 1.5px;
      font-weight: 700;
      color: #fff;
      margin-top: 20px;
      /* text-shadow: 2px 2px 2px #200ac7; */
      /* text-shadow: 2px 2px 2px #236ab9; */
      text-shadow: 2px 2px 2px #005fa3;
      padding: 0px 10px;
      @media ${device.laptop} {
        bottom: 27px;
        top: unset;
        font-size: 36px;
      }
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
  top: 0px;
  bottom: 0;
  width: 100%;
  background: #07274c;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 0.3s;
  & .simplebar-scrollbar:before {
    background: #a3aefb;
    /* height: 100px; */
  }
  & .simplebar-scrollbar {
    height: 150px !important;
  }
  & .scrollDown {
    margin-top: 10px;
    text-align: center;
    color: #a3aefb;
    font-size: 12px;
    position: relative;
    &::after {
      margin-top: 5px;
      content: ' \\2193';
      display: block;
      transform: scale(2);
    }
  }
  @media ${device.laptop} {
    /* top: 55px; */
    /* margin-top: 55px; */
    width: 210px;
    /* padding-top: 20px;
    padding-bottom: 30px; */
  }
`;

const SideNavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  margin-top: 20px;
  @media ${device.laptop} {
    margin-top: 200px;
    margin-top: 20px;
    /* margin-bottom: 50px; */
    /* height: 75%; */
  }
`;

const SideNavbarItem = styled.li`
  height: 30px;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  /* justify-content: flex-start; */
  align-items: center;
  color: white;
  border-bottom: 1px solid #133863;
  padding: 30px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #a3aefb;
  white-space: nowrap;
  overflow: hidden;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5), 2px 2px 2px rgba(163, 174, 251, 0);
  transition: all 0.3s;
  /* &:focus {
    color: red;
    -webkit-box-shadow: inset 0px 0px 20px 2px rgba(46, 74, 117, 1);
    -moz-box-shadow: inset 0px 0px 20px 2px rgba(46, 74, 117, 1);
    box-shadow: inset 0px 0px 15px 2px rgba(46, 74, 117, 1);
  } */
  @media ${device.laptop} {
    /* top: 55px; */
    width: 210px;
  }
  &:first-child {
    /* margin-top: 100px; */
    /* padding-top: 0; */
  }
  &:hover {
    text-shadow: none;
    color: #d8dcf9;
    -webkit-box-shadow: inset 0px 0px 20px 2px rgba(46, 74, 117, 1);
    -moz-box-shadow: inset 0px 0px 20px 2px rgba(46, 74, 117, 1);
    box-shadow: inset 0px 0px 15px 2px rgba(46, 74, 117, 1);
    & .numOfQuestions {
      @media ${device.laptop} {
        /* left: 150px; */
        /* top: -10px; */
        top: -17px;
        opacity: 1;
        /* test */
        /* position: absolute; */
        /* right: 10px; */
        top: -23px;
        & > span {
          position: relative;
          bottom: -9px;
          font-size: 13px;
          color: white;
        }
      }
    }
  }
`;

const NumOfQuestions = styled.div`
  display: inline-block;
  border-radius: 6px;
  border-radius: 50%;
  right: -10px;
  top: -12px;
  /* top: -10px; */
  /* position: absolute; */
  position: relative;
  color: #d8dcf9;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: unset; */
  padding: 2px;
  /* top: unset; */
  /* right: unset; */
  width: 30px;
  height: 30px;
  opacity: 1;
  background: rgba(19, 56, 99, 1);
  font-size: 12px;
  /* left: -25px; */
  border: 2px solid #200ac7;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(32, 10, 199, 1);
  -moz-box-shadow: 0px 0px 12px 0px rgba(32, 10, 199, 1);
  box-shadow: 0px 0px 12px 0px rgba(32, 10, 199, 1);

  transition: all 0.3s cubic-bezier(0.69, 0.9, 0.92, 1.19);
  @media ${device.laptop} {
    display: inline-block;
    /* border-radius: 6px; */
    top: -50px;
    right: -10px;
    /* top: -10px; */
    /* position: absolute; */
    position: relative;
    color: #d8dcf9;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: unset; */
    padding: 2px;
    /* top: unset; */
    /* right: unset; */
    width: 30px;
    height: 30px;
    opacity: 0;
    background: rgba(19, 56, 99, 1);
    font-size: 14px;
    /* left: -25px; */
    border: 2px solid #200ac7;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(32, 10, 199, 1);
    -moz-box-shadow: 0px 0px 15px 0px rgba(32, 10, 199, 1);
    box-shadow: 0px 0px 15px 0px #57a0e0;
    /* test */
    position: absolute;
    right: 10px;
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }
`;

const QuestionsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 70px auto 50px;
  /* width: 75%; */
  width: 90%;
  @media ${device.laptop} {
    width: 60%;
    margin: 200px auto 50px;
  }
  & > .title {
    text-align: center;
    line-height: 1.2;
    font-size: 35px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #091d34;
    animation-name: ${fadeInTitle};
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
    /* animation-timing-function: linear; */
    opacity: 0;
    animation-duration: 0.3s;
    @media ${device.laptop} {
      font-size: 42px;
    }
  }
`;

const ContentContainer = styled.div`
  position: relative;
  /* width: 90%; */
  margin: 25px auto 55px;
  @media ${device.laptop} {
    margin: 40px auto 55px;
    width: 100%;
  }
`;

const ContentList = styled.ul`
  /* margin-top: 40px; */
  display: flex;
  flex-direction: column;
  & .known:hover + label {
    background: #ccccff;
    & .question-number {
      color: #6666ff;
    }
  }
`;

const ContentItem = styled.li`
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
      transition: all 0.3s;
    }
  }
`;

const Answer = styled.div`
  display: none;
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

const NoInfo = styled.p`
  position: fixed;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  font-weight: 600;
  color: #a3aefb;
`;

const SortContainer = styled.div`
  margin: 5px;
  width: 100%;
  position: relative;
  text-align: right;
`;
const SortList = styled.ul`
  position: relative;

  display: inline-block;

  justify-content: flex-end;
  align-items: center;

  margin-right: 12%;

  @media ${device.laptop} {
    margin-right: 15px;
  }
`;

const SortItem = styled.li`
  display: inline-block;
  margin: 0 5px;
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:hover > svg {
    fill: white;
  }

  &:nth-child(2) {
    width: 25px;
    height: 25px;
    position: relative;
    top: 5px;
  }

  &.active > svg {
    fill: white;
  }

  & svg {
    fill: #a3aefb;
    width: 100%;
    height: 100%;
    transition: all 0.3s;
  }
`;

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [sortType, setSortType] = useState(
    localStorage.getItem('sortType') || 'alpha'
  );
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('questions')) || []
  );

  const [numOfTech, setNumOfTech] = useState(
    JSON.parse(localStorage.getItem('numOfTech')) || []
  );

  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem('questions')) || []
  );

  const { currentUser } = useContext(AuthContext);
  // console.log('currentUser: ', currentUser);

  const toggleAnswer = (e) => {
    e.target.checked = !e.target.checked;
  };

  const sortAlpha = (arr) => {
    return arr.sort((a, b) =>
      a[0].localeCompare(b[0], undefined, {
        sensitivity: 'base',
      })
    );
  };

  const sortASC = (arr) => {
    return arr.sort((a, b) => a[1] - b[1]);
  };

  const sortDESC = (arr) => {
    return arr.sort((a, b) => b[1] - a[1]);
  };

  const sortTech = (arr) => {
    if (sortType === 'alpha') {
      localStorage.setItem(`sortType`, 'alpha');
      return sortASC(arr);
    } else if (sortType === 'desc') {
      localStorage.setItem(`sortType`, 'desc');
      return sortDESC(arr);
    } else if (sortType === 'asc') {
      localStorage.setItem(`sortType`, 'asc');
      return sortASC(arr);
    }
  };

  const updateKnown = (id, technology, value) => {
    // console.log('updateKnown ID: ', id);
    const allQuestions = JSON.parse(localStorage.getItem('questions'));
    // console.log('YOU TECH!: ', allQuestions[technology]);
    // allQuestions[technology]

    // const updatedTechQuestions = allQuestions[technology].map((question) => {
    const updatedTechQuestions = allQuestions[technology].map((question) => {
      if (question.id === id) {
        question.known = value;
        return question;
      } else return question;
    });

    allQuestions[technology] = updatedTechQuestions;

    // console.log('HER GOES UPDATE: ', allQuestions);
    // save to localStorage
    localStorage.setItem('questions', JSON.stringify(allQuestions));

    // save to database
    db.ref(`users/${currentUser.uid}/questions`).update(allQuestions);
  };

  const getNumberOfQuestions = (questionsObj) => {
    return Object.keys(questionsObj).map((tech) => {
      return [tech, questionsObj[tech].length];
    });
  };

  // ######################## INIT ########################################

  const LoadInitialData = async () => {
    const getFlag = await db
      .ref(`users/${currentUser.uid}/staticDataStatus`)
      .once('value');

    const isInitialDataLoaded = getFlag.val();

    if (!isInitialDataLoaded) {
      // group data in firebase way
      const groupedData = lodash.groupBy([...staticQuestions], 'technology');

      // save data in runtime via hooks
      setQuestions(groupedData);

      // sava data to localStorage
      localStorage.setItem('questions', JSON.stringify(groupedData));

      // save number of questions to localStorage
      const techNumber = getNumberOfQuestions(groupedData);
      localStorage.setItem('numOfTech', JSON.stringify(techNumber));

      // save it via hook
      setNumOfTech(techNumber);

      // save data to firebase
      db.ref(`users/${currentUser.uid}/questions`).set(groupedData);

      // set flag as true -- this funtction will never run again
      db.ref(`users/${currentUser.uid}/staticDataStatus`).set(true);
    }
  };

  // ######################## END INIT ########################################

  // ######################## DATABASE DATA ########################################

  const getDataFromDb = async () => {
    const getFlag = await db
      .ref(`users/${currentUser.uid}/staticDataStatus`)
      .once('value');

    const isInitialDataLoaded = getFlag.val();

    if (isInitialDataLoaded) {
      const questions = [];
      var counter = 0;
      const questionsRef = db.ref(`users/${currentUser.uid}/questions`);
      const questionsSnapshot = await questionsRef.once('value');

      questionsSnapshot.forEach((childSnapshot) => {
        let dbQuestion = childSnapshot.val();
        counter += dbQuestion.length;
        questions.push(...dbQuestion);
      });

      if (questions.length === counter) {
        const groupedData = lodash.groupBy(questions, 'technology');
        // save data via hooks
        setData(groupedData);

        // save data to localStorage
        localStorage.setItem('questions', JSON.stringify(groupedData));

        // save number of questions to localStorage
        const techNumber = getNumberOfQuestions(groupedData);
        localStorage.setItem('numOfTech', JSON.stringify(techNumber));

        // save it via hook
        setNumOfTech(techNumber);

        // save data to firebase
        db.ref(`users/${currentUser.uid}/questions`).set(groupedData);
      }
    }
  };

  // ########################  END /  DATABASE DATA ########################################

  useEffect(() => {
    LoadInitialData();
  }, []);

  useEffect(() => {
    getDataFromDb();
  }, []);

  return (
    <>
      {' '}
      <PageContainer>
        {' '}
        {/* <PageContent> */} <Navbar />
        <Burger open={open} setOpen={setOpen} />{' '}
        {category && (
          <SemiCircleContainer>
            {' '}
            {/* <img src={semiCircle} /> */}{' '}
            <div>
              <h3> {category} </h3>{' '}
            </div>{' '}
          </SemiCircleContainer>
        )}
        <QuestionsContainer>
          {' '}
          {category ? (
            <>
              <h3 className="title">
                Top{' '}
                {numOfTech.map((tech) => {
                  if (tech[0] === category) return tech[1];
                })}{' '}
                {category} questions & answers{' '}
              </h3>{' '}
              <ContentContainer>
                <ContentList>
                  {' '}
                  {questions &&
                    questions[category].map((question, id) => {
                      let newId = uuid();
                      return (
                        <ContentItem key={question.id}>
                          <Checkbox
                            id={question.id}
                            boxId={newId}
                            technology={question.technology}
                            updateKnown={updateKnown}
                            key={newId}
                            known={question.known}
                          />
                          <label
                            className="question-title"
                            htmlFor={question.id}
                            onClick={toggleAnswer}
                            // key={question.id}
                          >
                            <span className="question-number">
                              {' '}
                              Q{id + 1}:{' '}
                            </span>{' '}
                            {question.text}
                          </label>{' '}
                          <input id={question.id} type="checkbox" />
                          <Answer key={question.id}>
                            {' '}
                            {typeof question.answer === 'string' ? (
                              <h5 className="answer-main">
                                {' '}
                                {question.answer}{' '}
                              </h5>
                            ) : (
                              Object.keys(question.answer).map((par, id) => {
                                if (id === 0) {
                                  return (
                                    <h5 className="answer-main">
                                      {' '}
                                      {question.answer[par]}{' '}
                                    </h5>
                                  );
                                } else {
                                  return (
                                    <p className="answer-sub">
                                      {' '}
                                      {question.answer[par]}{' '}
                                    </p>
                                  );
                                }
                              })
                            )}{' '}
                          </Answer>{' '}
                        </ContentItem>
                      );
                    })}{' '}
                </ContentList>{' '}
              </ContentContainer>{' '}
            </>
          ) : (
            <NoInfo> No Category Selected </NoInfo>
          )}{' '}
        </QuestionsContainer>
        <SideNavbar open={open}>
          <Datalist technologies={numOfTech} setCategory={setCategory} />
          <SortContainer>
            <SortList>
              <SortItem
                className={sortType === 'asc' ? 'active' : null}
                title="numeric ascending order"
                onClick={() => {
                  setSortType('asc');
                }}
              >
                <SortASC />
              </SortItem>
              <SortItem
                className={sortType === 'alpha' ? 'active' : null}
                title="alphabetic order"
                onClick={() => {
                  setSortType('alpha');
                }}
              >
                <SortByAlphaIcon />
              </SortItem>
              <SortItem
                className={sortType === 'desc' ? 'active' : null}
                title="numeric descending order"
                onClick={() => {
                  setSortType('desc');
                }}
              >
                <SortDESC />
              </SortItem>
            </SortList>
          </SortContainer>
          <SideNavbarList>
            <SimpleBar style={{ maxHeight: '300px' }}>
              {' '}
              {numOfTech &&
                sortTech(numOfTech).map((category) => (
                  <SideNavbarItem onClick={() => setCategory(`${category[0]}`)}>
                    {' '}
                    {category[0]}{' '}
                    <NumOfQuestions className="numOfQuestions">
                      {' '}
                      <span>{category[1]}</span>{' '}
                    </NumOfQuestions>{' '}
                  </SideNavbarItem>
                ))}{' '}
            </SimpleBar>
            <p className="scrollDown">scroll down</p>
          </SideNavbarList>{' '}
        </SideNavbar>{' '}
        {/* </PageContent> */}{' '}
      </PageContainer>{' '}
    </>
  );
};

export default Dashboard;
