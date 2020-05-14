import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import DoneSharpIcon from '@material-ui/icons/DoneSharp';
import Tooltip from '@material-ui/core/Tooltip';
import { uuid } from 'uuidv4';

import db from '../../firebase/base';

import { device } from '../utils/media';

const Input = styled.input`
  display: none;

  &:checked + label {
    background: #275efe;
    border: 1px solid #275efe;

    & > svg {
      fill: white;
    }
  }
`;

const Label = styled.label`
  display: inline-block;
  cursor: pointer;
  /* z-index: 999; */
  position: absolute;
  top: -10px;
  right: -10px;
  width: 25px;
  height: 25px;
  border: 1px solid #b3d1ff;
  border-radius: 7px;
  background: #e6f0ff;
  transition: all 0.3s;

  &:hover {
    border: 1px solid #275efe;
  }

  & > svg {
    fill: #e6f0ff;
    position: relative;
    width: 95%;
    height: 95%;
    transition: all 0.3s;
  }
`;

const Checkbox = ({ id, boxId, technology, updateKnown, known }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = (value) => {
    setChecked(value);
    updateKnown(id, technology, value);
  };

  useEffect(() => {
    setChecked(known);
  }, []);

  return (
    <>
      <Input
        id={boxId}
        key={boxId}
        type="checkbox"
        checked={checked}
        onChange={(e) => toggleCheckbox(e.target.checked)}
        // onChange={() => setChecked(!checked)}
      />{' '}
      <Tooltip
        title={checked ? 'Mark as new' : 'Mark as known'}
        placement="top"
      >
        <Label htmlFor={boxId} className="known" key={boxId}>
          <DoneSharpIcon />
        </Label>{' '}
      </Tooltip>{' '}
    </>
  );
};

export default Checkbox;
