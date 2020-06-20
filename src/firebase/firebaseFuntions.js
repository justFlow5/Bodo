import * as firebase from 'firebase';

export const logout = () => {
  firebase.auth().signOut();
};

export const handleGoogleLogin = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleAuthProvider);
};

export const handleAnonimousLogin = () => {
  return firebase.auth().signInAnonymously();
};
