import React from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from '../containers/ItemTypes';
import { moveStart } from '../containers/Move';

const imgStyle = {
  cursor: 'move',
  zIndex: 1,
};
export const Crop = ({ img }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { img, type: ItemTypes.CROP },
    canDrag: () => ({
      bb: moveStart(img, 'edit'),
      isDragging: true,
    }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <img
        ref={drag}
        style={{
          ...imgStyle,
          opacity: isDragging ? 0.5 : 1,
          width:
            img.size === 15
              ? '300%'
              : img.size === 12
              ? '240%'
              : img.size === 10
              ? '200%'
              : '0%',
          height:
            img.size === 15
              ? '300%'
              : img.size === 12
              ? '240%'
              : img.size === 10
              ? '200%'
              : '0%',
        }}
        src={process.env.PUBLIC_URL + img.url}
        alt={img.name}
      />
    </>
  );
};
