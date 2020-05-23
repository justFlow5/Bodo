import React from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from '../../mediaQueries/media';

const SideNavbarItem = styled.li`
  height: 30px;
  width: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-bottom: 1px solid #133863;
  padding: 27px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.8px;
  color: #a3aefb;
  white-space: nowrap;
  overflow: hidden;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5), 2px 2px 2px rgba(163, 174, 251, 0);
  transition: all 0.3s;

  @media ${device.laptop} {
    padding: 30px;
    width: 210px;
  }

  &:hover {
    text-shadow: none;
    color: #d8dcf9;
    -webkit-box-shadow: inset 0px 0px 20px 2px rgba(46, 74, 117, 1);
    -moz-box-shadow: inset 0px 0px 20px 2px rgba(46, 74, 117, 1);
    box-shadow: inset 0px 0px 15px 2px rgba(46, 74, 117, 1);
    & .numOfQuestions {
      @media ${device.laptop} {
        top: -17px;
        opacity: 1;
        top: -23px;
        & > span {
          position: relative;
          bottom: -9px;
          font-size: 13px;
          color: white;
        }
      }
    }
  }
`;

const NumOfQuestions = styled.div`
  display: inline-block;
  border-radius: 6px;
  border-radius: 50%;
  right: -10px;
  top: -12px;
  position: relative;
  color: #d8dcf9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  width: 30px;
  height: 30px;
  opacity: 1;
  background: rgba(19, 56, 99, 1);
  font-size: 12px;
  border: 2px solid #200ac7;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(32, 10, 199, 1);
  -moz-box-shadow: 0px 0px 12px 0px rgba(32, 10, 199, 1);
  box-shadow: 0px 0px 12px 0px rgba(32, 10, 199, 1);
  transition: all 0.3s cubic-bezier(0.69, 0.9, 0.92, 1.19);
  @media ${device.laptop} {
    display: inline-block;
    top: -50px;
    right: -10px;
    position: relative;
    color: #d8dcf9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    width: 30px;
    height: 30px;
    opacity: 0;
    background: rgba(19, 56, 99, 1);
    font-size: 14px;
    border: 2px solid #200ac7;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(32, 10, 199, 1);
    -moz-box-shadow: 0px 0px 15px 0px rgba(32, 10, 199, 1);
    box-shadow: 0px 0px 15px 0px #57a0e0;
    position: absolute;
    right: 10px;
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }
`;

const SideNavbarItemComponent = ({ setCategory, categoryData }) => (
  <SideNavbarItem onClick={() => setCategory(`${categoryData[0]}`)}>
    {' '}
    {categoryData[0]}{' '}
    <NumOfQuestions className="numOfQuestions">
      {' '}
      <span> {categoryData[1]} </span>{' '}
    </NumOfQuestions>{' '}
  </SideNavbarItem>
);

export default SideNavbarItemComponent;
