const addQuestion = (item) => {
  let data = localStorage.getItem('questions');

  let questions = data ? JSON.parse(data) : {};
  let key = item.technology

  if (questions[key]) {
    questions[key] = [...questions[key], item]
    console.log('first loop')
  } else {
    console.log('seconf loop')
    questions[key] = [item]
  }

  // // if (questions[key]) {}
  // let updatedData = {
  //   ...questions[key],

  //   item

  // }

  // questions[key] = questions[key] ? updatedData : item

  localStorage.setItem('questions', JSON.stringify(questions));
};

const deleteQuestion = (id) => {
  let data = localStorage.getItem('questions');

  let questions = data ? JSON.parse(data) : {};

  let updatedQuestions;

  if (questions.length > 0) {
    updatedQuestions = questions.filter((question) => {
      return question.id !== id;
    });
  }

  localStorage.setItem('questions', JSON.stringify(updatedQuestions));
};

const getQuestions = () => {
  const data = localStorage.getItem('questions');
  return data ? JSON.parse(data) : {};
};

const isQuestion = (id) => {
  let questions = getQuestions();

  if (questions) {
    return questions.some((question) => {
      return question.id === id;
    });
  }
};
export {
  addQuestion,
  deleteQuestion,
  getQuestions,
  isQuestion
};