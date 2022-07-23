export interface Episodes {
  episodeNumber: number
  nameEn: string | null
  nameRu: string | null
  releaseDate: string | null
  seasonNumber: number
  synopsis: string | null
}

export interface AwardFilm  {
  name: string,
  win: boolean,
  imageUrl: string,
  nominationName: string,
  year: number,
  persons: 
    {
      kinopoiskId: number,
      webUrl: string,
      nameRu: string | null,
      nameEn: string | null,
      sex: string,
      posterUrl: string | null,
      growth: number | null,
      birthday: string | null,
      death: string | null,
      age: number | null,
      birthplace: string,
      deathplace: string,
      profession: string
    }[]
}

export interface InfoFilmState {
  seasonInfo: boolean,
  seasonsList: {
    number: number,
    episodes: Episodes[]
  }[],
  sliderIndex: number,
  sliderImage: [{previewUrl: string, imageUrl: string}] | [],
  awardShow: boolean,
  awardsFilm: AwardFilm[] | [],
};

export enum InfoFilmActionTypes {
  SET_SEASON_INFO = 'SET_SEASON_INFO',
  SET_SEASON_LIST = 'SET_SEASON_LIST',
  SET_SLIDER_INDEX = 'SET_SLIDER_INDEX',
  SET_SLIDER_IMAGE = 'SET_SLIDER_IMAGE',
  SET_AWARD_SHOW = 'SET_AWARD_SHOW',
  SET_AWARDS_FILM = 'SET_AWARDS_FILM',
};

interface InfoSeason {
  type: InfoFilmActionTypes.SET_SEASON_INFO,
  payload: boolean,
};

interface InfoSeasonList {
  type: InfoFilmActionTypes.SET_SEASON_LIST,
  payload: {
    number: number,
    episodes: Episodes[]
  }[] | [],
};

interface InfoImageIndex {
  type: InfoFilmActionTypes.SET_SLIDER_INDEX,
  payload: number,
};

interface InfoImage {
  type: InfoFilmActionTypes.SET_SLIDER_IMAGE,
  payload: [{previewUrl: string, imageUrl: string}] | [],
};

interface InfoAward {
  type: InfoFilmActionTypes.SET_AWARD_SHOW,
  payload: boolean,
};

interface InfoAwardFilm {
  type: InfoFilmActionTypes.SET_AWARDS_FILM,
  payload: AwardFilm[],
};

export type InfoFilmAction = 
    InfoAward 
  | InfoAwardFilm 
  | InfoImage 
  | InfoImageIndex
  | InfoSeason
  | InfoSeasonList