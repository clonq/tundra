export default theme => ({
  root: {
  },

  title: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginBottom: 0,
  },

  paper: {
    ...theme.mixins.gutters(),
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    overflow: 'scroll',
  },

  name: {
    width: '90%',
  }
});
