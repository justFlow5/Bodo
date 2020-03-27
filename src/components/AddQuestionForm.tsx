import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { styled } from '@material-ui/core/styles';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

//

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

import { uuid } from 'uuidv4';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { addQuestion, isQuestion } from './localStorage';

import { device } from './utils/media';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        marginBottom: '10px'
        // width: '25ch'
      }
    }
  })
);

const Header = styled.h3`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: #236ab9;
  text-align: center;
  margin-bottom: 40px;
`;

const FormContainer = styled.form`
  /* margin-top: 80px; */
  overflow: hidden;

  width: 75%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  /* border-radius: 12px;
  background: #acccf1;
  padding: 50px 60px;
  -webkit-box-shadow: 0px 0px 37px -18px rgba(19, 56, 99, 1);
  -moz-box-shadow: 0px 0px 37px -18px rgba(19, 56, 99, 1);
  box-shadow: 0px 0px 37px -18px rgba(19, 56, 99, 1); */

  @media ${device.laptop} {
    width: 40%;
    margin: 80px auto;
  }

  & button {
    margin-bottom: 60px;
    margin-top: 20px;
    @media ${device.laptop} {
      margin-top: 40px;
      margin-bottom: unset;
    }
  }
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  /* max-width: 500px; */
  flex-wrap: wrap;
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MyFormControl = styled(FormControl)({});

const MyInputLabel = styled(InputLabel)({});

const MyInput = styled(Input)({ marginBottom: '10px' });

const SaveButton = styled(Button)({
  //   marginTop: '25px',
  width: '250px',
  alignSelf: 'center'
});

// const MyFormControlLabel = styled(FormControlLabel)({

// });
// const MyFormControlLabelTech = styled(TextField)({
//   width: '40%',
//   margin: '0 auto',
//   alignSelf: 'center'
// });

const MyFormControlLabelTech = styled(TextField)`
  width: 100%;

  @media ${device.laptop} {
    width: 40%;
    margin: 0 auto;
    align-self: center;
  }
`;

const MyTextField = styled(TextField)({
  //   marginBottom: '30px'
});
// const MyFormControlLabelTech = styled(FormControlLabel)`
//   width: 20%;
//   margin: 0 auto;
// `;

const MyFormControlLabel = styled(FormControlLabel)`
  &.tech {
    opacity: 0;
    width: 20%;
    margin: 0 auto;
    transition: opacity 0.5s ease-in-out;

    &.active {
      opacity: 1;
      width: 20%;
      margin: 0 auto;
    }
  }
`;

interface State extends SnackbarOrigin {
  open: boolean;
}

const AddQuestionForm: React.FC = () => {
  const classes = useStyles();

  const [technology, setTechnology] = useState('javascript');
  const [newTechnology, setNewTechnology] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [code, setCode] = useState('');

  const [isError, setIsError] = useState(true);

  const [showTechField, setShowTechField] = useState(false);

  //   const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>({
    open: false,
    vertical: 'bottom',
    horizontal: 'right'
  });

  const { vertical, horizontal, open } = state;

  const [active, setActive] = useState('');

  //   const [inputId, setInputId] = useState('');

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleClick = (newState: SnackbarOrigin) => () => {
    // setState({ open: true, ...newState });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTechnology(event.target.value);

    if (event.target.value === 'other') {
      setShowTechField(true);
      setActive('active');
      //   setTechnology(newTechnology);
    } else {
      setShowTechField(false);
      setActive('');
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = uuid();

    let tech = technology === 'other' ? newTechnology : technology;
    // localStorage.setItem(
    //   'questions',
    //   JSON.stringify({
    //     technology: tech,
    //     question,
    //     answer,
    //     code,
    //     known: false,
    //     id
    //   })
    // );

    addQuestion({
      technology: tech,
      question,
      answer,
      code,
      known: false,
      id
    });

    if (isQuestion(id)) {
      setState({ ...state, open: true });
      //   handleClose();
      // setChecked('');
      setNewTechnology('');
      setQuestion('');
      setAnswer('');
      setCode('');
    }
  };

  //   useEffect(() => {
  //     console.log('checked: ', checked);
  //   }, [checked]);

  return (
    <FormContainer
      onSubmit={onSubmit}
      autoComplete="off"
      className={classes.root}
    >
      {/* <FormControlLabel
        control={<Checkbox name="checkedC" />}
        label="Uncontrolled"
      /> */}
      <Header>Create New Question</Header>

      {/* */}

      <FormControl component="fieldset">
        <FormLabel component="legend">Choose technology</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" defaultValue="javascript">
          <RadioContainer>
            <MyFormControlLabel
              value="javascript"
              control={
                <Radio
                  color="primary"
                  checked={technology === 'javascript'}
                  onChange={handleChange}
                />
              }
              label="JavaScript"
              color="primary"
            />
            <MyFormControlLabel
              value="css"
              control={
                <Radio
                  color="primary"
                  checked={technology === 'css'}
                  onChange={handleChange}
                />
              }
              label="CSS"
              color="primary"
            />
            <FormControlLabel
              value="react"
              control={
                <Radio
                  color="primary"
                  checked={technology === 'react'}
                  onChange={handleChange}
                />
              }
              label="React"
            />{' '}
            <FormControlLabel
              value="redux"
              control={
                <Radio
                  color="primary"
                  checked={technology === 'redux'}
                  onChange={handleChange}
                />
              }
              label="Redux"
            />
            <FormControlLabel
              value="git"
              control={
                <Radio
                  color="primary"
                  checked={technology === 'git'}
                  onChange={handleChange}
                />
              }
              label="GIT"
            />
            <MyFormControlLabel
              value="other"
              control={
                <Radio
                  color="primary"
                  checked={technology === 'other'}
                  onChange={handleChange}
                />
              }
              label="Other"
              color="primary"
            />
          </RadioContainer>
        </RadioGroup>
      </FormControl>

      {/*  */}
      <FieldsContainer>
        {showTechField && (
          <MyFormControlLabelTech
            variant="standard"
            label="Technology"
            value={newTechnology}
            onChange={e => setNewTechnology(e.target.value)}
            required
          ></MyFormControlLabelTech>
        )}

        <MyTextField
          variant="standard"
          label="Question"
          multiline
          value={question}
          onChange={e => setQuestion(e.target.value)}
          required
        />

        <MyTextField
          variant="standard"
          label="Answer"
          multiline
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          required
        />

        <MyTextField
          variant="standard"
          label="Code"
          multiline
          rows="4"
          rowsMax="6"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
      </FieldsContainer>

      <SaveButton
        variant="contained"
        color="primary"
        size="large"
        // className={classes.button}
        startIcon={<SaveIcon />}
        type="submit"
        onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}
      >
        Save
      </SaveButton>

      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Question added successfully!
        </Alert>
      </Snackbar> */}

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
        // message="Question added successfully!"
        autoHideDuration={6000}
      >
        <Alert color="info" variant="filled">
          Question added successfully!
        </Alert>
      </Snackbar>
    </FormContainer>
  );
};

export default AddQuestionForm;
