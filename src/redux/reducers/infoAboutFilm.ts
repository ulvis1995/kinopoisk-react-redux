import { InfoFilmAction, InfoFilmActionTypes, InfoFilmState } from '../types/infoAboutFilm';

const initialState: InfoFilmState = {
  seasonInfo: false,
  seasonsList: [],
  sliderIndex: 0,
  sliderImage: [],
  awardShow: false,
  awardsFilm: [],
  // budget: [],
};

const infoAboutFilm = (state = initialState, action: InfoFilmAction): InfoFilmState => {
  switch (action.type) {
    case InfoFilmActionTypes.SET_SEASON_INFO:
      return {
        ...state,
        seasonInfo: action.payload,
      };
    case InfoFilmActionTypes.SET_SEASON_LIST:
      return {
        ...state,
        seasonsList: action.payload,
      };
    case InfoFilmActionTypes.SET_SLIDER_INDEX:
    return {
      ...state,
      sliderIndex: action.payload,
    };
    case InfoFilmActionTypes.SET_SLIDER_IMAGE:
    return {
      ...state,
      sliderImage: action.payload,
    };
    case InfoFilmActionTypes.SET_AWARD_SHOW:
      return {
        ...state,
        awardShow: action.payload,
      };      
    case InfoFilmActionTypes.SET_AWARDS_FILM:
      return {
        ...state,
        awardsFilm: action.payload,
      };
    // case InfoFilmActionTypes.SET_BOX:
    //   return {
    //     ...state,
    //     budget: action.payload,
    // };
    default:
      return state;
  }
};

export default infoAboutFilm;
