const initialState = {
  type: 'ALL',
  genre: '',
  country: '',
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY_TYPE') {
    return {
      ...state,
      type: action.payload,
    };
  };
  if (action.type === 'SET_SORT_BY_GENRE') {
    return {
      ...state,
      genre: action.payload,
    };
  };
  if (action.type === 'SET_SORT_BY_COUNTRY') {
    return {
      ...state,
      country: action.payload,
    };
  };
  
  return state;
};

export default filters;