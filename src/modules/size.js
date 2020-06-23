const SET_SIZE = 'size/SET_SIZE';

export const setSize = (size) => ({
  type: SET_SIZE,
  size,
});

const initialState = {
  size: 0,
};

export default function size(state = initialState, action) {
  switch (action.type) {
    case SET_SIZE:
      return {
        ...state,
        size: action.size,
      };
    default:
      return state;
  }
}
