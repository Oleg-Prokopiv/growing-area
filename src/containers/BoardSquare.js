import React from 'react';
import { useDrop } from 'react-dnd';
import { Square } from './Square';
import { canMoveCrop, moveCrop } from './Move';
import { ItemTypes } from './ItemTypes';
import { Overlay } from '../components/Overlay';

export const BoardSquare = ({ x, y, children }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.CROP,
    canDrop: () => canMoveCrop(x, y),
    drop: () => moveCrop(true, x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square x={x} y={y}>
        {children}
      </Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  );
};
