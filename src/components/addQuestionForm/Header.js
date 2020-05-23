import React from 'react';
import styled from 'styled-components';

const Header = styled.h3`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: #236ab9;
  text-align: center;
  margin-bottom: 40px;
`;

const HeaderComponent = ({ content }) => {
  return <Header>{content}</Header>;
};

export default HeaderComponent;
