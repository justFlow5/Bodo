import React from 'react';
import styled from 'styled-components';
import Idea from '../../../images/frontPage/ideaTriangle.png';

const TechQuestionsCustom = styled.section``;

const TechQuestionCustomSection = ({ title, content }) => {
  return (
    <TechQuestionsCustom className="reverse">
      <img src={Idea} className="idea" />
      <div className="container idea-text">
        <h3 className="title">{title}</h3>
        <p className="content">{content}</p>
      </div>
    </TechQuestionsCustom>
  );
};
export default TechQuestionCustomSection;
