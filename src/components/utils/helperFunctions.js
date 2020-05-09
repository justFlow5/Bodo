import {
  JavaScript
} from '../../questionsCollection/Qjavascript';
import {
  CSS
} from '../../questionsCollection/Qcss';
import {
  HTML
} from '../../questionsCollection/Qhtml';
import {
  react
} from '../../questionsCollection/Qreact';

import db from '../../firebase/base';

export const validateEmail = (email) => {
  const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email);
};

export const groupBy = (OurArray, property) => {
  return OurArray.reduce((accumulator, object) => {
    const key = object[property];
    // using ternary operator to make it shorter but in this case it is not necessary as it might look complicated
    !accumulator[key] ? (accumulator[key] = []) : accumulator[key].push(object);
    return accumulator;
  }, {});
};

// export const loadStaticDataToDb = (uid) => {
//   const allStaticQuestions = [...JavaScript, ...CSS,
//     ...HTML,
//     ...react
//   ]

//   const stringifiedData = JSON.stringify(allStaticQuestions)

//   db.ref(`users/${uid}/questions`).set(stringifiedData)
// }