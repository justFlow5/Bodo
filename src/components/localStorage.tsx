interface QuestionObject {
  job: string;
  technology?: string;
  question: string;
  answer: string;
  code?: string;
  known: boolean;
  id: string;
}

const addQuestion = (item: QuestionObject) => {
  let data = localStorage.getItem('questions');

  let questions = data ? JSON.parse(data) : [];

  console.log('questions', questions);
  questions.push(item);

  localStorage.setItem('questions', JSON.stringify(questions));
};

const deleteQuestion = (id: string) => {
  let data = localStorage.getItem('questions');

  let questions = data ? JSON.parse(data) : [];

  let updatedQuestions;

  if (questions.length > 0) {
    updatedQuestions = questions.filter((question: QuestionObject) => {
      return question.id !== id;
    });
  }

  localStorage.setItem('questions', JSON.stringify(updatedQuestions));
};

const getQuestions = () => {
  const data = localStorage.getItem('questions');
  return data ? JSON.parse(data) : [];
};

const isQuestion = (id: string) => {
  let questions = getQuestions();

  if (questions) {
    return questions.some((question: QuestionObject) => {
      return question.id === id;
    });
  }
};
export { addQuestion, deleteQuestion, getQuestions, isQuestion };
