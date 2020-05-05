import React from 'react';
import styled from 'styled-components';

import Loader from 'react-loader-spinner';

const LoaderContainer = styled.div`
  position: fixed;
  background: transparent;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;

  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
`;
const LoaderContainerInner = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Spinner = () => {
  return (
    <LoaderContainer>
      <LoaderContainerInner>
        <Loader type="ThreeDots" color="#091D34" height={80} width={80} />{' '}
      </LoaderContainerInner>
    </LoaderContainer>
  );
};

export default Spinner;
