import React, { Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
// import StartPage from './StartPage/view';
import UsersPage from './UsersPage/view';

export const Routes = () => (
  <Fragment>
    <Route exact path="/" component={UsersPage} />
  </Fragment>
)
export default withRouter(Routes);
