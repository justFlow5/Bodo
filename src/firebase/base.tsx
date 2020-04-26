import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const loginWithGoogle = () => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const loginAnonimously = () => {
  return firebase.auth().signInAnonymously();
};

export const logout = () => {
  firebase.auth().signOut();
};

export { firebase, googleAuthProvider, db as default };
