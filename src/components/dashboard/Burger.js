import React, { useState, useEffect, useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../mediaQueries/media';

const StyledBurger = styled.button`
  outline: none;
  position: fixed;
  top: 3%;
  right: 3%;
  right: ${({ open }) => (open ? '1%' : '3%')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: all 0.3s;
  @media ${device.laptop} {
    top: 13%;
  }
  &::before {
    content: 'Categories';
    position: absolute;
    left: -415%;
    color: ${({ open }) => (open ? '#9999ff' : '#091d34')};
    font-size: 23px;
    font-weight: 700;
    margin-right: 10px;
    background: ${({ open, editMode }) => {
      if (!open && editMode) return `transparent`;
      else if (!open && !editMode) return '#E1ECF9';
      else if (open) return `transparent`;
    }};

    z-index: 11;
    transition: color 0.3s linear;

    @media ${device.laptop} {
      top: 13%;
      background: unset;
    }

    @media (min-width: 1600px) {
      left: -390%;
    }
  }
  &:hover::before {
    color: ${({ open }) => (open ? '#ADADFF' : '#11355f')};
  }
  &:hover > div {
    background: ${({ open }) => (open ? '#ADADFF' : '#11355f')};
  }
  &:focus {
    outline: none;
    outline: 0;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#9999ff' : '#091d34')};
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
    transition: transform 0.3s linear;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ open, setOpen, editMode }) => {
  return (
    <>
      <StyledBurger
        className="hamburg"
        open={open}
        editMode={editMode}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>{' '}
    </>
  );
};

export default Burger;
