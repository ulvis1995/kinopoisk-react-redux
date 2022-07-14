const initialState = {
  premieres: [],
  pagePrem: 1,
  totalPremiers: 200,
};

const premieres = (state = initialState, action) => {
  switch (action.type) {
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
export default premieres;