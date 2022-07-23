import {FilterState, FilterAction, FilterActionTypes} from '../types/filters'

const initialState: FilterState = {
  type: null,
  genre: null,
  country: null,
  month: null,
  year: null,
  search: null,
};

const filters = (state = initialState, action: FilterAction) : FilterState => {
  switch (action.type) {
    case FilterActionTypes.SET_SORT_BY_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case FilterActionTypes.SET_SORT_BY_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
      case FilterActionTypes.SET_SORT_BY_COUNTRY:
    return {
      ...state,
      country: action.payload,
    };
    case FilterActionTypes.SET_MONTH:
    return {
      ...state,
      month: action.payload,
    };
    case FilterActionTypes.SET_YEAR:
    return {
      ...state,
      year: action.payload,
    };
    case FilterActionTypes.SET_SEARCH:
    return {
      ...state,
      search: action.payload,
    };
    default:
      return state;
  };
};
export default filters;