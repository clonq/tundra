import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const StartPage = ({ classes, history }) => {
  return <div className={classes.root}>
  </div>;
}

export default compose(
  withStyles(styles, { withTheme: true }),
)(StartPage);
