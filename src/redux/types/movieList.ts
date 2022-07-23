export type movieParament = {
  kinopoiskId: number,
  imdbId: string,
  nameRu: string,
  nameEn: string,
  nameOriginal: string,
  posterUrl: string,
  posterUrlPreview: string,
  ratingKinopoisk: number,
  ratingImdb: number,
  year: number,
  type: string,
  countries: [{country: string}],
  genres: [{genre: string}],
}

export interface MovieListState {
  movie: movieParament[],
  current: number,
  totalMovie: number,
  isLoaded: boolean,
};

export enum MovieListActionTypes {
  MOVIE_LIST = 'MOVIE_LIST',
  PAGE_NUMBER = 'PAGE_NUMBER',
  TOTAL_MOVIE = 'TOTAL_MOVIE',
  SET_LOADED = 'SET_LOADED',
};

interface MovieList {
  type: MovieListActionTypes.MOVIE_LIST,
  payload: movieParament[],
};

interface PageNumber {
  type: MovieListActionTypes.PAGE_NUMBER,
  payload: number,
};

interface TotalMovie {
  type: MovieListActionTypes.TOTAL_MOVIE,
  payload: number,
};

interface isLoaded {
  type: MovieListActionTypes.SET_LOADED,
  payload: boolean,
};

export type MovieListAction = MovieList | PageNumber | TotalMovie | isLoaded;
