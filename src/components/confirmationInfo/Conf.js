import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { device } from '../utils/media';

import ConfIcon from '../../images/confirmation/ConfirmationIcon';

const fadeIn = keyframes`
0% {
  transform: translateX(-100%);
  opacity: 0;
  }

  10% {
    transform: translateX(30%);
    opacity: 1;
  }

  
  90% {
    transform: translateX(30%);
    opacity: 1;
  }

  100% {
    transform: translateX(-100%);
  opacity: 0;
  }
`;

const Confirmation = styled.div`
  position: fixed;
  top: 15%;
  width: 200px;
  height: 50px;
  padding: 6px 10px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(-100%);
  background: #00e600;

  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
  /* animation-timing-function: linear; */

  animation-duration: 5s;

  & svg {
    fill: white;
    width: 65px;
    height: 65px;
    display: inline-block;
  }

  & .info {
    color: white;
    font-size: 17px;
    letter-spacing: 0.8px;
    margin-left: 15px;
    line-height: 1.2;
    font-weight: 600;
  }
`;

const Conf = ({ isSavedData }) => {
  return (
    <>
      {isSavedData && (
        <Confirmation>
          <ConfIcon />
          <h3 className="info">Data Saved Successfully</h3>
        </Confirmation>
      )}
    </>
  );
};

export default Conf;
