import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, DialogActions, DialogTitle, Button } from "@material-ui/core";

import styles from './styles';

import { selectCurrentMode } from '../../state/CurrentContext/selectors';

const Modal = ({ open, children, onCancel, onAlt, onOk, mode='' }) => {
  const title = `${mode.toUpperCase()} USER`;
  return (
    <Dialog open={open}>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={e => onCancel(e, false)} color="primary">
          Cancel
        </Button>
        <Button onClick={e => onAlt(e, false)} color="primary">
          Delete
        </Button>
        <Button onClick={e => onOk(e, true)} color="primary" autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state, ownProps) => ({
  mode: selectCurrentMode(state),
})

const mapDispatchToProps = {
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps),
)(Modal);

