import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FilmCartMenu from '../Film-cart-menu/FilmCartMenu';
import './main.scss';
import { Pagination } from 'antd';
import MainNone from './MainNone';
import Filters from '../Filters/Filters';
import genresArray from "../../functions/array";
import { setSortByCountry, setSortByGenre, setSortByType } from '../../redux/actions/filters';
import { fetchFilters } from '../../redux/actions/filtersValue';
import { fetchMovies, setCurrent } from '../../redux/actions/movieListParametr';

function Main({handleId}) {
  const dispatch = useDispatch();
  const {type, genre, country} = useSelector(({filters}) => filters);
  const {countryValue, genresValue} = useSelector(({filtersValue}) => filtersValue);
  const {current, movie, totalMovie} = useSelector(({movieParametr}) => movieParametr);

  React.useEffect (() => {
    dispatch(fetchMovies(current, type, genre, country))
  }, [current, type, genre, country]);

  React.useEffect (() => {
    dispatch(fetchFilters(countryValue, genresValue))
  }, []);

  React.useEffect (() => {
    dispatch(setSortByType(type, genre, country))
  }, [type, genre, country]);

  const onSelectType = React.useCallback ((type) => {
    dispatch(setSortByType(type))
  }, []);

  const onSelectGenre = React.useCallback ((genre) => {
    dispatch(setSortByGenre(genre))
  }, []);

  const onSelectCountry = React.useCallback ((country) => {
    dispatch(setSortByCountry(country))
  }, []);

  const onSelectCurrent = React.useCallback ((current) => {
    dispatch(setCurrent(current))
  }, []);

  return (
    <div className='main-wrapper'>
      <div className='main-empty'></div>
      <Filters 
      genresArr={genresValue} 
      countryArr={countryValue}
      typeMovie={type}
      setTypeMovie={onSelectType}
      setGenreMovie={onSelectGenre}
      setCountryMovie={onSelectCountry}
      />
      {movie.length !== 0 
        ? <div className='main'>
          {movie.map(item => 
          <Link  to={`films/${item.kinopoiskId}`}
            key={item.kinopoiskId+item.year}
            >
            <FilmCartMenu onClickid={handleId}
              nameRu={item.nameRu}
              nameOriginal={item.nameOriginal}
              genres={genresArray(item.genres)}
              poster={item.posterUrlPreview}
              ratingKinopoisk={item.ratingKinopoisk}
              type={item.type}
              id={item.kinopoiskId}/>
          </Link>)}
        </div>
        : <MainNone/>}
      
      {totalMovie>20 && movie.length !== 0
      ? <Pagination className='pagination'
      current={current} onChange={onSelectCurrent} total={totalMovie} 
      defaultPageSize={20} showSizeChanger={false}/>
      : ''}
      <div className='main-empty-footer'></div>
    </div>
  )
};

export default Main;