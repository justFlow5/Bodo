import React, { useState } from 'react';
import styled from 'styled-components';

import { device } from '../mediaQueries/media';

const Container = styled.div`
  height: 100px;
  position: relative;
  width: 100%;
  margin: 0;
  border: 1px solid #80bfff;
  border-left: 3px solid #4ca1af;
  border-radius: 8px 8px 0 0;
  transition: all 0.3s;
  &:hover {
    -webkit-box-shadow: inset 0px 0px 10px 0px rgba(0, 115, 230, 1);
    -moz-box-shadow: inset 0px 0px 10px 0px rgba(0, 115, 230, 1);
    box-shadow: inset 0px 0px 10px 0px rgba(0, 115, 230, 1);
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
  font-size: ${(props) => (props.typeOfField === 'text' ? '21px' : '18px')};
  font-weight: 600;
  line-height: 1.3;
  color: black;
  padding: 10px;
  width: 100%;
  border-top: 3px dashed transparent;
  border-right: 0;
  border-bottom: 3px dashed transparent;
  border-left: 3px solid transparent;
  transition: all 0.3s;
  scrollbar-width: none;

  @media ${device.laptop} {
    justify-content: center;
    padding: 10px 20px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    border-top: 3px dashed #006bb3;
    border-right: 3px dashed #006bb3;
    border-bottom: 3px dashed #006bb3;
    border-left: 3px solid transparent;
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
  );
};

export default Textarea;
