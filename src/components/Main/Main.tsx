import React from 'react';
import { Link } from 'react-router-dom';

import {useTypedSelector} from '../../hooks/useTypedSelector'

import './main.scss';
import FilmCartMenu from '../Film-cart-menu/FilmCartMenu';
import MainNone from './MainNone';
import Filters from '../Filters/Filters';
import LoadingBlock from '../LoadingBlock/LoadingBlock';
import genresArray from "../../functions/array";

import { Pagination } from 'antd';
import { useActions } from '../../hooks/useActions';

const Main: React.FC = () => {
  const {fetchMovies, fetchFilters, setSortByType, 
        setSortByGenre, setSortByCountry, setCurrent, 
        setMovieId} = useActions ();
        
  const {type, genre, country, search} = useTypedSelector(({filters}) => filters);
  const {countryValue, genresValue} = useTypedSelector(({filtersValue}) => filtersValue);
  const {current, movie, totalMovie, isLoaded} = useTypedSelector(({movieListParametr}) => movieListParametr);

  React.useEffect (() => {
    fetchMovies(current, type, genre, country, search);
  }, [current, type, genre, country, search]);

  React.useEffect (() => {
    fetchFilters()
  }, []);

  React.useEffect (() => {
    setSortByType(type)
  }, [type]);

  const onSelectType = React.useCallback ((type: string | null) => {
    setSortByType(type)
  }, []);

  const onSelectGenre = React.useCallback ((genre: string | null) => {
    setSortByGenre(genre)
  }, []);

  const onSelectCountry = React.useCallback ((country: string | null) => {
    setSortByCountry(country)
  }, []);

  const onSelectCurrent = React.useCallback ((current: number) => {
    setCurrent(current)
  }, []);

  const onClickid = React.useCallback ((id: number) => {
    setMovieId(id)
  }, []);

  return (
    <div className='main-wrapper'>
      <div className='main-empty'></div>
      {isLoaded
        ?<div>
        <Filters 
          genresArr={genresValue} 
          countryArr={countryValue} 
          genre={genre} type={type} country={country}
          setTypeMovie={onSelectType}
          setGenreMovie={onSelectGenre}
          setCountryMovie={onSelectCountry}/>
        {movie.length !== 0 
          ? <div className='main'>
            {movie.map(item => 
            <Link  to={`films/${item.kinopoiskId}`}
              key={`${item.kinopoiskId}_${item.year}`}
              >
              <FilmCartMenu onClickid={onClickid}
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
      </div>
      : <LoadingBlock/>}
      <div className='main-empty-footer'></div>
    </div>
  )
};

export default Main;