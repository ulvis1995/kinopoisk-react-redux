export interface ITop {
  countries: [{country: string}],
  filmId: number,
  filmLength: string | null,
  genres: [{genre: string}],
  nameEn: string | null,
  nameRu: string | null,
  posterUrl: string
  posterUrlPreview: string
  rating: number | string
  ratingChange: number | null
  ratingVoteCount: number | null
  year: number | string | null

}

export interface TopState {
  topList: ITop[] | [],
  pageT250: number,
  pageTPopular: number,
  pageTAwait: number,
  totalTop: number,
  isLoaded: boolean,
};

export enum TopActionTypes {
  SET_PAGE_TOP_250 = 'SET_PAGE_TOP_250',
  SET_PAGE_TOP_POPULAR = 'SET_PAGE_TOP_POPULAR',
  SET_PAGE_TOP_AWAIT = 'SET_PAGE_TOP_AWAIT',
  TOP_LIST = 'TOP_LIST',
  TOP_TOTAL = 'TOP_TOTAL',
  SET_LOADED = 'SET_LOADED',
};

interface TopPage250 {
  type: TopActionTypes.SET_PAGE_TOP_250,
  payload: number,
};

interface TopPagePopular {
  type: TopActionTypes.SET_PAGE_TOP_POPULAR,
  payload: number,
};

interface TopPageAwait {
  type: TopActionTypes.SET_PAGE_TOP_AWAIT,
  payload: number,
};

interface TopList {
  type: TopActionTypes.TOP_LIST,
  payload: ITop[],
};

interface TopTotal {
  type: TopActionTypes.TOP_TOTAL,
  payload: number,
};

interface isLoaded {
  type: TopActionTypes.SET_LOADED,
  payload: boolean,
};

export type TopAction = TopPage250 | TopPagePopular | TopPageAwait | TopList | TopTotal | isLoaded;
