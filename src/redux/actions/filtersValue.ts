import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';
import { Dispatch } from 'redux';
import { FilterValueActionTypes } from '../types/filterValue';

export const setGenresValue = (genresValue: object[]) => ({
  type: FilterValueActionTypes.GENRES_VALUE,
  payload: genresValue,
});

export const setCountriesValue = (countryValue: object[]) => ({
  type: FilterValueActionTypes.COUNTRY_VALUE,
  payload: countryValue,
});

export const fetchFilters = () => (dispatch: Dispatch) => {

  axios.get(`${urlFilms}/films/filters`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setGenresValue(data.genres
          .filter((item: { genre: string; }) => item.genre !== '')
          .sort((a: { genre: string; }, b: { genre: string; })=>a.genre.localeCompare(b.genre))
          ))
        dispatch(setCountriesValue(data.countries
          .filter((item: { country: string; }) => item.country !== '')
          .sort((a: { country: string; }, b: { country: string; })=>a.country.localeCompare(b.country))
          ))
      })
};