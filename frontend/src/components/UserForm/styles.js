export default theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: theme.spacing(2),
    marginRight: 0,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    overflow: 'scroll',
    flexGrow: 1,
  },

  card: {
    maxWidth: 640,
  },

  header: {
    background: theme.palette.secondary.main,
    color: '#cacaca',
  },

  field: {
    flexGrow: 1,
    width: '100%',
  },

  spacer: {
    flexGrow: 1,
  },

  saveBtn: {
    margin: theme.spacing(1),
  }

});
