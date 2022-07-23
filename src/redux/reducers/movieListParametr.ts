import { MovieListAction, MovieListActionTypes, MovieListState } from '../types/movieList';

const initialState: MovieListState = {
  movie: [],
  current: 1,
  totalMovie: 400,
  isLoaded: false,
};

const movieListParametr = (state = initialState, action: MovieListAction): MovieListState => {
  switch (action.type) {
    case MovieListActionTypes.MOVIE_LIST:
      return {
        ...state,
        movie: action.payload,
        isLoaded: true
      };
    case MovieListActionTypes.PAGE_NUMBER:
      return {
        ...state,
        current: action.payload,
      };
      case MovieListActionTypes.TOTAL_MOVIE:
    return {
      ...state,
      totalMovie: action.payload,
    };
    case MovieListActionTypes.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  };
};
export default movieListParametr; 