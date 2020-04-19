import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/base';

export const AuthContext = React.createContext({ currentUser: null });

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
