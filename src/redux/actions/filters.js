export const setSortByType = (type) => ({
  type: 'SET_SORT_BY_TYPE',
  payload: type,
});

export const setSortByGenre = (genre) => ({
  type: 'SET_SORT_BY_GENRE',
  payload: genre,
});

export const setSortByCountry = (country) => ({
  type: 'SET_SORT_BY_COUNTRY',
  payload: country,
})