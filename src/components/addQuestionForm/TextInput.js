import React from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        marginBottom: '10px',
      },
    },
  })
);

const TextInput = ({
  singleInput,
  handleChange,
  isTechReadOnly,
  questionState,
  value,
}) => {
  console.log('questionState[singleInput]: ', isTechReadOnly());
  const getLabelCapitalized = (label) => {
    switch (label) {
      case 'text':
        return 'Question';
        break;
      case 'job':
        return 'Job';
        break;
      case 'technology':
        return 'Technology';
        break;
      case 'answer':
        return 'Answer';
        break;
    }
  };

  //   const getTypeOfTech = (typeOfTech) => {
  //     return typeOfTech === 'Other'
  //       ? questionState.newTechnology
  //       : questionState.technology;
  //   };

  //   const getValue = (typeOfInput) => {
  //     // if (typeOfInput === 'job') return questionState[typeOfInput];
  //     if (typeOfInput === 'technology') {
  //       if (value === 'Other') return questionState.newTechnology;
  //       else {
  //         return questionState.technology;
  //       }
  //     } else return questionState[typeOfInput];
  //   };

  return (
    <TextField
      name={singleInput}
      required
      variant="standard"
      label={getLabelCapitalized(singleInput)}
      multiline
      value={value}
      //   {value ? getValue(singleInput) : null}
      //    && singleInput === 'technology'
      //       ? getTypeOfTech(questionState.technology)
      //       : value
      //   }

      onChange={handleChange}
    />
  );
};

export default TextInput;
