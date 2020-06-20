import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';

const PrivateRoute = ({ component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  const RouteComponent = () =>
    !!currentUser ? (
      React.createElement(component)
    ) : (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  return <Route {...rest} render={RouteComponent} />;
};

export default PrivateRoute;
