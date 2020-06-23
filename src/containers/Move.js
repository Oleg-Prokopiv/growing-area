let cropPosition = {};
let observers = [];
let start = false;
let panelSize = 0;
let count = 0;

function emitChange() {
  // console.log(cropPosition);
  observers.forEach((o) => o && o(cropPosition));
}

export function observe(o) {
  observers.push(o);
  emitChange();
  return () => {
    observers = observers.filter((t) => t !== o);
  };
}

export function canMoveCrop(toX, toY) {
  cropPosition = {
    name: start.name,
    url: start.url,
    size: start.size,
    cropX: start.cropX,
    cropY: start.cropY,
  };
  count = 0;
  const { cropX, cropY } = cropPosition;
  const dx = toX - cropX;
  const dy = toY - cropY;

  return (
    (Math.abs(dx) && Math.abs(dy)) ||
    (Math.abs(dx - 1) && Math.abs(dy)) ||
    (Math.abs(dx) && Math.abs(dy - 1))
  );
}

export function moveStart(img, status) {
  start = img;
  start.status = status;
  count = 0;
}

export function moveCrop(status, toX, toY) {
  panelSize = localStorage.getItem('size');
  if (panelSize === '200') {
    if (start.size === 15 || start.size === 12) {
      if (toX === 9 || toX === 8) {
        toX = 7;
        console.log(toX);
      }
      if (toY === 19 || toY === 18) {
        toY = 17;
      }
    } else if (start.size === 10) {
      if (toX === 9) {
        toX = 8;
      }
      if (toY === 19) {
        toY = 18;
      }
    }
  }
  if (panelSize === '400') {
    if (start.size === 15 || start.size === 12) {
      if (toX === 19 || toX === 18) {
        toX = 17;
        console.log(toX);
      }
      if (toY === 19 || toY === 18) {
        toY = 17;
      }
    } else if (start.size === 10) {
      if (toX === 19) {
        toX = 18;
      }
      if (toY === 19) {
        toY = 18;
      }
    }
  }
  if (panelSize === '600') {
    if (start.size === 15 || start.size === 12) {
      if (toX === 29 || toX === 28) {
        toX = 17;
        console.log(toX);
      }
      if (toY === 19 || toY === 18) {
        toY = 17;
      }
    } else if (start.size === 10) {
      if (toX === 29) {
        toX = 28;
      }
      if (toY === 19) {
        toY = 18;
      }
    }
  }
  if (panelSize === '800') {
    if (start.size === 15 || start.size === 12) {
      if (toX === 39 || toX === 38) {
        toX = 37;
        console.log(toX);
      }
      if (toY === 19 || toY === 18) {
        toY = 17;
      }
    } else if (start.size === 10) {
      if (toX === 39) {
        toX = 38;
      }
      if (toY === 19) {
        toY = 18;
      }
    }
  }
  if (panelSize === '1000') {
    if (start.size === 15 || start.size === 12) {
      if (toX === 49 || toX === 48) {
        toX = 47;
        console.log(toX);
      }
      if (toY === 19 || toY === 18) {
        toY = 17;
      }
    } else if (start.size === 10) {
      if (toX === 49) {
        toX = 48;
      }
      if (toY === 19) {
        toY = 18;
      }
    }
    if (panelSize === '1200') {
      console.log(toX);
      if (start.size === 15 || start.size === 12) {
        if (toX === 59 || toX === 58) {
          toX = 57;
          console.log(toX);
        }
        if (toY === 19 || toY === 18) {
          toY = 17;
        }
      } else if (start.size === 10) {
        if (toX === 59) {
          toX = 58;
        }
        if (toY === 19) {
          toY = 18;
        }
      }
    }
  }

  if (count === 0) {
    cropPosition = {
      id: start.id,
      status: start.status,
      name: start.name,
      url: start.url,
      size: start.size,
      cropX: toX,
      cropY: toY,
    };
  }

  if (start && toX != null) {
    count++;
    if (count === 1 || status) {
      emitChange();
    }
  }
}

export function formatPos(size) {
  observers = [];
  cropPosition = {};
  localStorage.setItem('size', size);
  emitChange();
}
