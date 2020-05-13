import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styled, { keyframes } from 'styled-components';
import Navbar from '../Navbar';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import Jeff from '../../images/jeff2.png';

import Frontend from '../../images/frontend.svg';
import Frontend2 from '../../images/frontendIcon.js';

// import Backend from '../../images/backend.svg';
import Backend from '../../images/backendIcon';

import Mean from '../../images/fullstackIcon';

import Typist from 'react-typist';

import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import { device } from '../utils/media';

const fadeIn = keyframes`
    from {
      transform: scale(0);
      opacity: 0;
      /* transform: translateY(30px); */
            /* transform: translateX(30px); */
    }
    to {
      transform: scale(1);
      opacity: 1;
      /* transform: translateY(0px); */
            /* transform: translateX(0px); */
    }
`;
const shadowPulse = keyframes`

     0% {
          box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.3);
     }
     100% {
          box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);
     }
`;

const PulseButton = styled.button`
  position: absolute;
  bottom: 22%;
  left: 49%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  color: #1c2222;
  font-size: 27px;
  font-weight: 600;
  letter-spacing: 0.8px;
  cursor: pointer;
  border-radius: 8px;
  width: 150px;
  height: 80px;

  transform: scale(0);

  transition: all 0.3s;

  &.active {
    transform: scale(1);
    animation: ${shadowPulse} 1.5s linear 0.3s infinite;
    transition: all 0.3s;

    &:hover {
      animation: none;
      color: #000000;
      background-color: rgba(255, 255, 255, 0.9);
      -webkit-box-shadow: 0px 0px 42px 0px rgba(255, 255, 255, 1);
      -moz-box-shadow: 0px 0px 42px 0px rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 42px 0px rgba(255, 255, 255, 1);
    }
  }
`;

const InterviewPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  & #button {
    cursor: pointer;
    position: fixed;
    top: 50px;
    right: 50px;
    z-index: 999;
  }
`;

const InputsSection = styled.section`
  width: 59%;
  position: relative;
  align-self: normal;
  margin-top: 60px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FieldsContainer = styled.div`
  width: 70%;
  margin-left: 25%;
  /* margin: 0 30px 0 50px; */

  /* background: #79b2f1; */
  /* border: 1px solid #609ce1; */
  border-radius: 12px;
  /* text-align: center; */

  /* padding: 20px 30px 20px 80px; */
`;

const FieldsList = styled.form`
  margin-top: 35px;
  margin-bottom: 35px;
  position: relative;
  width: 100%;
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-align: left;
  display: inline;
  border-bottom: 4px solid #0083b0;

  color: #091d34;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-left: 45px; */
  width: 110px;
  height: 110px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  text-align: center;
  border: 1px solid transparent;
  /* border: 2px solid #091d34; */
  padding: 15px 10px 10px;
  border-radius: 12px;
  margin-right: 40px;
  background: transparent;
  box-shadow: unset;
  transition: all 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  & > .title {
    font-size: 13px;
    color: #091d34;
    font-weight: 600;
    text-align: center;
    margin-top: 7px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }

  & > img {
    width: 80px;
    height: 50px;
  }

  & svg {
    /* fill: #091d34; */
    fill: #131517;
    /* fill: #0000b3; */
    width: 55px;
    height: 55px;
    transition: all 0.3s;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + label {
    border: 1px solid #6180a2;
    -webkit-box-shadow: 0px 0px 26px 0px rgba(19, 56, 99, 1);
    -moz-box-shadow: 0px 0px 26px 0px rgba(19, 56, 99, 1);
    box-shadow: 0px 0px 26px 0px rgba(19, 56, 99, 1);
    background: #609ce1;

    /* background: #00b4db;  */
    /* background: -webkit-linear-gradient(
      to right,
      #0083b0,
      #00b4db
    ); 
    background: linear-gradient(
      to right,
      #0083b0,
      #00b4db
    );  */

    /* background: #00b4db;

    background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
    background: linear-gradient(to right, #0083b0, #00b4db); */

    /* background-color: #abe9cd;
    background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%); */
    background-color: #6a93cb;
    background-image: linear-gradient(315deg, #6a93cb 0%, #a4bfef 74%);
  }
`;
// const StartButton = styled.button`
//   width: 200px;
//   height: 60px;

//   background: #609ce1;
//   background: #5bc3f5;
//   border-radius: 12px;
//   cursor: pointer;
//   font-size: 24px;
//   letter-spacing: 1px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   -webkit-box-shadow: unset;
//   -moz-box-shadow: unset;
//   box-shadow: unset;

//   transition: all 0.3s;

//   &:hover {
//     background: #7cace4;
//     border: 1px solid #7cace4;
//     -webkit-box-shadow: 0px 0px 13px 3px rgba(110, 242, 255, 1);
//     -moz-box-shadow: 0px 0px 13px 3px rgba(110, 242, 255, 1);
//     box-shadow: 0px 0px 13px 3px rgba(110, 242, 255, 1);
//   }
//   & .right-arrow {
//     /* position: absolute; */
//     display: inline-block;
//   }
// `;

// const TechButtonContainer = styled.ul`
//   display: flex;
//   justify-content: row;
// `;
// const TechButtonItem = styled.li`
//   width: 120px;
//   height: 40px;
//   border: 1px solid #b2b2b2;
//   background: transparent;
//   border-radius: 10px;
//   cursor: pointer;
//   position: relative;
//   font-size: 14px;
//   color: black;
// `;

const TechsContainer = styled.div`
  position: relative;
  width: 100%;
  /* animation: ${fadeIn} 0.2s ease-in-out; */
`;

const TechsList = styled.form`
  position: relative;

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  justify-content: flex-start;
  /* opacity: 0.01; */

  /* animation: ${fadeIn} 0.3s cubic-bezier(0.08, 1.17, 0.96, 0.94)
    ${(props) => (props.delay ? `${props.delay}s` : null)} forwards; */

    /* animation: ${fadeIn} 0.3s cubic-bezier(0.08, 1.17, 0.96, 0.94) forwards; */
  margin-top: 40px;
`;
const TechItemContainer = styled.div`
  transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    transform: translateY(-5px);
  }
`;
const TechsItemWrapper = styled.div`
  width: 105px;
  height: 105px;
  
  position: relative;
  margin: 10px 15px;
  /* opacity: 0; */


  /* animation: ${fadeIn} 0.3s ease-in-out; */

  transform: scale(0);
  animation: ${fadeIn} 0.2s cubic-bezier(0.08, 1.17, 0.96, 0.94) ${(props) =>
  props.delay ? `${props.delay}s` : null} forwards;



  /* transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  &:hover {
    transform: translateY(-5px);
  } */


    
`;

const TechsItem = styled.label`
  position: relative;
  padding: 5px;
  width: 100%;
  height: 100%;

  /* background: #84b4b9;
  background: #c1d9db;
  background: #94bdc1; */
  background: #aacbce;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);


  /* animation: ${fadeIn} 0.2s cubic-bezier(0.08, 1.17, 0.96, 0.94)
    ${(props) => (props.delay ? `${props.delay}s` : null)} forwards; */

  transition: all 0.6s;

  

`;

const Checkbox = styled.input`
  display: none;

  &:checked + .checkbox-label-wrapper {
    filter: drop-shadow(0px 0px 7px rgba(9, 29, 52, 1));
    transform: translateY(-5px);

    & label {
      /* background: #00b4db;

      background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
      background: linear-gradient(to right, #0083b0, #00b4db); */

      background-color: #6a93cb;
      background-image: linear-gradient(315deg, #6a93cb 0%, #a4bfef 74%);
      transform: rotateY(360deg);
    }
  }
`;

const InterviewSection = styled.div`
  position: relative;
  width: 40%;

  text-align: end;

  & svg {
    width: 80%;
  }
`;

const SpeechBubble = styled.div`
  background: #efefef;
  border: 1px solid #a7a7a7;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);

  line-height: 1.3;
  margin: 0 auto 40px;

  width: 190px;
  min-height: 60px;
  font-weight: 500;
  padding: 15px;
  position: absolute;

  top: 0;
  left: 0;
  text-align: start;

  /* @media ${device.laptop} {
    left: 5%;
  } */
`;
const SpeechBubbleText = styled.p`
  font-size: 17px;

  & br.hide {
    display: none;
  }

  & .interviewer-text {
    /* font-size: 18px; */
  }
`;
const SpeechBubbleArrow = styled.div`
  border-left: 21px solid transparent;
  border-top: 20px solid rgba(0, 0, 0, 0.2);
  bottom: -25px;
  position: absolute;
  right: 15px;

  &::before {
    border-left: 23px solid transparent;
    border-top: 23px solid #a7a7a7;
    bottom: 2px;
    content: '';
    position: absolute;
    right: 5px;
  }

  &::after {
    border-left: 21px solid transparent;
    border-top: 21px solid #efefef;
    bottom: 4px;
    content: '';
    position: absolute;
    right: 6px;
  }
`;

const Interview = () => {
  const [info, setInfo] = useState('');
  const [stack, setStack] = useState('');
  const [selectedTech, setSelectedTech] = useState([]);

  // const [delay, setDelay] = useState(0);

  const [hide, setHide] = useState('');
  const [isCompleted, setIsCompleted] = useState(true);

  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem('questions')) || []
  );

  const [numOfTech, setNumOfTech] = useState(
    JSON.parse(localStorage.getItem('numOfTech')) || []
  );

  const info1 = 'Hi! My name is Jeff. Nice to meet you!';

  // const handleSelectedTech = (tech) => {
  //   const updatedTech =
  //   setSelectedTech(...selectedTech, e.target.value)
  // }

  const listStack = (stack, techs) => {
    if (stack === 'frontend') {
      return techs
        .filter((tech) => tech[2] === 'Frontend Developer' && tech[1] > 5)
        .map((stackTech) => stackTech[0]);
    } else if (stack === 'backend') {
      return techs
        .filter((tech) => tech[2] === 'Backend Developer' && tech[1] > 5)
        .map((stackTech) => stackTech[0]);
    } else if (stack === 'fullstack') {
      return techs.map((tech) => {
        if (tech[1] > 5) return tech[0];
      });
    } else {
      setStack('');
      // return [];
    }
  };

  const handleChange = (e) => {
    setStack(e.target.value);
  };

  const updateSelectedData = (e) => {
    if (e.target.checked) {
      const updatedTechs = [...selectedTech];
      updatedTechs.push(e.target.value);
      setSelectedTech(updatedTechs);
    } else {
      // delete tech nn uncheck
      const updatedTechs = selectedTech.filter(
        (tech) => tech !== e.target.value
      );
      setSelectedTech(updatedTechs);
    }
  };

  // useEffect(() => {
  //   setStack('');
  //   setStack('');

  // }, [stack]);

  return (
    <>
      <Navbar />
      <InterviewPage>
        <InputsSection>
          <FieldsContainer>
            <Title> Choose your stack: </Title>{' '}
            <FieldsList>
              {' '}
              {/* <form> */} {/* <MuiThemeProvider theme={theme}> */}{' '}
              {/* <Button labelStyle={{ fontSize: '14px' }}> */}{' '}
              <Input
                type="radio"
                value="frontend"
                id="frontend235325324322423"
                onChange={handleChange}
                checked={stack === 'frontend'}
              />{' '}
              <Label htmlFor="frontend235325324322423">
                <Frontend2 /> <h3 className="title"> Frontend </h3>{' '}
              </Label>
              <Input
                type="radio"
                value="backend"
                id="backend432354325234"
                checked={stack === 'backend'}
                onChange={handleChange}
              />{' '}
              <Label htmlFor="backend432354325234">
                <Backend /> <h3 className="title"> Backend </h3>{' '}
              </Label>
              <Input
                type="radio"
                value="fullstack"
                id="fullstack433443"
                checked={stack === 'fullstack'}
                onChange={handleChange}
              />{' '}
              <Label htmlFor="fullstack433443">
                <Mean /> <h3 className="title"> Fullstack </h3>{' '}
              </Label>{' '}
              {/* </form> */}{' '}
            </FieldsList>
            {/* ##################################################################### */}{' '}
            {/* ############################### TECH SECTIONS        ################*/}{' '}
            {/* ##################################################################### */}
            {stack && (
              <>
                <Title> Choose Technology: </Title>{' '}
                <TechsContainer>
                  <TechsList>
                    {/* <TransitionGroup className="listedTechs"> */}
                    {stack
                      ? listStack(stack, numOfTech).map((singleTech, id) => {
                          let newId = uuid();
                          return (
                            <>
                              {' '}
                              {/* <CSSTransition
                          key={newId}
                          timeout={500}
                          classNames="singleTech"
                        > */}
                              <TechItemContainer>
                                <Checkbox
                                  id={newId}
                                  type="checkbox"
                                  onChange={updateSelectedData}
                                  value={singleTech}
                                />
                                <TechsItemWrapper
                                  className="checkbox-label-wrapper"
                                  delay={id / 4}
                                >
                                  <TechsItem htmlFor={newId} className="enter">
                                    {' '}
                                    {singleTech}{' '}
                                  </TechsItem>{' '}
                                </TechsItemWrapper>{' '}
                              </TechItemContainer>
                              {/* </CSSTransition> */}
                            </>
                          );
                        })
                      : null}
                    {/* </TransitionGroup> */}
                  </TechsList>{' '}
                </TechsContainer>
              </>
            )}
          </FieldsContainer>{' '}
        </InputsSection>{' '}
        <InterviewSection>
          <img src={Jeff} />{' '}
          <PulseButton
            className={stack && selectedTech.length > 0 ? 'active' : null}
          >
            Start
          </PulseButton>
          <SpeechBubble>
            <SpeechBubbleText>
              <div>
                {' '}
                {stack && selectedTech.length > 0 ? (
                  <Typist
                    avgTypingDelay={40}
                    startDelay={100}
                    cursor={{
                      show: false,
                    }}
                  >
                    <p className="interviewer-text"> Alright then! </p>{' '}
                    <Typist.Delay ms={350} />{' '}
                    <p className="interviewer-text"> Are you ready ? </p>{' '}
                  </Typist>
                ) : (
                  <div>
                    <Typist
                      avgTypingDelay={40}
                      startDelay={100}
                      cursor={{
                        show: false,
                      }}
                    >
                      <p className="interviewer-text"> Hi!My name is Jeff. </p>{' '}
                      <Typist.Delay ms={1250} />{' '}
                      <p className="interviewer-text"> Nice to meet you! </p>{' '}
                      <Typist.Backspace count={info1.length} delay={1000} />
                      <p className="interviewer-text">
                        Before we start our interview, please fill the required
                        fields.{' '}
                      </p>{' '}
                    </Typist>{' '}
                  </div>
                )}{' '}
              </div>{' '}
            </SpeechBubbleText>{' '}
            <SpeechBubbleArrow />
          </SpeechBubble>{' '}
        </InterviewSection>
        <button
          id="button"
          onClick={() => {
            setIsCompleted(false);
          }}
        >
          toggle{' '}
        </button>{' '}
      </InterviewPage>{' '}
    </>
  );
};

export default Interview;
