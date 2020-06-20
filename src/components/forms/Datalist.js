import React, { useRef } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { device } from '../mediaQueries/media';

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 100px;

  @media ${device.laptop} {
    margin-top: 180px;
  }
`;
const LanguageDatalist = styled.input`
  width: 80%;
  border-radius: 8px;

  height: 40px;
  font-size: 17px;
  background: #273384;
  padding: 10px 15px;
  color: #a3aefb;
  position: relative;
  border: 1px solid rgba(32, 10, 199, 1);
  transition: all 0.3s;

  &:focus {
    -webkit-box-shadow: 0px 0px 12px 0px rgba(32, 10, 199, 1);
    -moz-box-shadow: 0px 0px 12px 0px rgba(32, 10, 199, 1);
    box-shadow: 0px 0px 12px 0px rgba(32, 10, 199, 1);
    color: white;
  }

  &::placeholder {
    color: #a3aefb;
    transition: color 0.3s;
  }

  &:hover {
    color: white;
    &::placeholder {
      color: white;
    }
  }

  &:hover ~ svg {
    fill: white;
  }

  & + svg {
    opacity: 1;
    fill: #a3aefb;
    position: absolute;
    right: 12%;
    top: 5px;
    z-index: 999;
    transition: 0.3s;
    background-color: #273384;
    width: 30px;
    height: 30px;
    @media ${device.laptop} {
      right: 30px;
    }
  }
`;

const Datalist = ({ ref, setCategory, technologies }) => {
  const datalistRef = useRef(null);
  const allTechs = technologies.map((tech) => tech[0]);
  const isTech = (inputValue) => {
    const selectedValue = allTechs.find(
      (tech) => tech.toLowerCase() === inputValue.toLowerCase()
    );
    if (selectedValue) setCategory(selectedValue);
  };

  return (
    <InputContainer>
      <LanguageDatalist
        ref={datalistRef}
        placeholder="technology..."
        name="technologies"
        list="techs"
        onChange={() => isTech(datalistRef.current.value)}
      ></LanguageDatalist>{' '}
      <SearchIcon />
      <datalist id="techs">
        {' '}
        {technologies.map((tech) => (
          <option value={tech[0]} />
        ))}{' '}
      </datalist>{' '}
    </InputContainer>
  );
};

export default Datalist;
