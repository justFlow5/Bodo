import React from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../mediaQueries/media';

import Background from '../../images/frontPage/bg.svg';
import Left from '../../images/frontPage/left.svg';
import Right from '../../images/frontPage/right.svg';

const fadeIn = keyframes`
0% {
  transform: translateY(80px);
  opacity: 0;
  }
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

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  height: 100vh;
  position: relative;
  background: url(${Background}) no-repeat;
  background-size: cover;
  background-color: #fff;
  z-index: 1;

  & .left {
    width: 85px;
    position: absolute;
    top: 65%;
    left: 0;
    z-index: 999;
    background: no-repeat;
    @media ${device.mobileL} {
      width: 100px;
    }
    @media ${device.tablet} {
      width: 150px;
      top: 50%;
    }
  }
  & .right {
    position: absolute;
    top: 40%;
    right: 0;
    width: 160px;
    z-index: 1;
    background: no-repeat;
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
  display: flex;
  align-items: center;
  flex-direction: column;

  & .header-title {
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
    opacity: 0;
    animation-duration: 0.3s;
    position: relative;
    margin: 20% 5px 0;
    word-break: keep-all;
    font-size: 43px;
    color: #fff;
    font-weight: 600;
    min-width: 40%;

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

    @media ${device.laptop} {
      width: 45%;
      margin-top: 60px;
    }
  }
`;

const HeaderComponent = ({ headerTitle, subTitle, headerText }) => {
  return (
    <HeaderWrapper>
      <Header>
        <h3 className="header-title">
          {headerTitle}
          <span className="subTitle">{subTitle}</span>
        </h3>
        <p className="header-text">{headerText}</p>
      </Header>
      <img src={Left} alt="half-circle" className="left" />
      <img src={Right} alt="some-figure" className="right" />
    </HeaderWrapper>
  );
};
export default HeaderComponent;
