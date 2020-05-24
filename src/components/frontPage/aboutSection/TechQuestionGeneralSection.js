import React from 'react';
import styled from 'styled-components';
import { device } from '../../mediaQueries/media';

import Database from '../../../images/frontPage/database.png';

const TechQuestionsGeneral = styled.section`
  justify-content: space-between;
  & > .container {
    @media ${device.tablet} {
      margin-right: 30px;
    }
    @media ${device.laptop} {
      margin-right: 150px;
    }
  }
`;

const TechQuestionGeneralSectionComponent = ({ navbarRef, title, content }) => {
  return (
    <TechQuestionsGeneral>
      <div className="container techQuestionsDatabase-text-container">
        <h3 className="title techQuestionsDatabase-text-title">{title}</h3>
        <p
          className="content techQuestionsDatabase-text-content"
          ref={navbarRef}
        >
          {content}
        </p>
      </div>
      <img src={Database} alt="database" />
    </TechQuestionsGeneral>
  );
};
export default TechQuestionGeneralSectionComponent;
