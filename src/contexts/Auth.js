import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/base';
import Spinner from '../components/loader/Loader';

export const AuthContext = React.createContext({
  currentUser: null,
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {' '}
      {children}{' '}
    </AuthContext.Provider>
  );
};
