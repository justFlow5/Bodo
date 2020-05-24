import React from 'react';
import styled from 'styled-components';
import HRquestion from '../../../images/frontPage/hrQuestion.png';

const HrQuestions = styled.section`
  flex-direction: column;
  align-items: center;
`;

const HrQuestionSectionComponent = ({ title, content }) => {
  return (
    <HrQuestions className="hrSection">
      <div className="container hr">
        <h3 className="title hrQuestions-text-title">{title}</h3>
        <p className="content hrQuestions-text-content">{content}</p>
      </div>
      <img src={HRquestion} className="hr" />
    </HrQuestions>
  );
};
export default HrQuestionSectionComponent;
