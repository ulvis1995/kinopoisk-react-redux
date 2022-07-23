export interface FilmCartMenuProps {
  id: number,
  nameRu: string | null,
  nameOriginal?: string | null,
  poster?: string,
  ratingKinopoisk?: number | string | null,
  genres?: string,
  type?: string,
  onClickid (id: number): void,
  className?: string
};

export interface FiltersProps {
  genresArr: [{ id: number, genre: string}],
  countryArr: [{id: number, country: string}],
  setTypeMovie: (type: string | null) => void,
  setGenreMovie: (genre: string | null) => void,
  setCountryMovie: (country: string | null) => void,
  genre: string | null,
  type: string | null,
  country: string | null,
};

export interface FiltersPremieresProps {
  setMonth: (month: string | null) => void,
  setYear: (year: number | null) => void,
  year: number | null,
  month: string | null
};

export interface AwardProps {id: number};

export interface BudgetProps {id: number; movieAbout: boolean};

export interface MovieRaitingProps {moviePage: {
  completed: boolean,
  countries: [{country: string}],
  coverUrl: boolean | null,
  description: string,
  editorAnnotation: string | null,
  endYear: number | null,
  filmLength: number | null,
  genres: [{genre: string}],
  has3D: boolean,
  hasImax: boolean,
  imdbId: number | null,
  isTicketsAvailable: boolean,
  kinopoiskId: number,
  lastSync: string,
  logoUrl: string | null
  nameEn: string | null
  nameOriginal: string | null
  nameRu: string | null
  posterUrl: string | null | undefined
  posterUrlPreview: string | null
  productionStatus: null
  ratingAgeLimits: string | null
  ratingAwait: number | null
  ratingAwaitCount: number | null
  ratingFilmCritics: number | null
  ratingFilmCriticsVoteCount: number | null
  ratingGoodReview: number | null
  ratingGoodReviewVoteCount: number | null
  ratingImdb: number | null
  ratingImdbVoteCount: number | null
  ratingKinopoisk: number | null
  ratingKinopoiskVoteCount: number | null
  ratingMpaa: number | null
  ratingRfCritics: number | null
  ratingRfCriticsVoteCount: number | null
  reviewsCount: number | null
  serial: boolean
  shortDescription: string | null
  shortFilm: boolean
  slogan: string | null
  startYear: number | null
  type: string
  webUrl: string
  year: number | null
}};

export interface SeasonsProps {id: number};

export interface SimilarProps {id: number};

export interface SliderProps {id: number, movieAbout: boolean};

export interface StaffProps{id: number};

export interface MovieProps {id: number, typeFilm: string};

export interface PersonProps {staffId: number};

export interface PersonInfoItem {
  staffId: number,    
  age: number | null,
  birthday: number | string | Date ,
  birthplace: string,
  death: string | null,
  deathplace: string | null,
  facts:  string[],
  films: [{
    description: string,
    filmId: number,
    general: boolean | null,
    nameEn: string | null,
    nameRu: string | null,
    professionKey: string | null,
    rating: string | number | null,
  }]
  growth: number | null,
  hasAwards: number | null,
  nameEn: string | null,
  nameRu: string | null,
  personId: number,
  posterUrl: string,
  profession: string,
  sex: string,
  spouses: [{
    children: number,
    divorced: boolean | null,
    divorcedReason: string,
    name: string,
    personId: number,
    relation: string,
    sex: string,
    webUrl: string,
  }]
  webUrl: string,
};

export interface PersonTextProps {personInfo: PersonInfoItem};

export interface PremieresProps {activeLink: string};

export interface TopProps {activeLink: string};