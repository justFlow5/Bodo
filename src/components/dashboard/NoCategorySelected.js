import React from 'react';
import styled from 'styled-components';

const NoInfo = styled.p`
  position: fixed;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  font-weight: 600;
  color: #a3aefb;
  cursor: pointer;
`;

const NoCategorySelectedComponent = ({ open, setOpen }) => {
  return <NoInfo onClick={() => setOpen(!open)}>No Category Selected</NoInfo>;
};

export default NoCategorySelectedComponent;
