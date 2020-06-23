import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 730,
    margin: '0 auto',
    marginTop: 200,
  },
  title: {
    marginBottom: 30,
  },
  content: {
    marginBottom: 20,
  },
}));

export default function Message() {
  const classes = useStyles();

  const userName = useSelector((state) => state.signup.first_name);

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h2" className={classes.title}>
        Thanks Message
      </Typography>
      <Typography variant="h5" component="h2" className={classes.content}>
        Thanks {userName},
      </Typography>
      <Typography variant="h5" className={classes.content}>
        Our farms aren’t up and running yet – but they will be soon!
      </Typography>
      <Typography variant="h5" className={classes.content}>
        We’ve recorded your details and farm layout and will let you know as
        soon as we’re live!
      </Typography>
      <Typography variant="h5" className={classes.content}>
        Take care,
        <br />
        Dryad
      </Typography>
    </div>
  );
}
