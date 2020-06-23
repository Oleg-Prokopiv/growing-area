import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

import { moveCrop } from './Move';
import { BoardSquare } from './BoardSquare';
import { Crop } from '../components/Crop';

const boardStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 auto',
};

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 'none',
  },
  grid: {
    marginTop: 50,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

// const squareStyle = { width: '5%', height: '5%' };

export default function Board({ CropsPosition }) {
  const squares = [];
  const classes = useStyles();
  const history = useHistory();
  const size = useSelector((state) => state.size.size);

  function renderSquare(i, size) {
    let x = 0;
    let y = Math.floor(i / 10);
    if (size === 200) x = i % 10;
    else if (size === 400) x = i % 20;
    else if (size === 600) x = i % 30;
    else if (size === 800) x = i % 40;
    else if (size === 1000) x = i % 50;
    else if (size === 1200) x = i % 60;
    else x = i % 10;

    return (
      <div
        key={i}
        style={{
          width:
            size === 200
              ? '10%'
              : size === 400
              ? '5%'
              : size === 600
              ? '3.3%'
              : size === 800
              ? '2.5%'
              : size === 1000
              ? '2%'
              : size === 1200
              ? '1.65%'
              : '0%',
          height: '5%',
        }}
        onMouseEnter={() => handleSquareClick(x, y)}
      >
        <BoardSquare x={x} y={y}>
          {CropsPosition.length > 0 &&
            CropsPosition.map((cp, index) => renderPiece(cp, index, x, y))}
        </BoardSquare>
      </div>
    );
  }

  function handleSquareClick(toX, toY) {
    moveCrop(false, toX, toY, size);
  }

  function renderPiece(cp, index, x, y) {
    const isLettuce = cp.name === 'Lettuce' && x === cp.cropX && y === cp.cropY;

    const isCoriander =
      cp.name === 'Coriander' && x === cp.cropX && y === cp.cropY;
    const isCapsicum =
      cp.name === 'Capsicum' && x === cp.cropX && y === cp.cropY;
    const isTomatoes =
      cp.name === 'Tomatoes' && x === cp.cropX && y === cp.cropY;
    const isRaspberries =
      cp.name === 'Raspberries' && x === cp.cropX && y === cp.cropY;
    const isStrawberries =
      cp.name === 'Strawberries' && x === cp.cropX && y === cp.cropY;
    const isSpinach = cp.name === 'Spinach' && x === cp.cropX && y === cp.cropY;
    const isBasil = cp.name === 'Basil' && x === cp.cropX && y === cp.cropY;
    const isKale = cp.name === 'Kale' && x === cp.cropX && y === cp.cropY;
    const isChives = cp.name === 'Chives' && x === cp.cropX && y === cp.cropY;

    if (isLettuce) return <Crop key={index} img={cp} />;
    if (isCoriander) return <Crop key={index} img={cp} />;
    if (isCapsicum) return <Crop key={index} img={cp} />;
    if (isTomatoes) return <Crop key={index} img={cp} />;
    if (isRaspberries) return <Crop key={index} img={cp} />;
    if (isStrawberries) return <Crop key={index} img={cp} />;
    if (isSpinach) return <Crop key={index} img={cp} />;
    if (isBasil) return <Crop key={index} img={cp} />;
    if (isKale) return <Crop key={index} img={cp} />;
    if (isChives) return <Crop key={index} img={cp} />;
    else return null;
  }

  const messagePage = () => {
    history.push('/message');
  };

  for (let i = 0; i < size; i += 1) {
    squares.push(renderSquare(i, size));
  }

  // console.log(CropsPosition);

  return (
    <>
      <div
        style={{
          ...boardStyle,
          width:
            size === 200
              ? '28%'
              : size === 400
              ? '55%'
              : size === 600
              ? '80%'
              : '100%',
          height: size === 1000 ? '75%' : size === 1200 ? '65%' : '100%',
        }}
      >
        {squares}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Sort Size
        </Button>
        <Button
          onClick={messagePage}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Next
        </Button>
      </div>
    </>
  );
}
