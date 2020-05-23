import React from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../mediaQueries/media';

const fadeInTitle = keyframes`
0% {
  transform: translateY(-20px);
  opacity: 0;
  }
  100% {
  transform: translateY(0px);
    opacity: 1;
  }
`;

const Title = styled.h3`
  text-align: center;
  line-height: 1.2;
  font-size: 35px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #091d34;
  animation-name: ${fadeInTitle};
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.08, 1.17, 0.96, 0.94);
  opacity: 0;
  animation-duration: 0.3s;
  @media ${device.laptop} {
    font-size: 42px;
  }
`;

const TitleComponent = ({ numOfTech, category }) => {
  return (
    <Title>
      {' '}
      Top{' '}
      {numOfTech.map((tech) => {
        if (tech[0] === category) return tech[1];
      })}{' '}
      {category} questions & answers{' '}
    </Title>
  );
};

export default TitleComponent;
