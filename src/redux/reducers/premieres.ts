import {PremierAction, PremieresActionTypes, PremierState} from '../types/premieres'

const initialState: PremierState = {
  premieres: [],
  pagePrem: 1,
  totalPremiers: 200,
  isLoaded: false,
};

const premieres = (state = initialState, action: PremierAction): PremierState => {
  switch (action.type) {
    case PremieresActionTypes.SET_PREMIERS:
    return {
      ...state,
      premieres: action.payload,
      isLoaded: true
    };
    case PremieresActionTypes.PAGE_NUMBER_PREMIER:
    return {
      ...state,
      pagePrem: action.payload,
    };
    case PremieresActionTypes.TOTAL_PREMIERS:
    return {
      ...state,
      totalPremiers: action.payload,
    };
    case PremieresActionTypes.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  };
};
export default premieres;