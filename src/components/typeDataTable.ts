export interface DataTypeAward {
  key: number,
  number: number,
  award: string,
  nomination: string,
  result: string,
  persons: {
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
  }[],
};

export interface DataTypePerson {
  key: number,
  number: number,
  profession: string,
  raiting: string | number, 
  name: {
    description: string,
    filmId: number,
    general: boolean | null,
    nameEn: string | null,
    nameRu: string | null,
    professionKey: string | null
    rating: string | number | null
  }
}