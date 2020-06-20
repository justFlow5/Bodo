import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { device } from '../mediaQueries/media';

const StyledTimer = styled.div`
  border: 3px solid #005580;
  border: 3px solid #a4abb9;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  padding: 30px;
  font-size: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #005580;
  color: #40434a;
  background: #cce0ff;
  background: #b8bdc3;
  -webkit-box-shadow: 0px 0px 16px 0px rgba(18, 33, 94, 1);
  -moz-box-shadow: 0px 0px 16px 0px rgba(18, 33, 94, 1);
  box-shadow: 0px 0px 16px 0px rgba(18, 33, 94, 1);

  @media ${device.tablet} {
    font-size: 42px;
    width: 45px;
    height: 45px;
    padding: 40px;
    border: 5px solid #a4abb9;
  }
`;

const Timer = ({ showAnswer, isTimer }) => {
  const [counter, setCounter] = useState(90);

  useEffect(() => {
    if (counter > 0 && isTimer) setTimeout(() => setCounter(counter - 1), 1000);
    else if (counter === 0) {
      showAnswer();
    }
  }, [counter]);

  return <StyledTimer>{counter}</StyledTimer>;
};

export default Timer;
