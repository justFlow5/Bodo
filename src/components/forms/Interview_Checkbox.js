import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { uuid } from 'uuidv4';

import { device } from '../mediaQueries/media';

const Checkbox = styled.input`
  display: none;

  &:checked + .checkbox-label-wrapper {
    filter: drop-shadow(0px 0px 7px rgba(9, 29, 52, 1));
    transform: translateY(-5px);

    & label {
      /* background: #00b4db;

      background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
      background: linear-gradient(to right, #0083b0, #00b4db); */

      background-color: #6a93cb;
      background-image: linear-gradient(315deg, #6a93cb 0%, #a4bfef 74%);
      transform: rotateY(360deg);
    }
  }
`;

const Interview_Checkbox = ({ id, singleTech, updateSelectedData }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = (e) => {
    setChecked(!checked);
    updateSelectedData(e.target.checked, singleTech);
    console.log('e.target.checked: ', checked);
    console.log('e.target.id: ', e.target.id);
  };

  //   useEffect(() => {
  //     if (stackChanged) setChecked(false);
  //   }, []);

  return (
    <Checkbox
      id={id}
      type="checkbox"
      // name={singleTech}
      onChange={(e) => toggleCheckbox(e)}
      checked={checked}
    />
  );
};

export default Interview_Checkbox;
