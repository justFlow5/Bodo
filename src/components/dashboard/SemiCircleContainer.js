import React from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../mediaQueries/media';

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

const SemiCircleContainer = styled.div`
  position: relative;
  z-index: 5;
  display: inline-block;
  animation-name: ${fadeBottom};
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
  opacity: 0;
  animation-duration: 0.4s;
  @media ${device.laptop} {
    animation-name: ${fadeIn};
  }
`;

const SemiCircleContent = styled.div`
  position: relative;
  position: fixed;
  z-index: 999;

  bottom: -30px;
  bottom: ${({ open }) => (open ? -15 : -30)}px;

  left: 0;
  right: 0;
  margin: auto;
  width: 215px;
  width: ${({ open }) => (open ? '270px' : '215px')};
  height: 120px;
  border-radius: 50%;
  background: #091d34;
  border: 1px solid #236ab9;
  -moz-box-shadow: 0px -5px 9px -5px rgba(19, 56, 99, 1);
  box-shadow: 0px -5px 9px rgba(19, 56, 99, 1);
  text-align: center;
  font-size: 27px;
  letter-spacing: 0.8px;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s;

  @media ${device.tablet} {
    width: 300px;
    height: 120px;
    bottom: -15px;
  }
  @media ${device.laptop} {
    top: -30px;
    bottom: unset;
    width: 400px;
    height: 160px;
    font-size: 32px;
  }
`;

const SemiCircleText = styled.h3`
  position: absolute;
  z-index: 999;
  top: -11px;
  top: ${({ open }) => (open ? '-3px' : '-7px')};
  left: 0;
  right: 0;
  font-size: 15px;
  font-size: ${({ open }) => (open ? '22px' : '17px')};
  letter-spacing: 1.5px;
  font-weight: 700;
  color: #fff;
  margin-top: 20px;
  text-shadow: 2px 2px 2px #005fa3;
  padding: 0px 10px;
  transition: all 0.3s;

  @media ${device.mobileL} {
    font-size: 18px;
  }

  @media ${device.tablet} {
    top: -5px;

    font-size: 20px;
  }

  @media ${device.laptop} {
    bottom: 27px;
    font-size: 36px;
    top: unset;
  }
`;

const SemiCircleComponent = ({ open, setOpen, editMode, category }) => {
  return (
    <SemiCircleContainer onClick={() => setOpen(!open)}>
      <SemiCircleContent open={open}>
        <SemiCircleText open={open}>
          {' '}
          {editMode ? 'Edit Mode' : category}{' '}
        </SemiCircleText>{' '}
      </SemiCircleContent>{' '}
    </SemiCircleContainer>
  );
};

export default SemiCircleComponent;
