import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Square = ({ x, y, children }) => {
  const imgs = useSelector((state) => state.image);
  const [borderStyle, setBorderStyle] = useState(true);

  useEffect(() => {
    setBorderStyle(true);
    if (imgs.length > 0) {
      imgs.map((img) => {
        if (img.size === 15) {
          console.log(img.cropX);
          if (img.cropX === x && img.cropY === y) {
            console.log(img.cropX);
            setBorderStyle(false);
          }
          if (img.cropX === x && img.cropY === y - 1) {
            console.log(img.cropX);
            setBorderStyle(false);
          }
          if (img.cropX === x && img.cropY === y - 2) {
            console.log(img.cropX);
            setBorderStyle(false);
          }
          if (img.cropX === x - 1 && img.cropY === y) {
            console.log(img.cropX);
            setBorderStyle(false);
          }
          if (img.cropX === x - 1 && img.cropY === y - 1) {
            setBorderStyle(false);
          }
          if (img.cropX === x - 1 && img.cropY === y - 2) {
            setBorderStyle(false);
          } else if (img.cropX === x - 2 && img.cropY === y) {
            setBorderStyle(false);
          }
          if (img.cropX === x - 2 && img.cropY === y - 1) {
            setBorderStyle(false);
          }
          if (img.cropX === x - 2 && img.cropY === y - 2) {
            setBorderStyle(false);
          }
        }
        if (img.size === 12) {
          if (img.cropX === x && img.cropY === y) {
            setBorderStyle(false);
          } else if (img.cropX === x && img.cropY === y - 1) {
            setBorderStyle(false);
          } else if (img.cropX === x && img.cropY === y - 2) {
            setBorderStyle(false);
          } else if (img.cropX === x - 1 && img.cropY === y) {
            setBorderStyle(false);
          } else if (img.cropX === x - 1 && img.cropY === y - 1) {
            setBorderStyle(false);
          } else if (img.cropX === x - 1 && img.cropY === y - 2) {
            setBorderStyle(false);
          } else if (img.cropX === x - 2 && img.cropY === y) {
            setBorderStyle(false);
          } else if (img.cropX === x - 2 && img.cropY === y - 1) {
            setBorderStyle(false);
          } else if (img.cropX === x - 2 && img.cropY === y - 2) {
            setBorderStyle(false);
          }
        }
        if (img.size === 10) {
          if (img.cropX === x && img.cropY === y) {
            setBorderStyle(false);
          } else if (img.cropX === x && img.cropY === y - 1) {
            setBorderStyle(false);
          } else if (img.cropX === x - 1 && img.cropY === y) {
            setBorderStyle(false);
          } else if (img.cropX === x - 1 && img.cropY === y - 1) {
            setBorderStyle(false);
          }
        }
      });
    }
  }, [imgs, x, y]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        border: borderStyle ? '1px solid black' : 'none',
      }}
    >
      {children}
    </div>
  );
};
