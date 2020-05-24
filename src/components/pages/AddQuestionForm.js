import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { uuid } from 'uuidv4';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';

import { AuthContext } from '../../contexts/Auth';
import db from '../../firebase/base';

import Navbar from '../navbars/Navbar';
import JobRadioButton from '../addQuestionForm/JobRadioButton';
import TechRadioButton from '../addQuestionForm/TechRadioButton';
import SaveButton from '../addQuestionForm/SaveButton';
import AcceptAlert from '../forms/Snackbar';
import Header from '../addQuestionForm/Header';

import { addQuestion } from '../localStorage';
import { saveNumbers } from '../addQuestionForm/helperFunctions';

import { device } from '../mediaQueries/media';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        marginBottom: '10px',
      },
    },
  })
);

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

const AddQuestionForm = () => {
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);

  const [technology, setTechnology] = useState('JavaScript');
  const [newTechnology, setNewTechnology] = useState('');
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');
  const [job, setJob] = useState('Frontend Developer');
  const [open, setOpen] = useState(false);

  const technologies = [
    ['JavaScript', 'NodeJS'],
    ['CSS', 'PHP'],
    ['React', 'Ruby'],
    ['Redux', 'Python'],
    ['GIT', 'GIT'],
    ['Other', 'Other'],
  ];

  const jobs = ['Frontend Developer', 'Backend Developer', 'HR'];

  const typeOfTextInput = ['Job', 'Technology', 'Question', 'Answer'];

  const handleJobChange = (event) => {
    setJob(event.target.value);
    if (event.target.value === 'Backend Developer') setTechnology('NodeJS');
    else setTechnology('JavaScript');
    // setTechnology('JavaScript');
  };

  const isTechReadOnly = () => {
    if (technology !== 'Other') {
      return { readOnly: true };
    } else {
      return { readOnly: false };
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = uuid();

    let tech = technology === 'Other' ? newTechnology : technology;

    if (job !== 'HR') {
      const dataLoad = {
        job,
        technology: tech,
        text,
        answer,
        known: false,
        id,
      };

      // add to localStorage
      addQuestion(dataLoad);

      // number of questions:
      saveNumbers();

      // add to firebase

      const dbLoad = JSON.parse(localStorage.getItem('questions'));
      const dbLoadTech = dbLoad[tech];
      const upData = { ...dbLoadTech };
      dbLoad[tech] = upData;

      db.ref(`users/${currentUser.uid}/questions`).set(dbLoad);
      db.ref(`users/${currentUser.uid}/staticDataStatus`).set(true);
    } else {
      const newHr = {
        job: 'Other',
        technology: 'HR',
        text,
        answer,
        known: false,
        id,
      };
      addQuestion(newHr);
      saveNumbers();
      const allQ = JSON.parse(localStorage.getItem('questions'));
      const currentHR = allQ.HR;
      const upDateHR = [...currentHR, newHr];

      // save number of questions

      db.ref(`users/${currentUser.uid}/questions/HR`).set(upDateHR);
      db.ref(`users/${currentUser.uid}/staticDataStatus`).set(true);
    }

    setOpen(true);
    setText('');
    setAnswer('');
  };

  return (
    <>
      <Navbar />
      <FormContainer
        onSubmit={onSubmit}
        autoComplete="off"
        className={classes.root}
      >
        <Header content="Create New Question" />
        <FormLabel component="legend">Choose Position</FormLabel>

        <RadioGroup aria-label="job" name="job">
          <RadioContainer>
            {jobs.map((singleJob) => (
              <JobRadioButton
                singleJob={singleJob}
                handleJobChange={handleJobChange}
                job={job}
              />
            ))}
          </RadioContainer>
        </RadioGroup>
        {/*  */}

        {job !== 'HR' && (
          <FormControl component="fieldset">
            <FormLabel component="legend">Choose Technology</FormLabel>
            <RadioGroup
              aria-label="techs"
              name="techs"
              defaultValue={
                job === 'Frontend Developer' ? 'JavaScript' : 'NodeJS'
              }
            >
              <RadioContainer className="techs">
                {technologies.map((tech) => (
                  <TechRadioButton
                    frontendTech={tech[0]}
                    backendTech={tech[1]}
                    job={job}
                    technology={technology}
                    setTechnology={setTechnology}
                  />
                ))}
              </RadioContainer>
            </RadioGroup>
          </FormControl>
        )}
        {/*  */}
        <FieldsContainer>
          {job !== 'HR' && (
            <>
              <TextField
                required
                variant="standard"
                label="Job"
                multiline
                value={job}
                InputProps={true}
              />

              <TextField
                variant="standard"
                label="Technology"
                value={technology === 'Other' ? newTechnology : technology}
                onChange={(e) => setNewTechnology(e.target.value)}
                required
                autoFocus
                InputProps={isTechReadOnly()}
              ></TextField>
            </>
          )}

          <TextField
            variant="standard"
            label="Question"
            multiline
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />

          <TextField
            variant="standard"
            label="Answer"
            multiline
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </FieldsContainer>

        <SaveButton content="SAVE" />
        <AcceptAlert open={open} setOpen={setOpen} setOpen={setOpen} />
      </FormContainer>
    </>
  );
};

export default AddQuestionForm;
