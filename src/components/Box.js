import React from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from '../containers/ItemTypes';
import { moveStart } from '../containers/Move';

const cropStyle = {
  cursor: 'move',
  backgroundColor: 'white',
};

export const Box = ({ img }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { img, type: ItemTypes.BOX },
    canDrag: () => ({
      isDragging: true,
    }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  if (isDragging) {
    moveStart(img, 'new');
  }

  return (
    <li style={{ listStyleType: 'none' }}>
      <img
        ref={drag}
        style={{
          ...cropStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
        src={process.env.PUBLIC_URL + img.url}
        alt={img.name}
        width="100%"
      />
    </li>
  );
};
