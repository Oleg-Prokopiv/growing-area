import { combineReducers } from 'redux';
import signup from './signup';
import image from './image';
import size from './size';

const rootReducer = combineReducers({
  signup,
  image,
  size,
});

export default rootReducer;
