import {createSlice} from '@reduxjs/toolkit';
import {Film} from '../models/films';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    films: [] as Film[],
    similar: [],
    openedFilm: {} as Film,
  },
  reducers: {
    loadFilms: (state, action) => {
      state.films = action?.payload;
    },
    openFilm: (state, action) => {
      state.openedFilm = action.payload;
    },
    closeFilm: state => {
      state.openedFilm = null as Film;
    },
    loadSimilar: (state, action) => {
      state.similar = action?.payload;
    },
  },
});

export const {loadFilms, openFilm, closeFilm, loadSimilar} =
  counterSlice.actions;

export default counterSlice.reducer;
