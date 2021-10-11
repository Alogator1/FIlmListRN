import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './screensSlice';

export default configureStore({
  reducer: {
    film: counterReducer,
  },
});
