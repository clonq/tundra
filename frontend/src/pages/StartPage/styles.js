
export default theme => ({
  root: {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'hidden',
    // border: '12px solid rgba(255, 255, 255, .2)',
  },
  hero: {
    color: '#f1f1f1',
    marginTop: '10vh',
    marginBottom: '10vh',
    display: 'block',
    fontSize: '1em',
    fontWeight: 700,
    textShadow: '0 0 4px #444',
  },
  button: {
    flexGrow: 1,
    width: '60vw',
    padding: '4vw',
    margin: '4vw',
    fontWeight: 700,
    color: theme.palette.darkText,
  },
  provider: {
    background: theme.palette.provider.main,
  },
  driver: {
    background: theme.palette.driver.main,
  },
  consumer: {
    background: theme.palette.consumer.main,
  },
  ontarioTogether: {
    width: '100vw',
    position: 'absolute', left: 0, bottom: '32px',
    color: '#f1f1f1',
    background: '#444444',
    opacity: '.9',
    padding: '2vh 2vw',
  },
  copyright: {
    width: '100vw',
    color: '#fff',
    position: 'absolute', left: 0, bottom: '4px',
    textShadow: '0 0 1px #000',
  }
});
