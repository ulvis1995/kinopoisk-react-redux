export interface FilterState {
  type: string | null,
  genre: string | null,
  country: string | null,
  month: string | null,
  year: number | null,
  search: string | null,
};

export enum FilterActionTypes {
  SET_SORT_BY_TYPE = 'SET_SORT_BY_TYPE',
  SET_SORT_BY_GENRE = 'SET_SORT_BY_GENRE',
  SET_SORT_BY_COUNTRY = 'SET_SORT_BY_COUNTRY',
  SET_MONTH = 'SET_MONTH',
  SET_YEAR = 'SET_YEAR',
  SET_SEARCH = 'SET_SEARCH',
};

interface FilterType {
  type: FilterActionTypes.SET_SORT_BY_TYPE,
  payload: string | null,
};

interface FilterGenre {
  type: FilterActionTypes.SET_SORT_BY_GENRE,
  payload: string | null,
};

interface FilterCountry {
  type: FilterActionTypes.SET_SORT_BY_COUNTRY,
  payload: string | null,
};

interface FilterMonth {
  type: FilterActionTypes.SET_MONTH,
  payload: string | null,
};

interface FilterYear {
  type: FilterActionTypes.SET_YEAR,
  payload: number | null,
}

interface FilterSearch {
  type: FilterActionTypes.SET_SEARCH,
  payload: string | null,
}

export type FilterAction = FilterType | FilterGenre | FilterCountry | 
  FilterMonth | FilterYear | FilterSearch