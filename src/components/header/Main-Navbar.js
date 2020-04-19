import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo';

import styled, { keyframes } from 'styled-components';

const moveDown = keyframes`
    from {
      transform: translateY(-60px);
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
  padding: 8px 10px;
  position: absolute;
  z-index: 1;
  width: 100%;
  color: white;
  z-index: 999;

  &.navbar-sticky {
    background: #0079bf;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 1px 1px 1px #236ab9;
    /* animation: ${moveDown} 0.5s ease-in-out; */
    animation: ${moveDown} 0.5s ;

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

  & #logoName {
    font-family: 'Leckerli One', cursive;
    font-size: 30px;
    padding: 8px 3px;
    display: inline-block;
    pointer-events: none;
    /* letter-spacing: 1.5px; */
    /* font-weight: 700; */
  }
`;

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;

  & a {
    text-decoration: none;
  }
`;

const NavbarItem = styled.li`
  margin: 0.4rem 1rem 0 0;
  padding: 0 0.3rem;
  cursor: pointer;
  text-align: center;
  padding: 8px 18px;
  color: #fff;

  &#login {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1px;
    border-bottom: 2px solid transparent;
    padding: 8px 3px 2px;
    margin-bottom: 6px;
    transition: border-bottom 0.3s;

    &:hover {
      border-bottom: 2px solid white;
    }
  }

  &#register {
    border: 2px solid #fff;
    border-radius: 5px;
    width: 150px;
    font-size: 19px;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.3s;

    &:hover {
      background: #fff;
      color: #0079bf;
      /* border:  */
    }
  }
`;

const MainNavbar = ({ sticky }) => (
  <Navbar className={sticky ? 'navbar-sticky' : null}>
    <NavbarLogoHolder className="navbar--logo-holder">
      {sticky ? <Logo /> : null}
      <span id="logoName"> Bodo</span>
    </NavbarLogoHolder>
    <NavbarList>
      <Link to="/login">
        <NavbarItem id="login">Login</NavbarItem>
      </Link>
      <Link to="/register">
        {' '}
        <NavbarItem id="sign-up">Register</NavbarItem>
      </Link>
    </NavbarList>
  </Navbar>
);
export default MainNavbar;
