import React from 'react';
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';

import { device } from '../mediaQueries/media';

const RatingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  align-items: center;
  padding-bottom: 50px;

  & .rateMeasure {
    &::before {
      content: 'Rate your answer';
      font-size: 14px;
      position: absolute;
      top: -25px;
      left: 5px;
      color: black;
    }
  }
`;

const LabelContainer = styled.div`
  position: relative;
  display: inline-block;
  font-size: 12px;
  width: 50%;
  margin-left: 10px;
  padding: 0;
  height: 55px;
  top: -10px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 50%;
    margin-left: 20px;
    padding: 10px 20px;
    font-size: 14px;
    display: inline-block;
    text-align: left;
  }
`;

const labels = {
  1: 'Completely wrong/did not know the answer',
  2: 'Somehow relevant answer',
  3: 'OK. Answer missing the most important points but still correct',
  4: 'More than half of the answer covered correctly',
  5: 'Even more than required. Excellent!',
};

const Rate = ({ setRateUpdate, ratingValue, setRatingValue }) => {
  const [hover, setHover] = React.useState(-1);

  return (
    <RatingContainer>
      <Rating
        name="hover-feedback"
        className="rateMeasure"
        value={ratingValue}
        precision={1}
        onChange={(event, newValue) => {
          setRatingValue(newValue);
          setRateUpdate(true);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        size="large"
      />
      {ratingValue !== null && (
        <LabelContainer>
          {labels[hover !== -1 ? hover : ratingValue]}
        </LabelContainer>
      )}
    </RatingContainer>
  );
};

export default Rate;
