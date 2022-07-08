const initialState = {
  movie: [],
  current: 1,
  totalMovie: 400,
};

const movieParametr = (state = initialState, action) => {
  if (action.type === 'MOVIE_LIST') {
    return {
      ...state,
      movie: action.payload,
    };
  };
  if (action.type === 'PAGE_NUMBER') {
    return {
      ...state,
      current: action.payload,
    };
  };
  if (action.type === 'TOTAL_MOVIE') {
    return {
      ...state,
      totalMovie: action.payload,
    };
  };
  
  return state;
};

export default movieParametr;