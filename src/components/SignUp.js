import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveUser } from '../modules/signup';
import {
  Container,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 80,
  },
  card: {
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%',
    },
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4),
  },
  button: {
    display: 'flex',
    margin: '0 auto',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    first_name: '',
    post_code: '',
    email_address: '',
    phone_number: '',
  });

  const [status, setStatus] = useState(true);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (
      user.first_name.length > 0 ||
      user.post_code.length > 0 ||
      user.email_address.length > 0 ||
      user.phone_number.length > 0
    ) {
      dispatch(saveUser(user));
      history.push('/select-grid');
    } else {
      setStatus(false);
    }
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="h2" color="textPrimary">
            Sign Up
          </Typography>
          <TextField
            fullWidth
            label="First Name"
            margin="normal"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
            type="text"
            variant="outlined"
          />
          {!status && user.first_name.length === 0 ? (
            <Typography color="error">This field is required!</Typography>
          ) : null}
          <TextField
            fullWidth
            label="Post Code"
            margin="normal"
            name="post_code"
            value={user.post_code}
            onChange={handleChange}
            type="number"
            variant="outlined"
          />
          {!status && user.post_code.length === 0 ? (
            <Typography color="error">This field is required!</Typography>
          ) : null}
          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            name="email_address"
            value={user.email_address}
            onChange={handleChange}
            type="email"
            variant="outlined"
          />
          {!status && user.email_address.length === 0 ? (
            <Typography color="error">This field is required!</Typography>
          ) : null}
          <TextField
            fullWidth
            label="Phone Number"
            margin="normal"
            name="phone_number"
            value={user.phone_number}
            onChange={handleChange}
            type="number"
            variant="outlined"
          />
          {!status && user.phone_number.length === 0 ? (
            <Typography color="error">This field is required!</Typography>
          ) : null}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
