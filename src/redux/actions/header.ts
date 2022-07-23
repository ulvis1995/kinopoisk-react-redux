import { HeaderActionTypes } from '../types/header';

export const setPagePoint = (activePage: number) => ({
  type: HeaderActionTypes.SET_MENU_PAGE,
  payload: activePage,
});

export const setPageLink = (activeLink: string) => ({
  type: HeaderActionTypes.SET_LINK,
  payload: activeLink,
});