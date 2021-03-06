import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

import styled, { keyframes } from 'styled-components';
import Navbar from '../navbars/Navbar';

import Jeff from '../../images/interview/jeff2.png';
import Frontend2 from '../../images/interview/frontendIcon.js';
import Backend from '../../images/interview/backendIcon';
import Mean from '../../images/interview/fullstackIcon';
import InformationIcon from '../../images/interview/Information';

import Typist from 'react-typist';

import Checkbox from '../forms/Interview_Checkbox';

import InterviewMode from '../Interview/InterviewMode';

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
    bottom: 39%;
    right: 9%;
  }

  @media ${device.laptop} {
    width: 120px;
    height: 60px;
    font-size: 23px;
    bottom: 22%;
    right: 9%;
  }
  @media ${device.laptopL} {
    width: 150px;
    height: 80px;
    font-size: 27px;
    bottom: 25%;
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
  margin-top: 15px;

  @media ${device.tablet} {
    height: 100%;
    margin-top: 50px;
    overflow: hidden;
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
    margin-left: 7%;
    margin-right: 15%;
    width: 65%;
  }

  @media ${device.tablet} {
    width: 60%;
    margin-left: 15%;
  }

  @media ${device.laptop} {
    margin: 0 0 0 25%;
    width: 65%;
  }

  @media ${device.laptopL} {
    margin: 0 0 0 25%;
    width: 55%;
  }
`;

const FieldsList = styled.form`
  margin-top: 30px;
  margin-bottom: 35px;
  position: relative;
  width: 100%;

  white-space: nowrap;

  @media ${device.mobileM} {
    width: 90%;
    text-align: left;
    margin-left: 5%;
  }
  @media ${device.tablet} {
    width: 90%;
  }
`;

const Title = styled.h3`
  line-height: 1.4;
  position: relative;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-align: left;
  display: inline;
  border-bottom: 4px solid #0083b0;
  white-space: nowrap;
  color: #091d34;

  @media ${device.tablet} {
    font-size: 29px;
    margin-left: unset;
  }

  @media ${device.laptop} {
    font-size: 32px;
  }

  &.selectTechTitle > .iconContainer {
    display: inline-block;
    position: absolute;
    cursor: pointer;
    width: 20px;
    height: 20px;
    top: -15px;
    right: 0px;

    &:hover .tooltip {
      animation: ${fadeIn} 0.2s cubic-bezier(0.08, 1.17, 0.96, 0.94) forwards;
    }

    & svg {
      position: relative;
      width: 100%;
      height: 100%;
      fill: #091d34;
      top: -15px;
      right: -25px;
    }
  }
`;

const CustomTooltip = styled.div`
  &.tooltip {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    transform: scale(0);
    opacity: 0;
    font-size: 11px;
    border-radius: 6px;
    width: 185px;
    overflow: hidden;
    font-weight: 300;
    z-index: 999;
    white-space: break-spaces;
    position: fixed;
    left: 20px;
    bottom: 70px;

    @media ${device.tablet} {
      position: absolute;
      left: unset;
      right: -220px;
      bottom: -65px;
    }
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: inline-block;
  position: relative;
  cursor: pointer;
  text-align: center;
  border: 1px solid transparent;
  padding: 15px 10px 10px;
  border-radius: 12px;
  margin-right: 10px;
  background: transparent;
  box-shadow: unset;
  transition: all 0.3s;

  width: 90px;
  height: 90px;
  @media ${device.mobileM} {
    width: 100px;
    height: 100px;
  }

  @media ${device.mobileL} {
    width: 105px;
    height: 105px;
  }

  @media ${device.tablet} {
    width: 110px;
    height: 110px;
  }

  @media ${device.laptop} {
    width: 110px;
    height: 110px;
    margin-right: 40px;
  }

  @media ${device.laptopL} {
    width: 115px;
    height: 115px;
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

    @media ${device.laptopL} {
      font-size: 13px;
      margin-top: 10px;
    }
  }

  & > img {
    width: 80px;
    height: 50px;
  }

  & svg {
    fill: #131517;
    width: 50px;
    height: 50px;
    transition: all 0.3s;

    @media ${device.mobileM} {
      width: 55px;
      height: 55px;
    }

    @media ${device.laptop} {
      width: 60px;
      height: 60px;
    }

    @media ${device.laptopL} {
      width: 65px;
      height: 65px;
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
    width: 100%;
  }
  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.laptop} {
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
    bottom: 4%;
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
  const [stack, setStack] = useState('');
  const [enterInterviewMode, setEnterInterviewMode] = useState(false);
  const [typeOfQuestionDraw, setTypeOfQuestionDraw] = useState('');
  const [numOfTech, setNumOfTech] = useState(
    JSON.parse(localStorage.getItem('numOfTech')) || []
  );

  const info1 = `Hi! My name is Jeff. Nice to meet you!`;

  const listStack = (stack, techs) => {
    if (stack === 'frontend') {
      return techs
        .filter((tech) => tech[2] === 'Frontend Developer' && tech[1] >= 5)
        .map((stackTech) => stackTech[0]);
    } else if (stack === 'backend') {
      return techs
        .filter((tech) => tech[2] === 'Backend Developer' && tech[1] >= 5)
        .map((stackTech) => stackTech[0]);
    } else if (stack === 'fullstack') {
      return techs
        .filter((tech) => tech[2] !== 'other' && tech[1] >= 5)
        .map((stackTech) => stackTech[0]);
    }
  };

  const handleChange = (e) => {
    setStack(e.target.value);
  };

  const handleTechSelection = (tech, typeOfOperation) => {
    console.log('handleTechSelection: ', tech, typeOfOperation);
    const currentData = JSON.parse(localStorage.getItem('selectedTechs')) || [];
    if (typeOfOperation === 'add') {
      let updatedData = [...currentData, tech];

      localStorage.setItem('selectedTechs', JSON.stringify(updatedData));
    } else {
      let updatedData = currentData.filter((singleTech) => singleTech !== tech);
      localStorage.setItem('selectedTechs', JSON.stringify(updatedData));
    }
  };

  const updateSelectedData = (checked, tech) => {
    if (checked) {
      handleTechSelection(tech, 'add');
    } else {
      handleTechSelection(tech, 'delete');
    }
  };

  const getQuestionDistribution = (questions) => {
    if (questions.length === 1) setTypeOfQuestionDraw('single-category');
    else if (questions.length >= 5) setTypeOfQuestionDraw('many-categories');
    else setTypeOfQuestionDraw('between-categories');
  };

  const handleEnterInterviewMode = () => {
    setEnterInterviewMode(true);
    let selectedCat = JSON.parse(localStorage.getItem('selectedTechs'));
    getQuestionDistribution(selectedCat);
  };

  useEffect(() => {
    localStorage.setItem('selectedTechs', JSON.stringify([]));
  }, [stack]);

  return (
    <>
      {' '}
      {!enterInterviewMode && <Navbar />}{' '}
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
              </Label>{' '}
              <Input
                type="radio"
                value="backend"
                id="backend432354325234"
                checked={stack === 'backend'}
                onChange={handleChange}
              />{' '}
              <Label htmlFor="backend432354325234">
                <Backend /> <h3 className="title"> Backend </h3>{' '}
              </Label>{' '}
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
            </FieldsList>{' '}
            {/* ##################################################################### */}{' '}
            {/* ############################### TECH SECTIONS        ################*/}{' '}
            {/* ##################################################################### */}{' '}
            {stack && (
              <>
                <Title className="selectTechTitle">
                  {' '}
                  Choose Technology:
                  <div className="iconContainer">
                    <CustomTooltip className="tooltip">
                      Listed here are techs that have at least 5 questions
                      stored in our database{' '}
                    </CustomTooltip>{' '}
                    <InformationIcon />
                  </div>{' '}
                </Title>{' '}
                <TechsContainer className={stack ? 'spaceBottom' : null}>
                  <TechsList>
                    {' '}
                    {listStack(stack, numOfTech).map((singleTech, id) => {
                      let newId = uuid();
                      return (
                        <TechItemContainer key={newId}>
                          <Checkbox
                            id={newId}
                            singleTech={singleTech}
                            updateSelectedData={updateSelectedData}
                          />{' '}
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
                    })}{' '}
                  </TechsList>{' '}
                </TechsContainer>{' '}
              </>
            )}{' '}
          </FieldsContainer>{' '}
        </InputsSection>{' '}
        <InterviewSection>
          <img src={Jeff} alt="interviewer man" />{' '}
          <PulseButton
            className={stack ? 'active' : null}
            onClick={handleEnterInterviewMode}
          >
            Start{' '}
          </PulseButton>{' '}
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
                      <Typist.Backspace count={info1.length + 4} delay={1000} />{' '}
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
        </InterviewSection>{' '}
        {/* INTERVIEW MODE */} {/* {enterInterviewMode && ( */}{' '}
        <InterviewMode
          enterInterviewMode={enterInterviewMode}
          typeOfQuestionDraw={typeOfQuestionDraw}
        />{' '}
        {/* )} */}{' '}
      </InterviewPage>{' '}
    </>
  );
};

export default Interview;
