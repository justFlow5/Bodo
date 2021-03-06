import React from 'react';
import styled from 'styled-components';

import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PeopleSharpIcon from '@material-ui/icons/PeopleSharp';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

import { Link } from 'react-router-dom';
// import { logout } from '../firebase/base';
import { logout } from '../../firebase/firebaseFuntions';
import { device } from '../mediaQueries/media';

const MyNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 900;


/* background: ${(props) => props.theme.greenFour}; */
background: ${(props) => props.theme.blueFife};
height: 55px;

/* color:${(props) => props.theme.blueOne}; */



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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid ${(props) => props.theme.blueFife};
  transition: border-bottom 0.1s linear;

  @media ${device.tablet} {
    padding: 0;
  }

  &:hover {
    @media ${device.laptop} {
      border-bottom: 2px solid ${(props) => props.theme.blueOne};
    }
  }

  &:hover .navIcon {
    fill: white;
  }

  &:hover .navText {
    color: white;
  }

  &.lastItem {
    margin-left: inherit;
    @media ${device.laptop} {
      margin-left: auto;
    }
  }

  &.middleIcon {
    /* margin-left: auto; */
    /* margin-right: auto; */
  }

  & .navIcon {
    fill: ${(props) => props.theme.blueOne};
    height: 30px;
    width: 30px;
    transition: fill 0.4s linear;

    /* &:hover {
      fill: white;
    } */
  }

  & .navText {
    font-weight: 500;
    font-size: 10px;
    line-height: unset;
    color: ${(props) => props.theme.blueOne};
    letter-spacing: 1px;
    transition: color 0.4s linear;

    /* &:hover {
      color: white;
    } */

    @media ${device.mobileL} {
      font-size: 11px;
    }
    @media ${device.tablet} {
      font-size: 12px;
    }

    @media ${device.laptop} {
      font-size: 12px;
      font-weight: 600;
      padding: 0 20px;
    }
  }
`;

const Navbar = () => {
  return (
    <MyNavbar>
      <NavbarList>
        <Link to="/dashboard">
          <NavbarItem>
            <HomeIcon className="navIcon" />
            <span className="navText"> Dashboard </span>{' '}
          </NavbarItem>{' '}
        </Link>{' '}
        <Link to="/add-question">
          <NavbarItem>
            <QuestionAnswerIcon className="navIcon" />
            <span className="navText"> New Question </span>{' '}
          </NavbarItem>{' '}
        </Link>{' '}
        <Link to="/interview">
          <NavbarItem className="middleIcon">
            <PeopleSharpIcon className="navIcon" />
            <span className="navText"> Start Interview </span>{' '}
          </NavbarItem>{' '}
        </Link>
        <NavbarItem
          className="lastItem"
          onClick={() => {
            logout();
          }}
        >
          <MeetingRoomIcon className="navIcon" />
          <span className="navText"> Logout </span>{' '}
        </NavbarItem>{' '}
      </NavbarList>{' '}
    </MyNavbar>
  );
};

export default Navbar;
