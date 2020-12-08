import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import UserList from '../../components/UserList/view'

import styles from './styles';

const UsersPage = ({ classes, history }) => {
  return <div className={classes.root}>
    <UserList></UserList>
  </div>;
}

export default compose(
  withStyles(styles, { withTheme: true }),
)(UsersPage);
