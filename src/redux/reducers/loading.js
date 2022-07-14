const initialState = {
  isLoaded: false,
};

const loading = (state = initialState, action) => {
  if (action.type === 'SET_LOADED') {
    return {
      ...state,
      isLoaded: action.payload,
    };
  }
};

export default loading;