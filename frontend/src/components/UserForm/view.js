import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';

import { selectCurrentUser } from '../../state/CurrentContext/selectors'
import { updateCurrentUser } from '../../state/CurrentContext/actions'
import styles from './styles';

const UserForm = ({ classes, updateCurrentUser, user = {} }) => {

  const [firstName, setFirstname] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const refreshFirstName = e => {
    const firstName = e.target.value;
    setFirstname(firstName);
    updateCurrentUser({firstName, lastName})
  }

  const refreshLastName = e => {
    const lastName = e.target.value;
    setLastName(lastName);
    updateCurrentUser({ firstName, lastName })
  }

  return (
    <div className={classes.root}>
      <div elevation={3} className={classes.content}>
        <form noValidate autoComplete="off" className={classes.form}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField label="Firstname" value={firstName} className={classes.input} onChange={refreshFirstName} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Lastname" type="lastName" value={lastName} className={classes.input} onChange={refreshLastName} />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: selectCurrentUser(state),
})

const mapDispatchToProps = {
  updateCurrentUser
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps),
)(UserForm);
