import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent } from '@material-ui/core';

import styles from './styles';

const User = ({ classes, name='' }) => {
  return <Card className={classes.root}>
    <CardContent className={classes.content}>
      <Typography variant="subtitle1" className={classes.name}>{name}</Typography>
    </CardContent>
  </Card>
}

export default compose(
  withStyles(styles, { withTheme: true }),
)(User);
