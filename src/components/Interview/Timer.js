import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { device } from '../utils/media';

const StyledTimer = styled.div`
  border: 3px solid #005580;

  border-radius: 50px;

  width: 30px;
  height: 30px;
  padding: 30px;
  font-size: 27px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #005580;
  background: #cce0ff;

  @media ${device.tablet} {
    font-size: 42px;
    width: 45px;
    height: 45px;
    padding: 40px;
    border: 5px solid #005580;
  }
`;

const Timer = ({ activateOverlay, setIsTimer, setIsAnswer, setIsQuestion }) => {
  const [counter, setCounter] = useState(2);

  useEffect(() => {
    if (counter > 0) setTimeout(() => setCounter(counter - 1), 1000);
    else if (counter === 0) {
      activateOverlay(true);
      setIsTimer(false);
      setIsAnswer(true);
      setIsQuestion(true);
    }
  }, [counter]);

  return <StyledTimer>{counter}</StyledTimer>;
};

export default Timer;
