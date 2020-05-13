import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SimpleBar from 'simplebar-react';

import { device } from '../utils/media';

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
const Container = styled.div`
height: 100px;
  /* width: ${(props) => (props.typeOfField === 'text' ? '100%' : '50%')}; */
  /* display: inline-block; */
  /* background: #4ca1af; 
  background: -webkit-linear-gradient(
    to right,
    #c4e0e5,
    #4ca1af
  );
  background: linear-gradient(to right, #c4e0e5, #4ca1af);  */

  position: relative;
  width: 100%;
  /* border-radius: 8px; */

  margin: 0;
  border: 1px solid #80bfff;
  border-left: 3px solid #4ca1af;
  border-radius: 8px 8px 0 0;
  transition: all 0.3s;
  &:hover {
    /* -webkit-box-shadow: 0px 0px 14px 3px rgba(76, 161, 175, 1);
    -moz-box-shadow: 0px 0px 14px 3px rgba(76, 161, 175, 1);
    box-shadow: 0px 0px 14px 3px rgba(76, 161, 175, 1);
    border: 1px solid #4da6ff; */

    -webkit-box-shadow: inset 0px 0px 10px 0px rgba(0,115,230,1);
-moz-box-shadow: inset 0px 0px 10px 0px rgba(0,115,230,1);
box-shadow: inset 0px 0px 10px 0px rgba(0,115,230,1);

  }


`;

const Input = styled.textarea`
  resize: none;
  overflow-y: scroll;
  background: -webkit-linear-gradient(to right, #c4e0e5, #4ca1af);
  background: linear-gradient(to right, #c4e0e5, #4ca1af);

  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  /* font-size: 20px; */
  font-size: ${(props) => (props.typeOfField === 'text' ? '21px' : '18px')};
  font-weight: 600;
  line-height: 1.3;
  color: black;

  padding: 10px;
  width: 100%;
  /* border-radius: 8px; */
  border-top: 3px dashed transparent;
  border-right: 0;
  border-bottom: 3px dashed transparent;
  border-left: 3px solid transparent;

  /* transition: all 0.3 ease-in-out 0.3s; */
  transition: all 0.3s;

  @media ${device.laptop} {
    justify-content: center;
    padding: 10px 20px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    /* border: 3px dashed #004080; */
    border-top: 3px dashed #006bb3;
    border-right: 3px dashed #006bb3;
    border-bottom: 3px dashed #006bb3;
    border-left: 3px solid transparent;
    /* color: #00264d; */
  }

  @media ${device.laptop} {
    font-size: 23px;
  }
`;

const Textarea = ({ id, technology, typeOfField, content, editData, type }) => {
  const [text, setText] = useState(content);

  const updateText = (updatedValue) => {
    setText(updatedValue);
    editData(id, updatedValue, technology, typeOfField, type);
  };

  return (
    // <SimpleBar
    //   style={{
    //     maxHeight: '100px',
    //   }}
    // >
    <Container typeOfField={typeOfField}>
      <Input
        id={id}
        key={id}
        type="text"
        value={text}
        onChange={(e) => updateText(e.target.value)}
        typeOfField={typeOfField}
        className={typeOfField}
        spellCheck={false}
      />{' '}
    </Container>
    // </SimpleBar>
  );
};

export default Textarea;
