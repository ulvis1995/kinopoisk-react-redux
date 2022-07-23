export interface IMoviePage {
  completed: boolean,
  countries: [{country: string}],
  coverUrl: boolean | null,
  description: string,
  editorAnnotation: string | null,
  endYear: number | null,
  filmLength: number | null,
  genres: [{genre: string}],
  has3D: boolean,
  hasImax: boolean,
  imdbId: number | null,
  isTicketsAvailable: boolean,
  kinopoiskId: number,
  lastSync: string,
  logoUrl: string | null
  nameEn: string | null
  nameOriginal: string | null
  nameRu: string | null
  posterUrl: string | null | undefined
  posterUrlPreview: string | null
  productionStatus: null
  ratingAgeLimits: string | null
  ratingAwait: number | null
  ratingAwaitCount: number | null
  ratingFilmCritics: number | null
  ratingFilmCriticsVoteCount: number | null
  ratingGoodReview: number | null
  ratingGoodReviewVoteCount: number | null
  ratingImdb: number | null
  ratingImdbVoteCount: number | null
  ratingKinopoisk: number | null
  ratingKinopoiskVoteCount: number | null
  ratingMpaa: number | null
  ratingRfCritics: number | null
  ratingRfCriticsVoteCount: number | null
  reviewsCount: number | null
  serial: boolean
  shortDescription: string | null
  shortFilm: boolean
  slogan: string | null
  startYear: number | null
  type: string
  webUrl: string
  year: number | null
} 

export interface MovieIdState {
  id: number,
  moviePage: IMoviePage,
  movieAbout: boolean,
  staffId: number,
};

export enum MovieIdActionTypes {
  SET_MOVIE_ID = 'SET_MOVIE_ID',
  SET_MOVIE_PAGE = 'SET_MOVIE_PAGE',
  SET_MOVIE_ABOUT = 'SET_MOVIE_ABOUT',
  SET_STAFF_ID = 'SET_STAFF_ID',
};

interface MovieId {
  type: MovieIdActionTypes.SET_MOVIE_ID,
  payload: number,
};

interface MoviePage {
  type: MovieIdActionTypes.SET_MOVIE_PAGE,
  payload: IMoviePage,
};

interface MovieAbout {
  type: MovieIdActionTypes.SET_MOVIE_ABOUT,
  payload: boolean,
};

interface StaffId {
  type: MovieIdActionTypes.SET_STAFF_ID,
  payload: number,
};

export type MovieIdAction = MovieId | MoviePage | MovieAbout | StaffId;