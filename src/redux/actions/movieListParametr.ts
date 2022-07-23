import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';
import { MovieListActionTypes } from '../types/movieList';
import { Dispatch } from 'redux';

export const setMovie = (movie: object[]) => ({
  type: MovieListActionTypes.MOVIE_LIST,
  payload: movie,
});

export const setCurrent = (current: number) => ({
  type: MovieListActionTypes.PAGE_NUMBER,
  payload: current,
});

export const setTotalMovie = (totalMovie: number) => ({
  type: MovieListActionTypes.TOTAL_MOVIE,
  payload: totalMovie,
});

export const setLoaded = (payload: any) => ({
  type: MovieListActionTypes.SET_LOADED,
  payload
})

export const fetchMovies = (current: number, type: string | null, genre: string | null, country: string | null, search: string | null) => (dispatch: Dispatch) => {
  dispatch({
    type: MovieListActionTypes.SET_LOADED,
    payload: false,
  });

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