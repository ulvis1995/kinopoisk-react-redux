import { FilterActionTypes } from "../types/filters";

export const setSortByType = (type: string | null) => ({
  type: FilterActionTypes.SET_SORT_BY_TYPE,
  payload: type,
});

export const setSortByGenre = (genre: string | null) => ({
  type: FilterActionTypes.SET_SORT_BY_GENRE,
  payload: genre,
});

export const setSortByCountry = (country: string | null) => ({
  type: FilterActionTypes.SET_SORT_BY_COUNTRY,
  payload: country,
});

export const setMonth = (month: string | null) => ({
  type: FilterActionTypes.SET_MONTH,
  payload: month,
});

export const setYear = (year: number | null) => ({
  type: FilterActionTypes.SET_YEAR,
  payload: year,
});

export const setSearch = (search: string | null) => ({
  type: FilterActionTypes.SET_SEARCH,
  payload: search,
}); 