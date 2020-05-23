import React from 'react';
import styled, { keyframes } from 'styled-components';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const SaveButton = styled(Button)({
  //   marginTop: '25px',
  width: '250px',
  alignSelf: 'center',
});

const SaveButtonComponent = ({ content }) => {
  return (
    <SaveButton
      variant="contained"
      color="primary"
      size="large"
      startIcon={<SaveIcon />}
      type="submit"
    >
      {content}
    </SaveButton>
  );
};

export default SaveButtonComponent;
