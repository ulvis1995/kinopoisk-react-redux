import * as FilterActionCreator from './filters';
import * as FilterValueActionCreator from './filtersValue';
import * as HeaderActionCreator from './header';
import * as InfoAboutFilmActionCreator from './infoAboutFilm';
import * as MovieIdActionCreator from './movieId';
import * as MovieListActionCreator from './movieListParametr';
import * as PremieresActionCreator from './premieres';
import * as TopActionCreator from './top';


export default {
  ...FilterActionCreator,
  ...FilterValueActionCreator,
  ...HeaderActionCreator,
  ...InfoAboutFilmActionCreator,
  ...MovieIdActionCreator,
  ...MovieListActionCreator,
  ...PremieresActionCreator,
  ...TopActionCreator
}