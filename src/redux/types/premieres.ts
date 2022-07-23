type PremieresItem = {
  kinopoiskId: number,
  nameRu: string,
  nameEn: string,
  year: number,
  posterUrl: string,
  posterUrlPreview: string,
  countries: [{country: string}],
  genres: [{genre: string}],
  duration: number,
  premiereRu: string,
}

export interface PremierState {
  premieres: PremieresItem[] | [],
  pagePrem: number,
  totalPremiers: number,
  isLoaded: boolean,
};

export enum PremieresActionTypes {
  SET_PREMIERS = 'SET_PREMIERS',
  PAGE_NUMBER_PREMIER = 'PAGE_NUMBER_PREMIER',
  TOTAL_PREMIERS = 'TOTAL_PREMIERS',
  SET_LOADED = 'SET_LOADED',
};

interface PremieresList {
  type: PremieresActionTypes.SET_PREMIERS,
  payload: PremieresItem[],
};

interface PremierPageNumber {
  type: PremieresActionTypes.PAGE_NUMBER_PREMIER,
  payload: number,
};

interface PremierTotal {
  type: PremieresActionTypes.TOTAL_PREMIERS,
  payload: number,
};

interface isLoaded {
  type: PremieresActionTypes.SET_LOADED,
  payload: boolean,
};

export type PremierAction = PremieresList | PremierPageNumber | PremierTotal | isLoaded;