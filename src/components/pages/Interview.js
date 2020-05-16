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

import Checkbox from '../forms/Interview_Checkbox';

import InterviewMode from '../Interview/InterviewMode';

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
  position: fixed;
  /* bottom: 22%; */
  /* left: 49%; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  color: #1c2222;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.8px;
  cursor: pointer;
  border-radius: 8px;

  transform: scale(0);

  bottom: 10%;
  right: 3%;
  width: 49px;
  transition: all 0.3s;

  @media ${device.mobileM} {
    bottom: 11%;
    right: 2%;
    width: 70px;
    font-size: 17px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
    bottom: 12%;
    right: 5%;
    width: 64px;
  }

  @media (min-width: 670px) {
    bottom: 17%;
    right: 4%;
    width: 105px;
  }

  @media ${device.tablet} {
    height: 60px;
    font-size: 22px;
    /* bottom: 26%; */
    bottom: 39%;

    right: 9%;
  }

  @media ${device.laptop} {
    width: 120px;
    height: 60px;
    font-size: 23px;
    /* bottom: 30%;
    right: 16%; */
    bottom: 22%;
    /* right: 17%; */
    right: 9%;
  }
  @media ${device.laptopL} {
    width: 150px;
    height: 80px;
    font-size: 27px;
    bottom: 33%;
    right: 11%;
  }

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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media ${device.tablet} {
    height: 100%;

    flex-direction: row;
  }
`;

const InputsSection = styled.section`
  width: 100%;
  position: relative;
  align-self: normal;
  margin-top: 15px;
  /* overflow-y: scroll; */
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.laptop} {
    width: 65%;
    margin-top: 60px;
  }
`;

const FieldsContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  @media ${device.mobileL} {
    margin-left: 15%;
    margin-right: 15%;
    width: 65%;
  }

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    margin: 0 0 0 25%;
    width: 60%;
  }
`;

const FieldsList = styled.form`
  margin-top: 35px;
  margin-bottom: 35px;
  position: relative;
  width: 100%;
  white-space: nowrap;

  @media ${device.mobileM} {
    width: 90%;
    text-align: left;
    margin-left: 4%;
  }
  @media ${device.tablet} {
    width: 90%;
  }
`;

const Title = styled.h3`
  line-height: 1.4;

  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-align: left;
  display: inline;
  border-bottom: 4px solid #0083b0;

  color: #091d34;

  @media ${device.mobileL} {
    /* margin-left: 15%; */
  }

  @media ${device.tablet} {
    font-size: 29px;
    margin-left: unset;
  }

  @media ${device.laptop} {
    font-size: 32px;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-left: 45px; */
  /* width: 80px; */
  /* height: 80px; */
  display: inline-block;
  position: relative;
  cursor: pointer;
  text-align: center;
  border: 1px solid transparent;
  /* border: 2px solid #091d34; */
  padding: 15px 10px 10px;
  border-radius: 12px;
  margin-right: 10px;
  background: transparent;
  box-shadow: unset;
  transition: all 0.3s;

  width: 85px;
  height: 85px;
  @media ${device.mobileM} {
    width: 95px;
    height: 95px;
  }

  @media ${device.mobileL} {
    width: 95px;
    height: 95px;
  }

  @media ${device.tablet} {
    width: 100px;
    height: 100px;
  }

  @media ${device.laptop} {
    width: 110px;
    height: 110px;
    margin-right: 40px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  & > .title {
    font-size: 10px;
    color: #091d34;
    font-weight: 600;
    text-align: center;
    margin-top: 5px;
    letter-spacing: 0.6px;
    text-transform: uppercase;

    @media ${device.mobileM} {
      font-size: 11px;
    }
    @media ${device.mobileL} {
      font-size: 12px;
    }
    @media ${device.tablet} {
      font-size: 13px;
      margin-top: 7px;
    }
  }

  & > img {
    width: 80px;
    height: 50px;
  }

  & svg {
    /* fill: #091d34; */
    fill: #131517;
    /* fill: #0000b3; */
    width: 45px;
    height: 45px;
    transition: all 0.3s;

    @media ${device.mobileM} {
      width: 50px;
      height: 50px;
    }

    @media ${device.laptop} {
      width: 55px;
      height: 55px;
    }
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

const TechsContainer = styled.div`
  position: relative;
  width: 100%;

  &.spaceBottom {
    padding-bottom: 200px;
  }

  @media ${device.tablet} {
  &.spaceBottom {
      padding-bottom: unset;
    }
    }

  /* animation: ${fadeIn} 0.2s ease-in-out; */
`;

const TechsList = styled.form`
  position: relative;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  justify-content: center;
  margin-top: 30px;

  @media ${device.mobileL} {
    justify-content: flex-start;
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.laptop} {
    width: 55px;
    height: 55px;
    width: 100%;
  }
`;
const TechItemContainer = styled.div`
  transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    transform: translateY(-5px);
  }
`;
const TechsItemWrapper = styled.div`
  width: 65px;
  height: 65px;

  position: relative;
  margin: 5px 10px;

  transform: scale(0);
  animation: ${fadeIn} 0.2s cubic-bezier(0.08, 1.17, 0.96, 0.94)
    ${(props) => (props.delay ? `${props.delay}s` : null)} forwards;

  @media ${device.mobileL} {
    width: 80px;
    height: 80px;
  }

  @media ${device.laptop} {
    margin: 10px 15px;
    width: 105px;
    height: 105px;
  }
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
  font-size: 10px;
  font-weight: 600;
  -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transition: all 0.6s;

  @media ${device.mobileL} {
    font-size: 13px;
  }

  @media ${device.laptop} {
    font-size: 15px;
  }
`;

const InterviewSection = styled.section`
  display: inline-block;
  width: 100%;

  @media ${device.tablet} {
    position: relative;
    margin-bottom: 50px;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: end;
  }

  & img {
    position: fixed;
    width: 50%;
    bottom: 6%;
    right: -8%;
    @media ${device.tablet} {
      position: fixed;
      bottom: unset;
      width: 50%;
      height: 50%;

      top: 20%;
      right: -5%;
    }
    @media ${device.laptop} {
      top: 23%;
      /* right: 7%; */
      right: 0%;

      width: 35%;
      height: 70%;
    }

    @media ${device.laptopL} {
      top: 20%;
      right: 0%;
      width: 40%;
    }
  }

  & svg {
    width: 80%;
  }
`;

const SpeechBubble = styled.div`
  display: none;

  @media ${device.tablet} {
    display: inline-block;

    top: 12%;
    right: 28%;

    background: #efefef;
    border: 1px solid #a7a7a7;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
    line-height: 1.3;
    width: 190px;
    min-height: 60px;
    font-weight: 500;
    padding: 15px;
    text-align: start;

    position: fixed;
  }

  @media ${device.laptop} {
    top: 17%;
    /* right: 29%; */
    right: 22%;
  }

  @media ${device.laptopL} {
    top: 17%;
    right: 26%;
  }
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
  const [isTechSelected, setIsTechSelected] = useState(false);

  const [enterInterviewMode, setEnterInterviewMode] = useState(false);

  // const [delay, setDelay] = useState(0);

  const [isCompleted, setIsCompleted] = useState(true);

  // const [questions, setQuestions] = useState(
  //   JSON.parse(localStorage.getItem('questions')) || []
  // );

  const [numOfTech, setNumOfTech] = useState(
    JSON.parse(localStorage.getItem('numOfTech')) || []
  );

  const info1 = 'Hi! My name is Jeff. Nice to meet you!';

  // const handleSelectedTech = (tech) => {
  //   const updatedTech =
  //   setSelectedTech(...selectedTech, e.target.value)
  // }
  // const isTechSelected = () => {
  //   let data = JSON.parse(localStorage.getItem('selectedTechs'));
  //   console.log('data.length > 0: ', data.length > 0);
  //   setSelectedTech(data.length > 0);
  // };

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
      // setStack('');
      // return [];
    }
  };

  const handleChange = (e) => {
    setStack(e.target.value);

    // setSelectedTech([]);
    // setStackChanged(true);
  };

  const handleTechSelection = (tech, typeOfOperation) => {
    console.log('handleTechSelection: ', tech, typeOfOperation);
    const currentData = JSON.parse(localStorage.getItem('selectedTechs')) || [];
    if (typeOfOperation === 'add') {
      let updatedData = [...currentData, tech];

      localStorage.setItem('selectedTechs', JSON.stringify(updatedData));
      // return updatedData;
    } else {
      let updatedData = currentData.filter((singleTech) => singleTech !== tech);
      localStorage.setItem('selectedTechs', JSON.stringify(updatedData));
      // return updatedData;
    }
  };

  const updateSelectedData = (checked, tech) => {
    console.log('e.target.value TECGH: ', tech);
    // let value = e.target.value;
    // let checked = e.target.checked;

    if (checked) {
      // const updatedTechs = [...selectedTech];
      // updatedTechs.push(tech);
      // setSelectedTech(updatedTechs);
      handleTechSelection(tech, 'add');
      // isTechSelected();
    } else {
      // delete tech nn uncheck
      // const updatedTechs = selectedTech.filter((tech) => tech !== tech);
      // setSelectedTech(updatedTechs);
      handleTechSelection(tech, 'delete');
      // isTechSelected();
    }
  };

  useEffect(() => {
    localStorage.setItem('selectedTechs', JSON.stringify([]));
  }, [stack]);

  return (
    <>
      {!enterInterviewMode && <Navbar />}
      <InterviewPage>
        <InputsSection>
          <FieldsContainer>
            <Title> Choose your stack: </Title>{' '}
            <FieldsList>
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
                <TechsContainer className={stack ? 'spaceBottom' : null}>
                  <TechsList>
                    {listStack(stack, numOfTech).map((singleTech, id) => {
                      let newId = uuid();
                      return (
                        <TechItemContainer key={newId}>
                          <Checkbox
                            id={newId}
                            singleTech={singleTech}
                            updateSelectedData={updateSelectedData}
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
                      );
                    })}
                  </TechsList>{' '}
                </TechsContainer>
              </>
            )}
          </FieldsContainer>{' '}
        </InputsSection>{' '}
        <InterviewSection>
          <img src={Jeff} />{' '}
          <PulseButton
            className={stack ? 'active' : null}
            onClick={() => setEnterInterviewMode(true)}
          >
            Start
          </PulseButton>
          <SpeechBubble>
            <SpeechBubbleText>
              <div>
                {' '}
                {stack ? (
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
                      <Typist.Backspace count={info1.length + 4} delay={1000} />
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
        {/* INTERVIEW MODE */}
        {/* {enterInterviewMode && ( */}
        <InterviewMode enterInterviewMode={enterInterviewMode} />
        {/* )} */}
      </InterviewPage>{' '}
    </>
  );
};

export default Interview;
