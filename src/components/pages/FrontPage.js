import React, { useState, useEffect, useRef } from 'react';
import MainNavbar from '../navbars/Main-Navbar';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Header from '../frontPage/Header';
import AboutSection from '../frontPage/AboutSection';

import { debounce } from '../frontPage/helperFuntions';

const LoginPageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  overflow-x: hidden;

  & .test {
    width: 200px;
    height: 100px;
    font-size: 21px;
    color: black;
    position: fixed;
    top: 100px;
    right: 100px;
    z-index: 999;
    background: pink;
  }
`;

const Welcome = () => {
  const [isSticky, setSticky] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (stickyRef.current) {
      window.pageYOffset > stickyRef.current.getBoundingClientRect().top
        ? setSticky(true)
        : setSticky(false);
    }
  };

  window.addEventListener('scroll', debounce(handleScroll));

  return (
    <>
      <MainNavbar sticky={isSticky} />
      <LoginPageContainer>
        <Header
          headerTitle="Applying for your dream job?"
          subTitle="Better not screw this up!"
          headerText="Make the best first impression on your job interview with the help
              of Bodo"
        />
        <AboutSection navbarRef={stickyRef} />
      </LoginPageContainer>
    </>
  );
};

export default withRouter(Welcome);
