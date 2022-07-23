import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';
import { PremieresActionTypes } from '../types/premieres';
import { Dispatch } from 'redux';

export const setPremiers = (premieres: object[]) => ({
  type: PremieresActionTypes.SET_PREMIERS,
  payload: premieres,
});

export const setPremPage = (pagePrem: number) => ({
  type: PremieresActionTypes.PAGE_NUMBER_PREMIER,
  payload: pagePrem,
});

export const setTotalPrem = (totalPremiers: number) => ({
  type: PremieresActionTypes.TOTAL_PREMIERS,
  payload: totalPremiers,
});

export const setLoaded = (payload: any) => ({
  type: PremieresActionTypes.SET_LOADED,
  payload
})

export const fetchPremiers = (year: number | null, month: string | null) => (dispatch: Dispatch) => {
  const monthNow = new Date().toLocaleString('en', { month: 'long' }).toLocaleUpperCase();
  const yearNow = new Date ().getFullYear();

  dispatch({
    type: PremieresActionTypes.SET_LOADED,
    payload: false,
  });

  axios.get(`${urlFilms}/films/premieres?year=${year ? year : yearNow}&month=${month ? month : monthNow}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': `application/json`}})
      .then(({data}) => {
        dispatch(setPremiers(data.items))
        dispatch(setTotalPrem(data.total))
      })
};