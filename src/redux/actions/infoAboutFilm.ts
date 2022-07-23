import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';
import { InfoFilmActionTypes } from '../types/infoAboutFilm';
import { Dispatch } from 'redux';

export const setSeasonInfo = (seasonInfo: boolean) => ({
  type: InfoFilmActionTypes.SET_SEASON_INFO,
  payload: seasonInfo,
});

export const setSeasonList = (seasonsList: object[]) => ({
  type: InfoFilmActionTypes.SET_SEASON_LIST,
  payload: seasonsList,
});

export const fetchSeasonList = (id: number) => (dispatch: Dispatch) => {

  axios.get(`${urlFilms}/films/${id}/seasons`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setSeasonList(data.items))
      })
};

export const setSliderIndex = (sliderIndex: number) => ({
  type: InfoFilmActionTypes.SET_SLIDER_INDEX,
  payload: sliderIndex,
});

export const setSliderImage = (sliderImage: object[]) => ({
  type: InfoFilmActionTypes.SET_SLIDER_IMAGE,
  payload: sliderImage,
});

export const fetchSliderImage = (id: number) => (dispatch: Dispatch) => {

  axios.get(`${urlFilms}/films/${id}/images?type=STILL&page=1`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setSliderImage(data.items))
      })
};

export const setAwardShow = (awardShow: boolean) => ({
  type: InfoFilmActionTypes.SET_AWARD_SHOW,
  payload: awardShow,
});

export const setAwards = (awardsFilm: object[]) => ({
  type: InfoFilmActionTypes.SET_AWARDS_FILM,
  payload: awardsFilm,
});

export const fetchAwards = (id: number) => (dispatch: Dispatch) => {

  axios.get(`${urlFilms}/films/${id}/awards`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setAwards(data.items))
      })
};

// export const setBox = (budget: object[]) => ({
//   type: InfoFilmActionTypes.SET_BOX,
//   payload: budget,
// });

// export const fetchBox = (id: number) => (dispatch: Dispatch) => {

//   axios.get(`${urlFilms}/films/${id}/box_office`,
//     {headers: {
//       'X-API-KEY': `${token}`,
//       'Content-Type': 'application/json'}})
//       .then(({data}) => {
//         dispatch(setBox(data.items))
//       })
// };