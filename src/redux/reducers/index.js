import { combineReducers } from "@reduxjs/toolkit";
import filters from "./filters";
import filtersValue from "./filtersValue";
import movieParametr from "./movieListParametr";

const rootReducer = combineReducers({
  filters,
  filtersValue,
  movieParametr,
});

export default rootReducer;