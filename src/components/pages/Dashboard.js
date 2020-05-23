import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import lodash from 'lodash';
import { uuid } from 'uuidv4';

import db from '../../firebase/base';
import { AuthContext } from '../../contexts/Auth';

import Navbar from '../navbars/Navbar';

import { staticQuestions } from '../../questionsCollection/staticQuestions';

import Burger from '../dashboard/Burger';
import SideNavbar from '../dashboard/sideNavbar/SideNavbar';
import SemiCircleContainer from '../dashboard/SemiCircleContainer';
import Title from '../dashboard/Title';
import QuestionItem from '../dashboard/QuestionItem';
import QuestionItemEdit from '../dashboard/QuestionItemEdit';
import NoCategorySelected from '../dashboard/NoCategorySelected';
import Confirmation from '../dashboard/ConfirmationInfo';

import { device } from '../mediaQueries/media';

const PageContainer = styled.div`
  width: 100%;
  position: relative;
  background: #e1ecf9;
  height: 100%;
`;

const QuestionsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 70px auto 50px;
  width: 90%;
  @media ${device.laptop} {
    width: 60%;
    margin: 200px auto 50px;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  margin: 25px auto 55px;
  @media ${device.laptop} {
    margin: 40px auto 55px;
    width: 100%;
  }
`;

const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  & .known:hover + label {
    background: #ccccff;
    & .question-number {
      color: #6666ff;
    }
  }

  & .editibleList {
    & .editibleItem-enter {
      opacity: 0;
    }

    .editibleItem-enter-active {
      opacity: 1;
      transition: all 500ms cubic-bezier(0.08, 1.17, 0.96, 0.94);
    }

    .editibleItem-exit {
      opacity: 1;
      transform: translateY(0);
    }

    .editibleItem-exit-active {
      opacity: 0;
      transform: translateY(-20%);
      transition: all 500ms cubic-bezier(0.08, 1.17, 0.96, 0.94);
    }
  }
`;

const Dashboard = () => {
  const [editMode, setEditMode] = useState(false);

  const [isSavedData, setIsSavedData] = useState(false);
  const [open, setOpen] = useState(false);

  const [category, setCategory] = useState('');

  // NUMBER OF QUESTIONS
  const [numOfTech, setNumOfTech] = useState(
    JSON.parse(localStorage.getItem('numOfTech')) || []
  );

  const [updatedNumOfTech, setUpdatedNumOfTech] = useState(
    JSON.parse(localStorage.getItem('numOfTech')) || []
  );

  // END ~~ NUMBER OF QUESTIONS

  // QUESTIONS DATA
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem('questions')) || []
  );

  const [updatedData, setUpdatedData] = useState(
    JSON.parse(localStorage.getItem('updatedQuestions')) || []
  );

  // END ~~ QUESTIONS DATA

  const { currentUser } = useContext(AuthContext);
  // console.log('currentUser: ', currentUser);

  const toggleAnswer = (e) => {
    e.target.checked = !e.target.checked;
  };

  const updateKnown = (id, technology, value) => {
    const allQuestions = JSON.parse(localStorage.getItem('questions'));
    const updatedTechQuestions = allQuestions[technology].map((question) => {
      if (question.id === id) {
        question.known = value;
        return question;
      } else return question;
    });

    allQuestions[technology] = updatedTechQuestions;

    setQuestions(allQuestions);

    // save to localStorage
    localStorage.setItem('questions', JSON.stringify(allQuestions));

    // save to database
    db.ref(`users/${currentUser.uid}/questions`).update(allQuestions);
  };

  const getNumberOfQuestions = (questionsObj) => {
    return Object.keys(questionsObj).map((tech) => {
      if (questionsObj[tech][0])
        return [tech, questionsObj[tech].length, questionsObj[tech][0].job];
      else return [tech, questionsObj[tech].length, 0];
    });
  };

  const handleEdit = () => {
    if (editMode && Object.keys(updatedData).length > 0) {
      setEditMode(true);
      // setCategory('Edit Mode');
      setQuestions(updatedData);
      localStorage.setItem('questions', JSON.stringify(updatedData));

      // HANDLE NUMBER OF QUESION UPDATE
      setNumOfTech(updatedNumOfTech);
      localStorage.setItem('numOfTech', JSON.stringify(updatedNumOfTech));
      //END ~~ HANDLE NUMBER OF QUESION UPDATE

      db.ref(`users/${currentUser.uid}/questions`).set(updatedData);
      setIsSavedData(true);
    } else {
      setEditMode(true);
      // setCategory('Edit Mode');
    }
  };

  // ######################## EDIT DATA ########################################

  const editData = (id, updatedValue, technology, typeOfField, type) => {
    const updatedTechQuestions = questions[technology].map((question) => {
      if (question.id === id) {
        if (type === 'text') question[type] = updatedValue;
        else if (type === 'answer') question[type] = updatedValue;
        else if (type === 'title') question.answer[type] = updatedValue;
        else {
          console.log('WHAAAT PAR IS IT: ', type);
          console.log('question.answer[type] : ', question.answer[type]);

          question.answer[type] = updatedValue;
        }
      }
      return question;
    });

    let dataStringified = JSON.stringify(questions);
    let dataCloned = JSON.parse(dataStringified);

    dataCloned[technology] = updatedTechQuestions;
    setQuestions(dataCloned);
    setUpdatedData(dataCloned);

    setIsSavedData(false);
  };

  const deleteQuestion = (id, technology) => {
    const updatedTechQuestions = questions[technology].filter(
      (question) => question.id !== id
    );

    // make deep copy of object
    let dataStringified = JSON.stringify(questions);
    let dataCloned = JSON.parse(dataStringified);

    dataCloned[technology] = updatedTechQuestions;

    // update number of Questions on the sidenavbar
    const categoriesBefore = getNumberOfQuestions(dataCloned);
    const categoriesUpdate = updateNumberOfQuestion(categoriesBefore);
    setNumOfTech(categoriesUpdate);
    setUpdatedNumOfTech(categoriesUpdate);
    // END ~~ update number of Questions on the sidenavbar

    setQuestions(dataCloned);
    setUpdatedData(dataCloned);

    setIsSavedData(false);
  };

  // Delete category when there are no questions

  const updateNumberOfQuestion = (arr) => {
    return arr.filter((category) => {
      if (category[1] !== 0) {
        return true;
      } else {
        // set flag to null and toggle view of the page
        setCategory('');
      }
    });
  };

  const handleLeaveEditMode = () => {
    setEditMode(false);

    setQuestions(JSON.parse(localStorage.getItem('questions')));
    setNumOfTech(JSON.parse(localStorage.getItem('numOfTech')));
  };

  // ######################## INIT ########################################

  const LoadInitialData = async () => {
    const getFlag = await db
      .ref(`users/${currentUser.uid}/staticDataStatus`)
      .once('value');

    const isInitialDataLoaded = getFlag.val();

    if (!isInitialDataLoaded) {
      // group data in firebase way
      const groupedData = lodash.groupBy([...staticQuestions], 'technology');

      // save data in runtime via hooks
      setQuestions(groupedData);

      // sava data to localStorage
      localStorage.setItem('questions', JSON.stringify(groupedData));

      // save number of questions to localStorage
      const techNumber = getNumberOfQuestions(groupedData);
      localStorage.setItem('numOfTech', JSON.stringify(techNumber));

      // save it via hook
      setNumOfTech(techNumber);

      // save data to firebase
      db.ref(`users/${currentUser.uid}/questions`).set(groupedData);

      // set flag as true -- this funtction will never run again
      db.ref(`users/${currentUser.uid}/staticDataStatus`).set(true);
    }
  };

  // ######################## END INIT ########################################

  // ######################## DATABASE DATA ########################################

  const getDataFromDb = async () => {
    const getFlag = await db
      .ref(`users/${currentUser.uid}/staticDataStatus`)
      .once('value');

    const isInitialDataLoaded = getFlag.val();

    if (isInitialDataLoaded) {
      const questions = [];
      var counter = 0;
      const questionsRef = db.ref(`users/${currentUser.uid}/questions`);
      const questionsSnapshot = await questionsRef.once('value');

      questionsSnapshot.forEach((childSnapshot) => {
        let dbQuestion = childSnapshot.val();
        counter += dbQuestion.length;
        questions.push(...dbQuestion);
      });

      if (questions.length === counter) {
        const groupedData = lodash.groupBy(questions, 'technology');

        // save data to localStorage
        localStorage.setItem('questions', JSON.stringify(groupedData));

        // save number of questions to localStorage
        const techNumber = getNumberOfQuestions(groupedData);
        localStorage.setItem('numOfTech', JSON.stringify(techNumber));

        // save it via hook
        setNumOfTech(techNumber);

        // save data to firebase
        db.ref(`users/${currentUser.uid}/questions`).set(groupedData);
      }
    }
  };

  // ########################  END /  DATABASE DATA ########################################

  useEffect(() => {
    LoadInitialData();
  }, []);

  useEffect(() => {
    getDataFromDb();
  }, []);

  return (
    <>
      {' '}
      <PageContainer>
        {' '}
        <Navbar />
        <Burger open={open} setOpen={setOpen} editMode={editMode} />{' '}
        {category && (
          <SemiCircleContainer
            open={open}
            setOpen={setOpen}
            editMode={editMode}
            category={category}
          />
        )}
        <QuestionsContainer>
          {category.length > 0 ? (
            <>
              <Title numOfTech={numOfTech} category={category} />
              <ContentContainer>
                <ContentList>
                  {' '}
                  {questions &&
                    !editMode &&
                    questions[category].map((question, id) => {
                      let newId = uuid();
                      return (
                        <QuestionItem
                          key={question.id}
                          editMode={editMode}
                          questionData={question}
                          questionId={newId}
                          iterator={id}
                          toggleAnswer={toggleAnswer}
                          updateKnown={updateKnown}
                        />
                      );
                    })}{' '}
                  {/* EDIT MODE */}
                  <TransitionGroup className="editibleList">
                    {questions &&
                      editMode &&
                      questions[category].map((question) => {
                        return (
                          // QUESTION
                          <CSSTransition
                            key={question.id}
                            timeout={500}
                            classNames="editibleItem"
                          >
                            <QuestionItemEdit
                              questionData={question}
                              editData={editData}
                              editMode={editMode}
                              deleteQuestion={deleteQuestion}
                            />
                          </CSSTransition>
                        );
                      })}{' '}
                  </TransitionGroup>{' '}
                </ContentList>{' '}
              </ContentContainer>{' '}
            </>
          ) : (
            <NoCategorySelected open={open} setOpen={setOpen} />
          )}
        </QuestionsContainer>
        <SideNavbar
          open={open}
          numOfTech={numOfTech}
          editMode={editMode}
          setEditMode={setEditMode}
          handleLeaveEditMode={handleLeaveEditMode}
          handleEdit={handleEdit}
          category={category}
          setCategory={setCategory}
        />
        <Confirmation isSavedData={isSavedData} />{' '}
      </PageContainer>{' '}
    </>
  );
};

export default Dashboard;
