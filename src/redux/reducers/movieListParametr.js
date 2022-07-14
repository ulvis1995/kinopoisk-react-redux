const initialState = {
  movie: [],
  current: 1,
  totalMovie: 400,
  premieres: [],
  pagePrem: 1,
  totalPremiers: 200,
};

const movieListParametr = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_LIST':
      return {
        ...state,
        movie: action.payload,
      };
    case 'PAGE_NUMBER':
      return {
        ...state,
        current: action.payload,
      };
      case 'TOTAL_MOVIE':
    return {
      ...state,
      totalMovie: action.payload,
    };
    case 'SET_PREMIERS':
    return {
      ...state,
      premieres: action.payload,
    };
    case 'PAGE_NUMBER_PREMIER':
    return {
      ...state,
      pagePrem: action.payload,
    };
    case 'TOTAL_PREMIERS':
    return {
      ...state,
      totalPremiers: action.payload,
    };
    default:
      return state;
  };
};
export default movieListParametr;