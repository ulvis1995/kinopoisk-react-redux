import { TopAction, TopActionTypes, TopState } from '../types/top';

const initialState: TopState = {
  topList: [],
  pageT250: 1,
  pageTPopular: 1,
  pageTAwait: 1,
  totalTop: 250,
  isLoaded: false,
};

const top = (state = initialState, action: TopAction): TopState => {
  switch (action.type) {
    case TopActionTypes.SET_PAGE_TOP_250:
      return {
        ...state,
        pageT250: action.payload,
    };
    case TopActionTypes.SET_PAGE_TOP_POPULAR:
      return {
        ...state,
        pageTPopular: action.payload,
    };
    case TopActionTypes.SET_PAGE_TOP_AWAIT:
      return {
        ...state,
        pageTAwait: action.payload,
    };      
    case TopActionTypes.TOP_LIST:
    return {
      ...state,
      topList: action.payload,
      isLoaded: true
    };
    case TopActionTypes.TOP_TOTAL:
    return {
      ...state,
      totalTop: action.payload,
    };

    default:
      return state;
  }
};

export default top; 