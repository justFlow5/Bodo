import React from 'react';
import styled from 'styled-components';
import Goal from '../../../images/frontPage/goal.png';

const InterviewMode = styled.section``;

const InterviewModeSectionComponent = ({ title, content }) => {
  return (
    <InterviewMode className="reverse">
      <img src={Goal} alt="goal" />
      <div className="container interviewMode-text-container">
        <h3 className="title interviewMode-text-title">{title}</h3>
        <p className="content interviewMode-text-content">{content}</p>
      </div>
    </InterviewMode>
  );
};
export default InterviewModeSectionComponent;
