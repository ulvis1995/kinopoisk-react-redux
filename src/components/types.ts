export interface SeasonItem {
  number: number,
  episodes: {
    episodeNumber: number
    nameEn: string | null
    nameRu: string | null
    releaseDate: string | null
    seasonNumber: number
    synopsis: string | null
  }[]
};

export type BudgetItem = {
  type: string,
  amount: number,
  currencyCode: string,
  name: string,
  symbol: string
}

export type SilimarItem = {
  filmId: number,
  nameRu: string,
  nameOriginal: string,
  posterUrlPreview: string
}

export interface staffArr {
  nameRu: string, 
  staffId: number, 
  professionKey: string, 
  nameEn: string,
  description: string,
  posterUrl: string,
  professionText: string
}

export type PremieresItem = {
  kinopoiskId: number,
  nameRu: string,
  nameEn: string,
  nameOriginal?: string,
  ratingKinopoisk?: number | string,
  type?: string,
  year: number,
  posterUrl: string,
  posterUrlPreview: string,
  countries: [
    {country: string}
  ],
  genres: [
    {genre: string}
  ],
  duration: number,
  premiereRu: string,
}