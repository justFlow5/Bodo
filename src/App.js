import React, { useContext } from 'react';
import 'reset-css';
// import NavBar from './components/Navbar';
// import AddQuestionForm from './components/pages/AddQuestionForm';
import AppRouter from './AppRouter';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  border: 0;
  scroll-behavior: smooth;
}

html {
  height: 100%;
  scroll-behavior: smooth;
}

  body {
    margin: 0;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Montserrat', sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* background: #f7fbdf; */
  /* background: #E1ECF9; */
  /* background: #acccf1; */
  background: #e1ecf9;
  height: 100%;
  position: relative;
  }

#root {
  height: 100%;
  position: relative;

}
  

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
}

`;

const theme = {
  blueOne: '#E1ECF9',
  blueTwo: ' #609CE1',
  blueThree: '#236AB9',
  blueFour: '#133863',
  blueFife: '#091D34',

  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
