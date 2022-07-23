export interface HeaderState {
  activePage: number,
  activeLink: string,
};

export enum HeaderActionTypes {
  SET_MENU_PAGE = 'SET_MENU_PAGE',
  SET_LINK = 'SET_LINK',
};

interface HeaderPage {
  type: HeaderActionTypes.SET_MENU_PAGE,
  payload: number,
};

interface HeaderLink {
  type: HeaderActionTypes.SET_LINK,
  payload: string,
};

export type HeaderAction = HeaderPage | HeaderLink;