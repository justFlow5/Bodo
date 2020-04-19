import React, { useContext } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';

const PublicRoute = ({ component, ...rest }: any) => {
  const { currentUser } = useContext(AuthContext);

  const RouteComponent = (props: any) =>
    !!currentUser ? (
      <Redirect to={{ pathname: '/dashboard' }} />
    ) : (
      React.createElement(component, props)
    );
  return <Route {...rest} render={RouteComponent} />;
};

export default PublicRoute;
