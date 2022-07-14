import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';

export const setMovie = (movie) => ({
  type: 'MOVIE_LIST',
  payload: movie,
});

export const setCurrent = (current) => ({
  type: 'PAGE_NUMBER',
  payload: current,
});

export const setTotalMovie = (totalMovie) => ({
  type: 'TOTAL_MOVIE',
  payload: totalMovie,
});

export const fetchMovies = (current, type, genre, country, search) => (dispatch) => {

  axios.get(
    `${urlFilms}/films?page=${current}&type=${type ? type : ''}&genres=${genre ? genre : ''}&countries=${country ? country : ''}&keyword=${search ? search : ''}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setMovie(data.items))
        dispatch(setTotalMovie(data.total))
      })
};

export const setPremiers = (premieres) => ({
  type: 'SET_PREMIERS',
  payload: premieres,
});

export const setPremPage = (pagePrem) => ({
  type: 'PAGE_NUMBER_PREMIER',
  payload: pagePrem,
});

export const setTotalPrem = (totalPremiers) => ({
  type: 'TOTAL_PREMIERS',
  payload: totalPremiers,
});

export const fetchPremiers = (year, month) => (dispatch) => {
  const monthNow = new Date().toLocaleString('en', { month: 'long' }).toLocaleUpperCase();
  const yearNow = new Date ().getFullYear()

  axios.get(`${urlFilms}/films/premieres?year=${year ? year : yearNow}&month=${month ? month : monthNow}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': `application/json`}})
      .then(({data}) => {
        dispatch(setPremiers(data.items))
        dispatch(setTotalPrem(data.total))
      })
};