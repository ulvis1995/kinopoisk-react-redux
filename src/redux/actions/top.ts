import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';
import { TopActionTypes } from '../types/top';
import { Dispatch } from 'redux';

export const setPageTop250 = (pageT250: number) => ({
  type: TopActionTypes.SET_PAGE_TOP_250,
  payload: pageT250,
});

export const setPageTopPopular = (pageTPopular: number) => ({
  type: TopActionTypes.SET_PAGE_TOP_POPULAR,
  payload: pageTPopular,
});

export const setPageTopAwait = (pageTAwait: number) => ({
  type: TopActionTypes.SET_PAGE_TOP_AWAIT,
  payload: pageTAwait,
});

export const setTopList = (topList: object[]) => ({
  type: TopActionTypes.TOP_LIST,
  payload: topList,
});

export const setTotalTop = (totalTop: number) => ({
  type: TopActionTypes.TOP_TOTAL,
  payload: totalTop,
});

export const setLoaded = (payload: any) => ({
  type: TopActionTypes.SET_LOADED,
  payload
})

export const fetchTop = (page: number, nameTop: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TopActionTypes.SET_LOADED,
    payload: false,
  });

  axios.get(
    `${urlFilms}/films/top?type=${nameTop}&page=${page}`,
    {headers: {
      'X-API-KEY': `${token}`,
      'Content-Type': 'application/json'}})
      .then(({data}) => {
        dispatch(setTotalTop(data.pagesCount * 20))
        dispatch(setTopList(data.films))
      })
}; 
