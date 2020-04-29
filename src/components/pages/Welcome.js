import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { device } from '../utils/media';
import MainNavbar from '../../components/header/Main-Navbar';

import styled, { keyframes } from 'styled-components';

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';
import {
  firebase,
  googleAuthProvider,
  loginAnonimously,
} from '../../firebase/base';

import Background from '../../images/bg.svg';
import Left from '../../images/left.svg';
import Right from '../../images/right.svg';

import Free from '../../images/frontPage/free.png';
import Database from '../../images/frontPage/database.png';
import Idea from '../../images/frontPage/ideaTriangle.png';
import HRquestion from '../../images/frontPage/hrQuestion.png';
import Goal from '../../images/frontPage/goal.png';

const fadeIn = keyframes`
0% {
  transform: translateY(80px);
  opacity: 0;


  }

  /* 50% {
    transform: translateY(50px);
  opacity: 0;
  } */
  100% {
    transform: translateY(0px);
   

    opacity: 1;
  }
`;

const fadeInFromLeft = keyframes`
0% {
  transform: translateX(-80px);
  opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const LoginPageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  overflow-x: hidden;

  & .test {
    width: 200px;
    height: 100px;
    font-size: 21px;
    color: black;
    position: fixed;
    top: 100px;
    right: 100px;
    z-index: 999;
    background: pink;
  }
`;

const HeaderWrapper = styled.div`
/* width: 100%; */
width: 100%;
height: 100%;
height: 100vh;
position: relative;
 background: url(${Background}) no-repeat;
  background-size: cover;
  /* padding-bottom: 100px; */
  background-color: #fff;
  z-index: 1;
 
  & .left {
    width: 100px;
    position: absolute;
    /* top: 60%; */
    top:65%;

    left: 0;
    z-index: 999;
    background: no-repeat;

    @media ${device.tablet} {
     
    
      width:150px;
      top: 50%;

}

  
  }

  & .right {
    position: absolute;
    top: 50%;
    right: 0;
  
    width: 160px;
    /* height: 120px; */
    z-index: 1;
    /* background: url(${Right}) no-repeat; */

    background: no-repeat;

    @media ${device.mobileL} {
  
      top: 40%;

}
    @media ${device.tablet} {
      width: 230px;
      top: 30%;

}

@media ${device.laptop} {
      width: 350px;
      top: 23%;

}

  }


`;
const Header = styled.section`
  position: relative;
  /* margin-top: 100px; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  & .header-title {
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
    /* animation-timing-function: linear; */
    opacity: 0;

    animation-duration: 0.3s;

    position: relative;
    margin: 20% 5px 0;

    word-break: keep-all;

    /* display: block; */
    font-size: 43px;
    color: #fff;
    font-weight: 600;
    min-width: 40%;
    /* width: 40%; */
    /* margin-top: 20%; */

    text-align: center;

    @media ${device.tablet} {
      font-size: 52px;
      margin-top: 20%;
      margin-left: unset;
      margin-right: unset;
      margin-bottom: unset;
    }

    & > .subTitle {
      width: 50%;
      font-size: 17px;
      font-weight: 400;
      position: absolute;
      right: 0;
      bottom: -30%;
      font-style: italic;
      z-index: 999;

      opacity: 0;
      animation-delay: 0.3s;
      animation-name: ${fadeInFromLeft};
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
      /* animation-timing-function: linear; */

      animation-duration: 0.3s;
      @media ${device.mobileM} {
        font-size: 20px;
        bottom: -55%;
      }

      @media ${device.mobileL} {
        font-size: 20px;
        bottom: -70%;
      }

      @media ${device.laptop} {
        font-size: 24px;
        bottom: -70%;
      }
    }
  }

  & .header-text {
    opacity: 0;
    font-weight: 400;
    text-align: center;
    margin-top: 0px;
    font-size: 22px;
    color: #fff;
    width: 85%;
    line-height: 1.4;

    animation-delay: 0.6s;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);

    margin-top: 80px;
    animation-duration: 0.3s;

    @media ${device.tablet} {
    }

    @media ${device.laptop} {
      width: 45%;
      margin-top: 60px;
    }
  }
`;

const About = styled.section`
  color: black;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  /* margin: 0 5vw; */

  & section {
    /* height: 100vh; */
    margin: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &.reverse {
      flex-direction: column-reverse;

      @media ${device.tablet} {
        flex-direction: row;
      }
    }

    @media ${device.tablet} {
      flex-direction: row;
      margin: 80px 20px;
    }

    @media ${device.laptop} {
      margin: 80px;
    }

    & > img {
      width: 80%;
      margin-top: 20px;
      @media ${device.tablet} {
        margin-top: unset;

        width: 45%;
      }

      &.hr {
        width: 85%;
        border-radius: 12px;

        @media ${device.tablet} {
          width: 65%;
        }
      }

      &.idea {
        width: 65%;
        @media ${device.tablet} {
          width: 60%;
        }

        @media ${device.tablet} {
          width: 45%;
        }
      }
    }

    &.hrSection {
      flex-direction: column;
    }

    &:last-child {
      padding-bottom: 60px;
    }
  }

  & .container {
    display: flex;
    flex-direction: column;
    /* position: relative; */
    color: #133863;
    width: 80%;
    @media ${device.tablet} {
      width: 37%;
    }

    @media ${device.laptop} {
      width: 30%;
    }

    &.hr {
      text-align: left;
      width: 80%;
      margin-bottom: 30px;

      @media ${device.tablet} {
        text-align: center;
        width: 65%;
      }
    }

    &.idea-text {
      @media ${device.tablet} {
        position: relative;
        bottom: -130px;
        left: -80px;
      }
    }

    & .button-container {
      position: absolute;
      bottom: 5px;
      right: 20px;

      /* width: 100%; */
      text-align: center;
      margin-top: 20px;

      @media ${device.tablet} {
        position: relative;
        /* text-align: right; */
      }
    }
  }

  & .title {
    font-size: 26px;
    font-weight: 600;

    @media ${device.tablet} {
      font-size: 28px;
    }
  }

  & .content {
    margin-top: 20px;
    line-height: 1.5;
    font-size: 17px;

    @media ${device.mobileL} {
      font-size: 18px;
    }
    @media ${device.tablet} {
      font-size: 19px;
    }

    @media ${device.laptop} {
      font-size: 20px;
    }
  }

  /* position: relative; */
  /* z-index: 2; */
`;

const TechQuestionsGeneral = styled.section`
  justify-content: space-between;

  & > .container {
    /* justify-self: left; */
    @media ${device.tablet} {
      margin-right: 30px;
    }

    @media ${device.laptop} {
      margin-right: 150px;
    }
  }
`;

const TechQuestionsCustom = styled.section``;

const Account = styled.section``;

const HrQuestions = styled.section`
  flex-direction: column;
  align-items: center;

  /* & .container {
    width: 70%;
  } */

  /* & .hr {
    width: 70%;
  } */
`;

const InterviewMode = styled.section``;

// const Header = styled.section`
//   width: 100%;
//   background: #396afc;
//   background: -webkit-linear-gradient(to right, #2948ff, #396afc);
//   background: linear-gradient(to right, #2948ff, #396afc);
// `;

const Login = styled.button`
  width: 280px;
  height: 50px;
  padding: 10px 20px;
  color: #fff;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 0.8px;
  /* background: #396afc; */
  background: #269ade;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s;

  @media ${device.tablet} {
    width: 210px;
  }

  &:hover {
    background: #1e8bca;
  }
`;

const Welcome = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  const stickyRef = useRef(null);

  // const handler = useCallback(debounce(handleScroll, 20), []);

  const handleScroll = () => {
    // console.log(stickyRef.current);
    if (stickyRef.current) {
      // console.log('window.pageYOffset:', window.pageYOffset);
      // console.log(
      //   'stickyRef.current.getBoundingClientRect().bottom:',
      //   stickyRef.current.getBoundingClientRect().bottom
      // );

      window.pageYOffset > stickyRef.current.getBoundingClientRect().top
        ? setSticky(true)
        : setSticky(false);
    }
  };

  // const handleScroll = () => {
  //   console.log('looser');
  //   window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
  //     ? setSticky(true)
  //     : setSticky(false);
  // };

  function debounce(func, wait = 20, immediate = true) {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  window.addEventListener('scroll', debounce(handleScroll));

  return (
    <>
      {/* {console.log('height:', height)} */}
      <MainNavbar sticky={isSticky} />
      <LoginPageContainer>
        {/* <div className="test">{JSON.stringify(window.pageYOffset)}</div> */}
        <HeaderWrapper>
          <Header>
            <h3 className="header-title">
              Applying for your dream job?{' '}
              <span className="subTitle">Better not screw this up!</span>
            </h3>
            <p className="header-text">
              Make the best first impression on your job interview with the help
              of Bodo{' '}
            </p>
          </Header>

          <img src={Left} alt="half-circle" className="left" />
          <img src={Right} alt="some-figure" className="right" />
        </HeaderWrapper>

        <About>
          <TechQuestionsGeneral>
            <div className="container techQuestionsDatabase-text-container">
              <h3 className="title techQuestionsDatabase-text-title">
                Technical Interview Questions
              </h3>
              <p
                className="content techQuestionsDatabase-text-content"
                ref={stickyRef}
              >
                Bodo's database contains of more than 300 records the most
                popular, technical interview questions and answers. If you want
                to stand out above others and successfully land a job then
                learning them is a MUST.
              </p>
            </div>
            <img src={Database} alt="database" />
          </TechQuestionsGeneral>

          <TechQuestionsCustom className="reverse">
            <img src={Idea} className="idea" />
            <div className="container idea-text">
              <h3 className="title">Create your own questions & answers</h3>
              <p className="content">
                Whatever the job you're dreaming of or whatever the stack you're
                using we got you covered! You can always create your own
                questions and answers and save them, so whenever you log in,
                you'll have a full access to it.
              </p>
            </div>
          </TechQuestionsCustom>

          <HrQuestions className="hrSection">
            <div className="container hr">
              <h3 className="title hrQuestions-text-title">
                HR Interview Questions
              </h3>
              <p className="content hrQuestions-text-content">
                They are useless. They really are. You know it. We know it.
                Everyone know it. Nevertheless they're not going to dissapear
                and you'd better be prepared answer them! Bodo will present you
                with lots of hints on how to handle those troublesome questions.
              </p>
            </div>
            <img src={HRquestion} className="hr" />
          </HrQuestions>

          <InterviewMode className="reverse">
            <img src={Goal} alt="goal" />
            <div className="container interviewMode-text-container">
              <h3 className="title interviewMode-text-title">Interview Mode</h3>
              <p className="content interviewMode-text-content">
                The best way to prepare for an interview is to participate in as
                many interviews as possible. Learn by experience. With Bodo
                Interview Mode simulation it's possible! Select the desired job
                and relevant technologies and give it a try!
              </p>
            </div>
          </InterviewMode>
          <Account>
            <div className="container">
              <h3 className="title">Free Access</h3>
              <p className="content">
                Bodo is 100% free. Just create your account and gain full access
                to the functionality of the app. Wanna give it a shot before
                creating an account? Just log in anonimously and check it out!
              </p>
              <div className="button-container">
                <Link to="/sign-up">
                  <Login>Create account</Login>
                </Link>
              </div>
            </div>
            <img src={Free} alt="Free" />
          </Account>
        </About>
      </LoginPageContainer>
    </>
  );
};

export default withRouter(Welcome);
