import React from 'react';
import { Link } from 'react-router-dom';
import { device } from '../utils/media';

import Logo2 from '../../images/navbar/clover3.png';

import styled, { keyframes } from 'styled-components';

const moveDown = keyframes`
    from {
      transform: translateY(-80px);
    }
    to {
      transform: translateY(0px);
    }
`;

const rotate = keyframes`
0% {
    transform: rotateY(360deg);
  }
  100% {
    transform: rotateY(0rem);
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  position: absolute;
  z-index: 1;
  width: 100%;
  color: white;
  z-index: 999;

  @media ${device.tablet} {
    padding: 8px 10px;
  }

  &.navbar-sticky {
    background: rgb(38, 154, 222);
    background: radial-gradient(
      circle,
      rgba(38, 154, 222, 1) 3%,
      rgba(38, 218, 222, 1) 91%,
      rgba(63, 255, 236, 1) 100%
    );
    position: fixed;
    top: 0;
    left: 0;
    -webkit-box-shadow: 0px 3px 13px -5px rgba(45, 99, 128, 1);
    -moz-box-shadow: 0px 3px 13px -5px rgba(45, 99, 128, 1);
    box-shadow: 0px 3px 13px -5px rgba(45, 99, 128, 1);
    animation: ${moveDown} 0.5s ease-in-out;
  }
`;
const NavbarLogoHolder = styled.div`
  display: flex;
  align-items: center;

  & svg {
    fill: #fff;
    width: 50px;
    height: 50px;
    margin-right: 0.5rem;
    animation: ${rotate} 0.7s ease-in-out 0.5s;
  }

  & > img {
    width: 50px;
    height: 50px;
    /* margin-right: 0.5rem; */
    animation: ${rotate} 0.7s ease-in-out 0.5s;

    @media ${device.mobileL} {
      width: 55px;
      height: 55px;
      margin-right: 8px;
    }

    @media ${device.tablet} {
      width: 55px;
      height: 55px;
    }
  }

  & #logoName {
    font-family: 'Merienda', cursive;
    font-size: 30px;
    padding: 8px 3px;
    padding: 5px 0px 5px 5px;
    display: inline-block;
    pointer-events: none;

    @media ${device.tablet} {
      font-size: 45px;
      padding: 5px 15px;
    }

    &.sticky-font {
      font-size: 25px;

      @media ${device.tablet} {
        font-size: 35px;
      }
    }
  }
`;

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  align-items: center;
  padding: 0 5px;

  @media ${device.tablet} {
    padding: 0 20px;
  }

  & a {
    text-decoration: none;
  }
`;

const NavbarItem = styled.li`
  /* margin: 0.4rem 1rem 0 0; */
  /* padding: 0 0.3rem; */
  cursor: pointer;
  text-align: center;
  /* padding: 8px 18px; */
  color: #fff;
  /* color: black; */

  @media (min-width: 638px) {
    color: black;
  }

  &#login {
    font-weight: 500;
    font-size: 22px;

    letter-spacing: 1px;

    padding: 8px 3px 2px;
    margin-bottom: 6px;
    transition: all 0.3s;

    &:hover {
      color: #0079bf;
    }
    &.sticky-color {
      color: #fff;
      margin-right: 5px;
      font-size: 19px;
      font-weight: 600;
      margin-right: 5px;
      margin-left: 5px;
      margin-top: 3px;
      padding: 12px 2px 5px 2px;
      border-bottom: 3px solid transparent;
      transition: border-bottom 0.2s;

      @media ${device.mobileL} {
        margin-right: 10px;
      }

      @media ${device.tablet} {
        margin-right: 30px;
        font-size: 22px;
      }

      &:hover {
        border-bottom: 3px solid #fff;
      }
    }
  }

  &#register {
    width: 100px;
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 1px;

    transition: all 0.3s;

    @media ${device.mobileL} {
      width: 120px;
      font-size: 22px;
    }

    @media ${device.tablet} {
      width: 150px;
      font-size: 22px;
    }

    &:hover {
      /* background: #fff; */
      color: #0079bf;
      /* border:  */
    }
    &.sticky-color {
      color: white;
      border: 3px solid #fff;
      border-radius: 5px;
      font-weight: 600;
      font-size: 19px;
      padding: 6px 0px;

      @media ${device.tablet} {
        border: 4px solid #fff;
        font-size: 22px;
      }
    }
  }
`;

const MainNavbar = ({ sticky }) => (
  <Navbar className={sticky ? 'navbar-sticky' : null}>
    <NavbarLogoHolder className="navbar--logo-holder">
      {/* {sticky ? <Logo /> : null} */}
      {sticky ? <img src={Logo2} alt="clover" /> : null}

      <span id="logoName" className={sticky ? 'sticky-font' : null}>
        {' '}
        Bodo
      </span>
    </NavbarLogoHolder>
    <NavbarList>
      {/* <a href="#about">
        <NavbarItem>about</NavbarItem>
      </a> */}

      <Link to="/login">
        <NavbarItem id="login" className={sticky ? 'sticky-color' : null}>
          login
        </NavbarItem>
      </Link>
      <Link to="/sign-up">
        {' '}
        <NavbarItem id="register" className={sticky ? 'sticky-color' : null}>
          sign up
        </NavbarItem>
      </Link>
    </NavbarList>
  </Navbar>
);
export default MainNavbar;
