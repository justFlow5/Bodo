import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

// import Logo from '../../images/logo';
// import Logo2 from '../../images/logoApp4.png';
// import Logo2 from '../../images/appLogo999.png';
import Logo2 from '../../images/logoApp900.png';

import GoogleIcon from '../../images/googleIcon';

import AnonimousIcon from '../../images/anonimousIcon';

import InterviewPic from '../../images/interviewPic.jpg';
import InterviewPic2 from '../../images/happyInterview.jpg';
import InterviewPic3 from '../../images/studying.jpg';

const rotate = keyframes`
0% {
    transform: rotateY(360deg);
  }
  100% {
    transform: rotateY(0rem);
  }
`;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e6e6fa;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PicWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & .left-top-pic {
    /* margin-left: 35px; */
    width: 250px;
    height: 160px;
    align-self: flex-start;
  }

  & .left-bottom-pic {
    /* margin-left: 35px; */
    width: 350px;
    height: 220px;
    align-self: flex-end;
  }
`;

const PicWrapperRight = styled.div`
  display: flex;
  align-items: center;

  & .right-center-pic {
    width: 375px;
    height: 260px;
    margin-bottom: 40px;
  }
`;

const InterviewPic1 = styled.img`
  width: 300px;
  height: 200px;
  display: inline-block;
  /* position: fixed; */

  border-radius: 50%;
  /* opacity: 0.6; */

  -webkit-box-shadow: 0px 0px 29px 0px rgba(60, 153, 220, 1);
  -moz-box-shadow: 0px 0px 29px 0px rgba(60, 153, 220, 1);
  box-shadow: 0px 0px 29px 0px rgba(60, 153, 220, 1);
  opacity: 0.6;
  /* opacity: 1; */
  transition: all 0.3s;

  &:hover {
    transform: scale(1.07);
    opacity: 0.8;
  }
`;

const SignInUpWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LogoHolder = styled.div`
  text-align: center;
  /* margin: 0px auto 30px;
   */
  margin: 5px auto 25px;
  position: relative;
  left: -10px;
  position: fixed;
  /* top: -35px; */
  /* flex */
  /* margin: 0 auto; */
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
  & img {
    /* display: inline-block; */

    margin: 0 auto;
    /* width: 200px; */
    width: 170px;
    pointer-events: none;
    animation: ${rotate} 0.7s ease-out 0.5s;
    /* width: 210px; */
    /* margin-bottom: 40px; */
  }
`;

const SignIpUpWindow = styled.div`
  /* margin-top: 50px; */
  border: 1px solid #a8a8a8;
  border-radius: 6px;
  background: #add8e6;
  background: #fff;
  margin-top: 150px;
  position: relative;
  width: 30vw;
  height: 73vh;
  -webkit-box-shadow: 0px 0px 20px -6px rgba(0, 0, 128, 1);
  -moz-box-shadow: 0px 0px 20px -6px rgba(0, 0, 128, 1);
  box-shadow: 0px 0px 20px -6px rgba(0, 0, 128, 1);
`;

const TitleContainer = styled.h3`
  position: relative;
  width: 100%;
  margin: 20px auto 30px;
`;

const Title = styled.h3`
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.6px;
`;

const TextFieldContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto; */

  & > .wrapper {
    margin-top: 20px;
    position: relative;
    flex: 1 1 0;
    width: 70%;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  width: 70%;
  font-size: 17px;

  height: 40px;
  line-height: 40px;
`;

const PassButton = styled(Button)`
  margin: 30px auto 0;
  background: #cdd2d4;
  color: hsl(0, 0%, 55%);
  transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background: #396afc;
    background: -webkit-linear-gradient(to right, #2948ff, #396afc);
    background: linear-gradient(to right, #2948ff, #396afc);
    color: #fff;
  }

  &.active {
    background: #396afc;
    background: -webkit-linear-gradient(to right, #2948ff, #396afc);
    background: linear-gradient(to right, #2948ff, #396afc);
  }
`;

const Separator = styled.div`
  margin: 20px auto;
  text-align: center;
  font-weight: 500;
`;

const GoogleButton = styled(Button)`
  background: #e6e6fa;
  /* background: #bdffbd; */

  /* border: 1px solid #90ee90; */

  transition: all 0.3s;

  &:hover {
    /* background: #98fb98; */
    background: #bdd4bc;
    /* color: #e6e6fa; */
  }

  & svg {
    width: 23px;

    margin-right: 10px;
  }
`;

const AnonimousButton = styled(Button)`
  background: #707070;
  background: #b8b8b8;

  font-size: 17px;
  margin-top: 10px;
  /* border: 1px solid #505050; */
  transition: all 0.3s;

  &:hover {
    background: #a8a8a8;
    /* color: #e6e6fa; */

    /* & svg {
      fill: 
    } */
  }

  & svg {
    width: 23px;
    display: inline-block;
    margin-right: 10px;
  }
`;

const Footer = styled.div`
  width: 70%;
  margin: 10px auto 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    color: black;
    font-size: 14px;
    /* margin: 0 auto; */

    /* transition: all 0.3s; */
    &:hover {
      text-decoration: underline;
      color: #87bdd8;
    }
  }
`;

const SignInUpScheme = ({ title }) => {
  const validateEmail = (email) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  };

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#396afc',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#609CE1',
        },
        '&:hover fieldset': {
          borderColor: '#396afc',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#396afc',
        },
      },
    },
  })(TextField);

  return (
    <PageContainer>
      <PicWrapperLeft>
        {' '}
        <InterviewPic1 src={InterviewPic3} className="left-top-pic" />
        <InterviewPic1 src={InterviewPic} className="left-bottom-pic" />{' '}
      </PicWrapperLeft>

      <SignInUpWrapper>
        <LogoHolder>
          {/* <Logo2 /> */}
          <img src={Logo2} />
          {/* <span>Bodo</span> */}
        </LogoHolder>
        <SignIpUpWindow>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <TextFieldContainer>
            <div className="wrapper">
              <CssTextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="wrapper">
              <CssTextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
              />
            </div>
          </TextFieldContainer>
          <ButtonContainer>
            <PassButton>{title}</PassButton>
          </ButtonContainer>

          <Separator>OR</Separator>
          <ButtonContainer>
            <GoogleButton>
              {/* <span> */}
              <GoogleIcon />
              Login with Google
              {/* </span> */}
            </GoogleButton>
            <AnonimousButton>
              <AnonimousIcon />
              Login Anonimously
            </AnonimousButton>
          </ButtonContainer>
          <Footer>
            <>
              {title === 'Login' ? (
                <Link to="/sign-up">
                  <span>Can't login? &#183; Sign up for an account</span>
                </Link>
              ) : (
                <Link to="/login">
                  <span>Already have an account? &#183; Log In</span>
                </Link>
              )}
            </>
          </Footer>
        </SignIpUpWindow>
      </SignInUpWrapper>
      <PicWrapperRight>
        <InterviewPic1 src={InterviewPic2} className="right-center-pic" />
      </PicWrapperRight>
    </PageContainer>
  );
};

export default SignInUpScheme;
