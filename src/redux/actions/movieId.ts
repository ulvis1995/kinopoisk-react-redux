import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';
import { MovieIdActionTypes } from '../types/movieId';
import { Dispatch } from 'redux';

export const setMovieId = (id: number) => ({
  type: MovieIdActionTypes.SET_MOVIE_ID,
  payload: id,
});

export const setMoviePage = (moviePage: object[]) => ({
  type: MovieIdActionTypes.SET_MOVIE_PAGE,
  payload: moviePage,
});

export const setMovieAbout = (movieAbout: boolean) => ({
  type: MovieIdActionTypes.SET_MOVIE_ABOUT,
  payload: movieAbout,
});

export const fetchMoviePage = (id: number) => (dispatch: Dispatch) => {

  axios.get(`${urlFilms}/films/${id}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': `application/json`}})
      .then(({data}) => {
        dispatch(setMoviePage(data))
      })
};

export const setStaffId = (staffId: number) => ({
  type: MovieIdActionTypes.SET_STAFF_ID,
  payload: staffId,
});