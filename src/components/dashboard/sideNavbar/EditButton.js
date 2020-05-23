import React from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../../mediaQueries/media';

const EditButton = styled.button`
  position: relative;
  display: block;
  width: 70%;
  margin: 5px auto;
  background: #273384;
  color: #a3aefb;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  line-height: 0.6;
  border-radius: 7px;
  padding: 10px;
  border: 1px solid rgba(32, 10, 199, 1);
  white-space: nowrap;
  transition: all 0.3s;

  &:last-child {
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s cubic-bezier(0.08, 1.17, 0.96, 0.94);
    &.togglerActive {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media ${device.mobileL} {
    width: 50%;
    margin-top: 7px;
  }

  @media ${device.tablet} {
    width: 30%;

    height: 40px;
    margin-right: 5%;
    font-size: 17px;
    margin-top: 15px;

    margin-left: auto;
    margin-right: auto;
  }

  @media ${device.laptop} {
    height: unset;
    width: 70%;
    font-size: 15px;
    margin-top: 0;
  }

  &:hover {
    background: #2d3b98;
    color: #d4d9fd;
  }

  &.editMode {
    -webkit-box-shadow: 0px 0px 15px 0px rgba(32, 10, 199, 1);
    -moz-box-shadow: 0px 0px 15px 0px rgba(32, 10, 199, 1);
    box-shadow: 0px 0px 15px 0px rgba(32, 10, 199, 1);
    color: #bbc3fc;
    background: #2d3b98;
    color: #d4d9fd;
  }
`;

const EditButtonComponent = ({
  handleEdit,
  editMode,
  typeOfEdit,
  handleLeaveEditMode,
}) => {
  return typeOfEdit === 'dataSave' ? (
    <EditButton onClick={handleEdit} className={editMode ? 'editMode' : null}>
      {' '}
      {editMode ? 'Save Changes' : 'EDIT'}
    </EditButton>
  ) : (
    <EditButton
      onClick={handleLeaveEditMode}
      className={editMode ? 'togglerActive' : 'editMode'}
    >
      Exit Edit Mode{' '}
    </EditButton>
  );
};

export default EditButtonComponent;
