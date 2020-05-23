import React from 'react';
import styled, { keyframes } from 'styled-components';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import { device } from '../mediaQueries/media';

const MyFormControlLabel = styled(FormControlLabel)`
  &.tech {
    opacity: 0;
    width: 20%;
    margin: 0 auto;
    transition: opacity 0.5s ease-in-out;
    &.active {
      opacity: 1;
      width: 20%;
      margin: 0 auto;
    }
  }
`;

const JobRadioButton = ({ singleJob, handleJobChange, job }) => {
  return (
    <MyFormControlLabel
      value={singleJob}
      control={
        <Radio
          color="primary"
          checked={job === singleJob}
          onChange={handleJobChange}
        />
      }
      label={singleJob}
      color="primary"
    />
  );
};

export default JobRadioButton;
