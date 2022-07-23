import { MovieIdAction, MovieIdState, MovieIdActionTypes } from '../types/movieId';

const initialState: MovieIdState = {
  id: 0,
  moviePage: {
    completed: false,
    countries: [{country: ''}],
    coverUrl: null,
    description: "",
    editorAnnotation: null,
    endYear: null,
    filmLength: null,
    genres: [{genre: ''}],
    has3D: false,
    hasImax: false,
    imdbId: null,
    isTicketsAvailable: false,
    kinopoiskId: 0,
    lastSync: "",
    logoUrl: null,
    nameEn: null,
    nameOriginal: "",
    nameRu: "",
    posterUrl: "",
    posterUrlPreview: "",
    productionStatus: null,
    ratingAgeLimits: "",
    ratingAwait: null,
    ratingAwaitCount: null,
    ratingFilmCritics: null,
    ratingFilmCriticsVoteCount: null,
    ratingGoodReview: null,
    ratingGoodReviewVoteCount: null,
    ratingImdb: null,
    ratingImdbVoteCount: null,
    ratingKinopoisk: null,
    ratingKinopoiskVoteCount: null,
    ratingMpaa: null,
    ratingRfCritics: null,
    ratingRfCriticsVoteCount: null,
    reviewsCount: null,
    serial: false,
    shortDescription: null,
    shortFilm: false,
    slogan: null,
    startYear: null,
    type: "",
    webUrl: "",
    year: null
  },
  movieAbout: false,
  staffId: 0,
};

const movieId = (state = initialState, action: MovieIdAction): MovieIdState => {
  if (action.type === MovieIdActionTypes.SET_MOVIE_ID) {
    return {
      ...state,
      id: action.payload,
    };
  };
  if (action.type === MovieIdActionTypes.SET_MOVIE_PAGE) {
    return {
      ...state,
      moviePage: action.payload,
    };
  };  
  if (action.type === MovieIdActionTypes.SET_MOVIE_ABOUT) {
    return {
      ...state,
      movieAbout: action.payload,
    };
  };  
  if (action.type === MovieIdActionTypes.SET_STAFF_ID) {
    return {
      ...state,
      staffId: action.payload,
    };
  };
  
  return state;
};

export default movieId;
