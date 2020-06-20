import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

import Free from '../../../images/frontPage/free.png';

const Account = styled.section``;

const AccountSectionComponent = ({ title, content }) => {
  return (
    <Account>
      <div className="container">
        <h3 className="title">{title}</h3>
        <p className="content">{content}</p>
        <div className="button-container">
          <Link to="/sign-up">
            <LoginButton content="Create Account" />
          </Link>
        </div>
      </div>
      <img src={Free} alt="free access" />
    </Account>
  );
};
export default AccountSectionComponent;
