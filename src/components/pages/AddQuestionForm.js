import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { AuthContext } from '../../contexts/Auth';
import db from '../../firebase/base';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { styled } from '@material-ui/core/styles';
// import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';

import AcceptAlert from '../forms/Snackbar';

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

import { addQuestion, isQuestion } from '../localStorage';

import { device } from '../utils/media';
import Navbar from '../Navbar';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        marginBottom: '10px',
      },
    },
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
  overflow: hidden;
  width: 85%;
  padding: 20px 20px 10px;

  margin: 20px auto 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 12px;

  background: #d5e4f7;
  background: #e8f1fd;

  -webkit-box-shadow: 0px 0px 37px -18px rgba(19, 56, 99, 1);
  -moz-box-shadow: 0px 0px 37px -18px rgba(19, 56, 99, 1);
  box-shadow: 0px 0px 37px -18px rgba(19, 56, 99, 1);

  @media ${device.mobileL} {
    width: 75%;
  }

  @media ${device.tablet} {
    padding: 30px 60px 20px;
    width: 65%;
  }

  @media ${device.laptop} {
    width: 40%;
    margin: 80px auto 30px;
  }

  & button {
    margin-bottom: 10px;
    margin-top: 20px;
    @media ${device.laptop} {
      margin-top: 40px;
    }
  }
`;

const RadioContainer = styled.div`
margin: 15px auto 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;


  &.techs {
    & label {
      flex: 0 0 49%;
      margin: 0 auto;

      /* @media ${device.mobileS} {
        flex: 0 0 45%;
      } */
      @media (min-width: 520px) {
        flex: 0 0 30%;
      }

      @media ${device.tablet} {
        flex: 0 0 30%;
      }
    }
  }

  &:first-child {
    margin-bottom: 20px;
  }

  & label {
    
    flex: 0 0 80%;
    margin: 0 auto;
    /* @media ${device.mobileM} {
      flex: 0 0 45%;
    } */
    
    @media ${device.mobileL} {
      flex: 0 0 30%;
    }

    @media ${device.tablet} {
      flex: 0 0 30%;
    }
  }
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
  alignSelf: 'center',
});

const MyFormControlLabelTech = styled(TextField)`
  width: 100%;
`;

const MyTextField = styled(TextField)({});

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

// interface State extends SnackbarOrigin {
//   open: boolean;
// }

const AddQuestionForm = () => {
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);
  console.log('currentUser: ', currentUser);

  const [technology, setTechnology] = useState('JavaScript');
  const [newTechnology, setNewTechnology] = useState('');
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');
  const [code, setCode] = useState('');
  const [job, setJob] = useState('Frontend Developer');
  const [jobText, setJobText] = useState('');

  const [showJob, setShowJob] = useState(true);

  const [showTechField, setShowTechField] = useState(false);

  // const [open, setOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [active, setActive] = useState('');

  //   const [inputId, setInputId] = useState('');

  const toggleJob = () => {
    if (job === 'Frontend Developer' || job === 'Backend Developer')
      setShowJob(true);
    else setShowJob(false);
  };

  // const handleClose = () => {
  //   setState({ ...state, open: false });
  // };

  // const handleClick = (newState: SnackbarOrigin) => () => {
  // setState({ open: true, ...newState });
  // };

  const toggleOpen = () => {
    if (!open) setOpen(true);
    else setOpen(false);
  };

  const handleChange = (event) => {
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

  const handleJobChange = (event) => {
    setJob(event.target.value);
    if (event.target.value === 'Backend Developer') setTechnology('NodeJS');
    else setTechnology('JavaScript');
    // setTechnology('JavaScript');
  };

  const isTechReadOnly = () => {
    if (technology !== 'other') {
      return { readOnly: true };
    } else {
      return { readOnly: false };
    }
  };

  const isJobReadOnly = () => {
    if (job !== 'otherjob') {
      return { readOnly: true };
    } else {
      return { readOnly: false };
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = uuid();

    let tech = technology === 'other' ? newTechnology : technology;

    if (job !== 'otherjob') {
      // add to localStorage
      addQuestion({
        job,
        technology: tech,
        text,
        answer,
        code,
        known: false,
        id,
      });

      // add to firebase

      db.ref(`users/${currentUser.uid}/questions/${id}`).update({
        job,
        technology: tech,
        text,
        answer,
        code,
        known: false,
        id,
      });
    } else {
      addQuestion({
        job: jobText,
        text,
        answer,
        known: false,
        id,
      });

      db.ref(`users/${currentUser.uid}/questions/${id}`).update({
        job: jobText,
        text,
        answer,
        known: false,
        id,
      });
    }

    // if (isQuestion(id)) {
    setOpen(true);

    setText('');
    setAnswer('');
    setCode('');

    // }
  };

  //   useEffect(() => {
  //     if (job === 'Frontend Developer') setTechnology('JavaScript');
  //     else if (job === 'Backend Developer') setTechnology('NodeJS');
  //     console.log('technology: ', technology);
  //     console.log('job: ', job);
  //   }, [job]);

  return (
    <>
      <Navbar />
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

        <FormLabel component="legend">Choose Position</FormLabel>
        <RadioGroup
          aria-label="quiz1"
          name="quiz1"
          // defaultValue="Frontend Developer"
        >
          <RadioContainer>
            <MyFormControlLabel
              value="Frontend Developer"
              control={
                <Radio
                  color="primary"
                  checked={job === 'Frontend Developer'}
                  onChange={handleJobChange}
                />
              }
              label="Frontend Developer"
              color="primary"
            />

            <MyFormControlLabel
              value="Backend Developer"
              control={
                <Radio
                  color="primary"
                  checked={job === 'Backend Developer'}
                  onChange={handleJobChange}
                />
              }
              label="Backend Developer"
              color="primary"
            />

            <MyFormControlLabel
              value="otherjob"
              control={
                <Radio
                  color="primary"
                  checked={job === 'otherjob'}
                  onChange={handleJobChange}
                />
              }
              label="Other"
              color="primary"
            />
          </RadioContainer>
        </RadioGroup>
        {/*  */}

        {job !== 'otherjob' && (
          <FormControl component="fieldset">
            <FormLabel component="legend">Choose Technology</FormLabel>
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              defaultValue={
                job === 'Frontend Developer' ? 'JavaScript' : 'NodeJS'
              }
            >
              <RadioContainer className="techs">
                <MyFormControlLabel
                  value={job === 'Frontend Developer' ? 'JavaScript' : 'NodeJS'}
                  control={
                    <Radio
                      color="primary"
                      checked={
                        technology === 'JavaScript' || technology === 'NodeJS'
                      }
                      onChange={handleChange}
                    />
                  }
                  label={job === 'Frontend Developer' ? 'JavaScript' : 'NodeJS'}
                  color="primary"
                />
                <MyFormControlLabel
                  value={job === 'Frontend Developer' ? 'CSS' : 'PHP'}
                  control={
                    <Radio
                      color="primary"
                      checked={technology === 'CSS' || technology === 'PHP'}
                      onChange={handleChange}
                    />
                  }
                  label={job === 'Frontend Developer' ? 'CSS' : 'PHP'}
                  color="primary"
                />
                <FormControlLabel
                  value={job === 'Frontend Developer' ? 'React' : 'Ruby'}
                  control={
                    <Radio
                      color="primary"
                      checked={technology === 'React' || technology === 'Ruby'}
                      onChange={handleChange}
                    />
                  }
                  label={job === 'Frontend Developer' ? 'React' : 'Ruby'}
                />{' '}
                <FormControlLabel
                  value={job === 'Frontend Developer' ? 'Redux' : 'Python'}
                  control={
                    <Radio
                      color="primary"
                      checked={
                        technology === 'Redux' || technology === 'Python'
                      }
                      onChange={handleChange}
                    />
                  }
                  label={job === 'Frontend Developer' ? 'Redux' : 'Python'}
                />
                <FormControlLabel
                  value="GIT"
                  control={
                    <Radio
                      color="primary"
                      checked={technology === 'GIT'}
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
        )}
        {/*  */}
        <FieldsContainer>
          <MyTextField
            required
            variant="standard"
            label="Job"
            multiline
            value={
              job === 'Frontend Developer' || job === 'Backend Developer'
                ? job
                : jobText
            }
            onChange={(e) => setJobText(e.target.value)}
            InputProps={isJobReadOnly()}
          />

          {job !== 'otherjob' && (
            <MyFormControlLabelTech
              variant="standard"
              label="Technology"
              value={technology === 'other' ? newTechnology : technology}
              onChange={(e) => setNewTechnology(e.target.value)}
              required
              autoFocus
              InputProps={isTechReadOnly()}
            ></MyFormControlLabelTech>
          )}

          <MyTextField
            variant="standard"
            label="Question"
            multiline
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />

          <MyTextField
            variant="standard"
            label="Answer"
            multiline
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          {job !== 'otherjob' && (
            <MyTextField
              variant="standard"
              label="Code"
              multiline
              rows="4"
              rowsMax="6"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          )}
        </FieldsContainer>

        <SaveButton
          variant="contained"
          color="primary"
          size="large"
          // className={classes.button}
          startIcon={<SaveIcon />}
          type="submit"
        >
          Save
        </SaveButton>

        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Question added successfully!
        </Alert>
      </Snackbar> */}

        <AcceptAlert open={open} setOpen={setOpen} toggleOpen={toggleOpen} />
      </FormContainer>
    </>
  );
};

export default AddQuestionForm;
