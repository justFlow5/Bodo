import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
// var Rating = require('react-rating');
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { device } from '../utils/media';

const RatingContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
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
  font-size: 14px;
  width: 50%;
  margin-left: 20px;
  padding: 10px 20px;
  height: 55px;
`;

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});
const labels = {
  1: 'Completely wrong/did not know the answer',
  2: 'Somehow relevant answer',
  3: 'OK. Answer missing the most important points but still correct',
  4: 'More than half of the answer covered correctly',
  5: 'Even more than required. Excellent!',
};

const Rate = ({ ratingData, setRateUpdate, ratingValue, setRatingValue }) => {
  // const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

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
