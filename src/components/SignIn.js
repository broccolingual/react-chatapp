import React, { useEffect, useState }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/broccolingual"
      target="_blank" rel="noopener"
      >
        Broccolingual
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ setName }) {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState("");
  const [isComposed, setIsComposed] = useState(false);
  console.log({disabled, string, isComposed});

  useEffect(() => {
    const disabled = string === ""
    setDisabled(disabled)
  }, [string]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nickname"
            name="name"
            autoFocus
            onChange={(e) => setString(e.target.value)}
            onKeyDown={(e) => {
              if (isComposed) return;
              
              if(e.key === "Enter"){
                setName(e.target.value)
                e.preventDefault();
              }
            }}
            onCompositionStart={() => {
              setIsComposed(true)
            }}
            onCompositionEnd={() => {
              setIsComposed(false)
            }}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={disabled}
            onClick={() => {
              setName(string)
            }}
          >
            Get Started!
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}