import React, { useContext } from 'react';
import 'reset-css';
import NavBar from './components/Navbar';
import AddQuestionForm from './components/AddQuestionForm';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}

  body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background: #f7fbdf; */
  background: #E1ECF9;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
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
  desktop: '2560px'
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <AddQuestionForm />
    </ThemeProvider>
  );
};

export default App;
