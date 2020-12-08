import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Paper, CardActions, Button, Divider } from '@material-ui/core';
// import User from './User/view';
import Modal from '../Modal/view';

import styles from './styles';
import UserForm from '../UserForm/view';
import { saveUser, deleteUser } from '../UserForm/actions';
import { fetchUsers } from '../UserList/actions';

import { setCurrentUser, setCurrentMode } from '../../state/CurrentContext/actions';
import { selectCurrentUser } from '../../state/CurrentContext/selectors';
import { selectAllUsers } from './selectors';

const UserList = ({ classes, fetchUsers, users, saveUser, deleteUser, setCurrentMode, setCurrentUser, currentUser }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const onSave = () => {
    setDialogOpen(false);
    saveUser(currentUser);
  }

  const onDelete = () => {
    setDialogOpen(false);
    deleteUser(currentUser);
  }

  const onCancel = () => {
    setDialogOpen(false)
  }

  const getFullName = user => {
    return user ? `${user.firstName} ${user.lastName}` : '';
  }

  const selectUser = (index, selectedId) => {
    setCurrentMode("edit");
    setCurrentUser(users.find(({id}) => id === selectedId));
    setDialogOpen(true);
  }

  const newUser = () => {
    setCurrentMode("create");
    setCurrentUser({});
    setDialogOpen(true);
  }

  return <div className={classes.root}>
      <Paper className={classes.paper}>
        {!users.length && <>
          There are no users
        </>}
        <List>
          {users.map((user, index) => 
            <ListItem button key={user.id} onClick={e => selectUser(index, user.id)} >
              <ListItemText primary={`${index + 1}.`} />
              <ListItemText primary={getFullName(user)} className={classes.name} />
            </ListItem>
          )}
        </List>
        <Divider/>
        <CardActions>
          <span className={classes.spacer} />
          <Button  onClick={e => newUser()} size="small" color="primary">New User</Button>
        </CardActions>
      </Paper>
      <Modal open={dialogOpen} onOk={onSave} onAlt={onDelete} onCancel={onCancel}>
        <UserForm/>
      </Modal>
    </div>

}

const mapStateToProps = (state, ownProps) => ({
  users: selectAllUsers(state),
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = {
  fetchUsers,
  setCurrentMode,
  setCurrentUser,
  saveUser,
  deleteUser,
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps),
)(UserList);
