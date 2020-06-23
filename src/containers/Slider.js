import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Box } from '../components/Box';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#a9d18e',
    width: '100%',
    marginLeft: -1,
    paddingLeft: 25,
  },
}));

export default function Slider({ imgs, size }) {
  const classes = useStyles();
  const [images, setImages] = useState(imgs);

  const imgsUp = () => {
    const top = images[0];
    let upArr = images.filter((_, index) => index);
    upArr.push(top);
    setImages(upArr);
  };

  const imgsDown = () => {
    const down = images[images.length - 1];
    let downArr = images.filter((image) => image.name !== down.name);
    downArr.splice(0, 0, down);
    setImages(downArr);
  };

  return (
    <ul>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<ExpandLess className={classes.icon} />}
        onClick={imgsUp}
      ></Button>
      {images.map((img, index) => (
        <Box img={img} key={index} />
      ))}
      <Button
        as={Link}
        to="/message"
        variant="contained"
        className={classes.button}
        startIcon={<ExpandMore className={classes.icon} />}
        onClick={imgsDown}
      ></Button>
    </ul>
  );
}
