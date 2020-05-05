import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';

// const PrivateRoute: React.FC = ({
//   component: RouteComponent,
//   ...rest
// }: any) => {
//   const { currentUser } = useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render={routeProps =>
//         !!currentUser ? (
//           <RouteComponent {...routeProps} />
//         ) : (
//           <Redirect to={'/login'} />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;

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
  // return (
  //   <Route
  //     {...rest}
  //     render={routeProps =>
  //       !!currentUser ? (
  //         <RouteComponent {...routeProps} />
  //       ) : (
  //         <Redirect to={'/login'} />
  //       )
  //     }
  //   />
  // );
};

export default PrivateRoute;
