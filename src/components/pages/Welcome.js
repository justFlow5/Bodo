import React, {
  useState,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { debounce } from 'lodash';

import MainNavbar from '../../components/header/Main-Navbar';

import styled from 'styled-components';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../../contexts/Auth';
import {
  firebase,
  googleAuthProvider,
  loginAnonimously,
} from '../../firebase/base';

const LoginPageContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background: #396afc;
  background: -webkit-linear-gradient(to right, #2948ff, #396afc);
  background: linear-gradient(to right, #2948ff, #396afc);

  & .filler {
    display: block;

    margin: 50px 300px;
  }
`;

const Welcome = ({ history }) => {
  const [isSticky, setSticky] = useState(false);

  const stickyRef = useRef(null);

  // const handler = useCallback(debounce(handleScroll, 20), []);

  const handleScroll = () => {
    if (stickyRef.current) {
      console.log('window.pageYOffset:', window.pageYOffset);
      console.log(
        'stickyRef.current.getBoundingClientRect().bottom:',
        stickyRef.current.getBoundingClientRect().bottom
      );

      window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
        ? setSticky(true)
        : setSticky(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // const debounce = (func, wait = 20, immediate = true) => {
  //   let timeOut;
  //   return () => {
  //     let context = this,
  //       args = arguments;
  //     const later = () => {
  //       timeOut = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     const callNow = immediate && !timeOut;
  //     clearTimeout(timeOut);
  //     timeOut = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  // window.addEventListener('scroll', debounce(handleScroll));
  // window.addEventListener('scroll', handler);
  window.addEventListener('scroll', handleScroll);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  //   const { currentUser } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };

  return (
    <>
      <MainNavbar sticky={isSticky} />
      <LoginPageContainer>
        <div style={{ marginTop: '100px' }}>
          <h1>Log in</h1>
          <form onSubmit={handleLogin}>
            <label>
              Email
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <button type="submit">Log in</button>
          </form>

          <button onClick={handleGoogleLogin}>LOGIN with GOOGLE</button>
          <button onClick={loginAnonimously}>LOGIN Anonimously</button>

          <div className="filler">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsumorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </div>
          <div className="filler">
            {' '}
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsumorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </div>

          <div className="filler" ref={stickyRef}>
            {' '}
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsumorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </div>

          <div className="filler">
            {' '}
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsumorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </div>
          <div className="filler">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsumorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </div>
        </div>
      </LoginPageContainer>
    </>
  );
};

export default withRouter(Welcome);
