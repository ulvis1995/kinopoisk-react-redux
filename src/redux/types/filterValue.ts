export interface FilterValueState {
  genresValue: [{ id: number, genre: string}],
  countryValue: [{id: number, country: string}],
};

export enum FilterValueActionTypes {
  GENRES_VALUE = 'GENRES_VALUE',
  COUNTRY_VALUE = 'COUNTRY_VALUE',
}

interface FilterGenres{
  type: FilterValueActionTypes.GENRES_VALUE,
  payload: [{ id: number, genre: string}],
}

interface FilterCountries {
  type: FilterValueActionTypes.COUNTRY_VALUE,
  payload: [{id: number, country: string}],
}

export type FilterValueAction = FilterGenres | FilterCountries;