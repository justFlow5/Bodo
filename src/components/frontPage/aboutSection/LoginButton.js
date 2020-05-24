import React, { useState, useEffect, useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../../mediaQueries/media';

const LoginButton = styled.button`
  width: 280px;
  height: 50px;
  padding: 10px 20px;
  color: #fff;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 0.8px;
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

const LoginButtonComponent = ({ content }) => {
  return <LoginButton>{content}</LoginButton>;
};
export default LoginButtonComponent;
