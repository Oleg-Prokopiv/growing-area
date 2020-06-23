import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { formatPosition } from '../modules/image';
import { formatPos } from '../containers/Move';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    width: '40%',
    minHeight: '80%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 150,
  },
  grid: {
    marginTop: 50,
  },
  link: {
    textDecoration: 'none',
  },
}));

export default function SelectGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const formatImg = (size) => {
    dispatch(formatPosition());
    formatPos(size);
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h2" align="center">
        How many people are you growing for?
      </Typography>
      <Grid container className={classes.grid}>
        <Grid item xs={6} sm={2}>
          <Link
            to={{ pathname: '/main', state: { size: 1 } }}
            className={classes.link}
          >
            <Typography
              variant="h1"
              color="error"
              onClick={() => formatImg(200)}
              align="center"
            >
              1
            </Typography>
            <Typography variant="h6" color="primary" align="center">
              0.5sqm
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Link
            to={{ pathname: '/main', state: { size: 2 } }}
            className={classes.link}
          >
            <Typography
              variant="h1"
              color="error"
              onClick={() => formatImg(400)}
              align="center"
            >
              2
            </Typography>
            <Typography variant="h6" color="primary" align="center">
              1sqm
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Link
            to={{ pathname: '/main', state: { size: 3 } }}
            className={classes.link}
          >
            <Typography
              variant="h1"
              color="error"
              onClick={() => formatImg(600)}
              align="center"
            >
              3
            </Typography>
            <Typography variant="h6" color="primary" align="center">
              1.5sqm
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Link
            to={{ pathname: '/main', state: { size: 4 } }}
            className={classes.link}
          >
            <Typography
              variant="h1"
              color="error"
              onClick={() => formatImg(800)}
              align="center"
            >
              4
            </Typography>
            <Typography variant="h6" color="primary" align="center">
              2sqm
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Link
            to={{ pathname: '/main', state: { size: 5 } }}
            className={classes.link}
          >
            <Typography
              variant="h1"
              color="error"
              onClick={() => formatImg(1000)}
              align="center"
            >
              5
            </Typography>
            <Typography variant="h6" color="primary" align="center">
              2.5sqm
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Link
            to={{ pathname: '/main', state: { size: 6 } }}
            className={classes.link}
          >
            <Typography
              variant="h1"
              color="error"
              onClick={() => formatImg(1200)}
              align="center"
            >
              6
            </Typography>
            <Typography variant="h6" color="primary" align="center">
              3sqm
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
