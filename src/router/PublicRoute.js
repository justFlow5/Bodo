import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';

const PublicRoute = ({ component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  const RouteComponent = (props) =>
    !!currentUser ? (
      <Redirect
        to={{
          pathname: '/dashboard',
        }}
      />
    ) : (
      React.createElement(component, props)
    );
  return <Route {...rest} render={RouteComponent} />;
};

export default PublicRoute;
