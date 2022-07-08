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

export const fetchMovies = (current, type, genre, country) => (dispatch) => {

  axios.get(`${urlFilms}/films?page=${current}&type=${type}&genres=${genre}&countries=${country}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setMovie(data.items))
        dispatch(setTotalMovie(data.total))
      })
};