import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PeopleSharpIcon from '@material-ui/icons/PeopleSharp';

import { device } from './utils/media';

const MyNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 5;


/* background: ${props => props.theme.greenFour}; */
background: #091D34;
height: 55px;

color: #f7fbdf;

-webkit-box-shadow: 0px -5px 9px -5px rgba(19,56,99,1);
-moz-box-shadow: 0px -5px 9px -5px rgba(19,56,99,1);
box-shadow: 0px -5px 9px -5px rgba(19,56,99,1);

  @media ${device.laptop} {
    top: 0;
    bottom: unset;
    
  -webkit-box-shadow: 0px 5px 9px -5px rgba(19,56,99,1);
-moz-box-shadow: 0px 5px 9px -5px rgba(19,56,99,1);
box-shadow: 0px 5px 9px -5px rgba(19,56,99,1);
  }
`;

const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 100%;
  justify-content: space-around;

  @media ${device.laptop} {
    justify-content: unset;
  }
`;

const NavbarItem = styled.li`
  position: relative;
  text-align: center;
  /* height: 100%; */

  /* padding-top: 30px;
  padding-bottom: 30px; */
  padding: 0 10px;
  height: 55px;
  /* line-height: 55px; */
  white-space: nowrap;

  font-weight: 500;

  cursor: pointer;
  /* margin: 10px; */

  border-bottom: 2px hidden #f7fbdf;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: border 0.1s linear;

  &.lastItem {
    margin-left: inherit;
    @media ${device.laptop} {
      margin-left: auto;
    }
  }

  & .navIcon {
    fill: #f7fbdf;
    height: 30px;
    width: 30px;
  }

  & .navText {
    font-size: 8px;
    line-height: unset;

    @media ${device.mobileL} {
      font-size: 10px;
    }
    @media ${device.tablet} {
      font-size: 12px;
      letter-spacing: 0.5px;
    }

    @media ${device.laptop} {
      font-size: 12px;
      font-weight: 600;
      padding: 0 20px;
    }
  }

  &:hover {
    @media ${device.laptop} {
      border-bottom: 2px solid #f7fbdf;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <MyNavbar>
      <NavbarList>
        <NavbarItem>
          <HomeIcon className="navIcon" />
          <span className="navText">Dashboard</span>
        </NavbarItem>
        <NavbarItem>
          <QuestionAnswerIcon className="navIcon" />
          <span className="navText">+ New Question</span>
        </NavbarItem>

        <NavbarItem className="lastItem">
          <PeopleSharpIcon className="navIcon" />
          <span className="navText">Start Interview</span>
        </NavbarItem>
      </NavbarList>
    </MyNavbar>
  );
};

export default Navbar;
