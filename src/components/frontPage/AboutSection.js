import React from 'react';
import styled from 'styled-components';
import { device } from '../mediaQueries/media';

import TechQuestionGeneralSection from './aboutSection/TechQuestionGeneralSection';
import TechQuestionCustomSection from './aboutSection/TechQuestionCustomSection';
import HrQuestionSection from './aboutSection/HrQuestionSection';
import InterviewModeSection from './aboutSection/InterviewModeSection';
import AccountSection from './aboutSection/AccountSection';

const About = styled.section`
  color: black;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  & section {
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
      text-align: center;
      margin-top: 20px;

      @media ${device.tablet} {
        position: relative;
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
`;

const AboutSectionComponent = ({ navbarRef }) => {
  const techGeneral = `Bodo's database contains of more than 300 records the most
popular, technical interview questions and answers. If you want
to stand out above others and successfully land a job then
learning them is a MUST.`;

  const techCustom = `Whatever the job you're dreaming of or whatever the stack you're
using we got you covered! You can always create your own
questions and answers and save them, so whenever you log in,
you'll have a full access to it.`;

  const hrQuestions = `They are useless. They really are. You know it. We know it.
Everyone know it. Nevertheless they're not going to dissapear
and you'd better be prepared answer them! Bodo will present you
with lots of hints on how to handle those troublesome questions.`;

  const interviewMode = `The best way to prepare for an interview is to participate in as
many interviews as possible. Learn by experience. With Bodo
Interview Mode simulation it's possible! Select the desired job
and relevant technologies and give it a try!`;

  const account = `Bodo is 100% free. Just create your account and gain full access
to the functionality of the app. Wanna give it a shot before
creating an account? Just log in anonimously and check it out!`;

  return (
    <About>
      <TechQuestionGeneralSection
        title="HR Interview Questions"
        content={techGeneral}
        navbarRef={navbarRef}
      />
      <TechQuestionCustomSection
        title="Create your own questions & answers"
        content={techCustom}
      />
      <HrQuestionSection title="HR Interview Questions" content={hrQuestions} />
      <InterviewModeSection title="Interview Mode" content={interviewMode} />
      <AccountSection title="Free Access" content={account} />
    </About>
  );
};
export default AboutSectionComponent;
