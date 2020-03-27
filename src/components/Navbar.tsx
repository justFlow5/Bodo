import React from 'react';
import styled from 'styled-components';

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
height: 50px;

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
  height: 50px;
  line-height: 50px;
  white-space: nowrap;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;
  /* margin: 10px; */

  border-bottom: 2px hidden #f7fbdf;
  transition: border 0.1s linear;

  @media ${device.mobileL} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 19px;
    letter-spacing: 0.5px;
  }

  @media ${device.laptop} {
    font-size: 19px;
    font-weight: 600;
    padding: 0 20px;
  }

  &.lastItem {
    margin-left: inherit;
    @media ${device.laptop} {
      margin-left: auto;
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
        <NavbarItem>Dashboard</NavbarItem>
        <NavbarItem>+ New Question</NavbarItem>

        <NavbarItem className="lastItem">Start Interview</NavbarItem>
      </NavbarList>
    </MyNavbar>
  );
};

export default Navbar;
