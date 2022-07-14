const initialState = {
  topList: [],
  page: 1,
  totalTop: 250,
};

const top = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAGE_TOP':
      return {
        ...state,
        page: action.payload,
      };
    case 'TOP_LIST':
    return {
      ...state,
      topList: action.payload,
    };
    case 'TOP_TOTAL':
    return {
      ...state,
      totalTop: action.payload,
    };

    default:
      return state;
  }
};

export default top;