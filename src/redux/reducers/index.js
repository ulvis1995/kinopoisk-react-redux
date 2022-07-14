import { combineReducers } from "@reduxjs/toolkit";
import filters from "./filters";
import filtersValue from "./filtersValue";
import movieListParametr from "./movieListParametr";
import movieId from "./movieId";
import infoAboutFilm from "./infoAboutFilm";
import top from "./top";
import header from "./header";

const rootReducer = combineReducers({
  filters,
  filtersValue,
  movieListParametr,
  movieId,
  infoAboutFilm,
  top,
  header
});

export default rootReducer;