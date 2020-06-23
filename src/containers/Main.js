import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import { addPosition, updatePosition } from '../modules/image';
import { setSize } from '../modules/size';
import { observe } from './Move';
import Board from './Board';
import Slider from './Slider';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 'none',
  },
  grid: {
    marginTop: 50,
  },
}));

const formatPos = [
  {
    name: 'Lettuce',
    url: '/imgs/lettuce.png',
    size: 15,
    cropX: null,
    cropY: null,
  },
  {
    name: 'Coriander',
    url: '/imgs/corriander.png',
    size: 12,
    cropX: null,
    cropY: null,
  },
  {
    name: 'Capsicum',
    url: '/imgs/capsicum.png',
    size: 15,
    cropX: null,
    cropY: null,
  },
  {
    name: 'Tomatoes',
    url: '/imgs/tomato.png',
    size: 15,
    cropX: null,
    cropY: null,
  },
  {
    name: 'Raspberries',
    url: '/imgs/raspberry.png',
    size: 12,
    cropX: null,
    cropY: null,
  },
  {
    name: 'Strawberries',
    url: '/imgs/strawberry.png',
    size: 12,
    cropX: null,
    cropY: null,
  },
  {
    name: 'Spinach',
    url: '/imgs/spinach.png',
    size: 15,
    cropX: null,
    cropY: null,
  },
  {
    name: 'Basil',
    url: '/imgs/basil.png',
    size: 10,
    cropX: null,
    cropY: null,
  },
  {
    name: 'Kale',
    url: '/imgs/kale.png',
    size: 15,
    cropX: null,
    cropY: null,
  },
  {
    name: 'Chives',
    url: '/imgs/chives.png',
    size: 10,
    cropX: null,
    cropY: null,
  },
];

export const Main = () => {
  const imgs = useSelector((state) => state.image);
  const size = useSelector((state) => state.size.size);
  const classes = useStyles();
  const props = useLocation();
  const dispatch = useDispatch();
  const [cropsPos, setCropsPos] = useState([]);

  useEffect(() => {
    observe((newPos) => {
      if (newPos.name) {
        if (newPos.status === 'new') {
          dispatch(addPosition(newPos));
        } else if (newPos.status === 'edit') {
          dispatch(updatePosition(newPos));
        }
      }
    });

    if (props.state.size === 1) dispatch(setSize(200));
    else if (props.state.size === 2) dispatch(setSize(400));
    else if (props.state.size === 3) dispatch(setSize(600));
    else if (props.state.size === 4) dispatch(setSize(800));
    else if (props.state.size === 5) dispatch(setSize(1000));
    else if (props.state.size === 6) dispatch(setSize(1200));
    else dispatch(setSize(200));
  }, [cropsPos, props]);

  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={11}
          style={{
            marginTop: size === 1000 ? '10vh' : size === 1200 ? '15vh' : '2vh',
            height: '90vh',
          }}
        >
          <Board CropsPosition={imgs} />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Slider imgs={formatPos} />
        </Grid>
      </Grid>
    </Container>
  );
};
