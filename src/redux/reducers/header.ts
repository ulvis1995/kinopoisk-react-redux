import {HeaderAction, HeaderActionTypes, HeaderState} from '../types/header'

const initialState: HeaderState = {
  activePage: 0,
  activeLink: '/',
};

const header = (state = initialState, action: HeaderAction): HeaderState => {
  if (action.type === HeaderActionTypes.SET_MENU_PAGE) {
    return {
      ...state,
      activePage: action.payload,
    };
  };
  if (action.type === HeaderActionTypes.SET_LINK) {
    return {
      ...state,
      activeLink: action.payload,
    };
  };
  
  return state;
};

export default header;
