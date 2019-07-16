import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  container: {
    width: '100wv',
    height: '100wh',
    background: '#607d8b66',
  },
  form: {
    background: 'aliceblue',
    maxWidth: '350px',
    padding: '.5em  3em 2em',
    margin: '25vh auto',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: '5px',
  },
  title: {
    textAlign: 'center',
  },
  button: {
    marginTop: '1.5em',
  },
}));

export default function LoginPage () {
  const classes = useStyles ();
  const [values, setValues] = React.useState ({
    email: '',
    password: '',
  });

  const handleChange = name => event => {
    setValues ({...values, [name]: event.target.value});
  };

  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off">
        <h2 className={classes.title}>Login</h2>
        <TextField
          label="Email"
          value={values.email}
          fullWidth
          type="email"
          onChange={handleChange ('email')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          value={values.password}
          fullWidth
          type="password"
          onChange={handleChange ('password')}
          margin="normal"
          variant="outlined"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          login
        </Button>
      </form>
    </div>
  );
}
