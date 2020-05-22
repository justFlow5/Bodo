import React from 'react';
// import { Router } from '@reach/router';

import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from '../contexts/Auth';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Dashboard from '../components/pages/Dashboard';
import Interview from '../components/pages/Interview';
import AddQuestion from '../components/pages/AddQuestionForm';
import FrontPage from '../components/pages/FrontPage';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';

export const AppRouter = () => {
  return (
    // <div>
    <AuthProvider>
      <Router>
        {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
        <PublicRoute exact path="/" component={FrontPage} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/sign-up" component={Register} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/interview" component={Interview} />
        <PrivateRoute exact path="/add-question" component={AddQuestion} />
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
