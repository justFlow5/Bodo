import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const TextField = ({ label, multiline, required, value }) => {
  return (
    <TextField>
      variant="standard" label={label}
      multiline required value={value}
      onChange={(e) => setJobText(e.target.value)}
      InputProps={isJobReadOnly()}
    </TextField>
  );
};

export default TextField;
