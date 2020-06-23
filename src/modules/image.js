const ADD_POSITION = 'image/ADD_POSITION';
const UPDATE_POSITION = 'image/UPDATE_POSITION';
const FORMAT_POSITIOIN = 'image/FORMAT_POSITION';

let nextId = 1;

export const addPosition = (img) => ({
  type: ADD_POSITION,
  todo: {
    id: nextId++,
    status: img.status,
    name: img.name,
    url: img.url,
    size: img.size,
    cropX: img.cropX,
    cropY: img.cropY,
  },
});
export const updatePosition = (img) => ({ type: UPDATE_POSITION, img });
export const formatPosition = () => ({ type: FORMAT_POSITIOIN });

const initialState = [];

export default function image(state = initialState, action) {
  switch (action.type) {
    case ADD_POSITION:
      return state.concat(action.todo);

    case UPDATE_POSITION:
      return state.map((todo) =>
        todo.id === action.img.id
          ? {
              id: action.img.id,
              status: action.img.status,
              name: action.img.name,
              url: action.img.url,
              size: action.img.size,
              cropX: action.img.cropX,
              cropY: action.img.cropY,
            }
          : todo,
      );

    case FORMAT_POSITIOIN:
      return [];
    default:
      return state;
  }
}
