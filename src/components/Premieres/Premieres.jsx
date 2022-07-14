import React from 'react';
import { Link } from 'react-router-dom';
import FiltersPremier from '../Filters/FiltersPremier';
import { useSelector, useDispatch } from 'react-redux';
import { setMonth, setYear } from '../../redux/actions/filters';
import '../Main/main.scss';
import MainNone from '../Main/MainNone';
import genresArray from "../../functions/array";
import { Pagination } from 'antd';
import FilmCartMenu from '../Film-cart-menu/FilmCartMenu';
import { fetchPremiers, setPremPage } from '../../redux/actions/movieListParametr';
import { setMovieId } from '../../redux/actions/movieId';

function Premieres({activeLink}) {
  const dispatch = useDispatch();
  const {month, year} = useSelector(({filters}) => filters);
  const {premieres, pagePrem, totalPremiers} = useSelector (({movieListParametr}) => movieListParametr);

  const premieresArr = []
  for (let i=0; i < premieres.length; i+=20) {
    premieresArr.push(premieres.slice(i, i + 20))
  };

  console.log(premieresArr)

  const onSelectMonth = React.useCallback ((month) => {
    dispatch(setMonth(month))
  }, []);

  const onSelectYear = React.useCallback ((year) => {
    dispatch(setYear(year))
  }, []);

  React.useEffect (() => {
    dispatch(fetchPremiers(year, month))
  }, [year, month, activeLink]);

  const onClickid = React.useCallback ((id) => {
    dispatch(setMovieId(id))
  }, []);

  const onSelectCurrent = React.useCallback ((pagePrem) => {
    dispatch(setPremPage(pagePrem))
  }, []);

  return (
    <div className='main-wrapper'>
    <div className='main-empty'></div>
    <FiltersPremier
    setMonth={onSelectMonth}
    setYear={onSelectYear}
    month={month} year={year}
    />
    {premieres.length !== 0 
      ? <div className='main'>
        {premieresArr[pagePrem-1].map(item => 
        <Link  to={`/films/${item.kinopoiskId}`}
          key={item.kinopoiskId+item.year}
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
    
    {totalPremiers>20 && premieres.length !== 0
    ? <Pagination className='pagination'
    current={pagePrem} onChange={onSelectCurrent} total={totalPremiers} 
    defaultPageSize={20} showSizeChanger={false}/>
    : ''}
    <div className='main-empty-footer'></div>
  </div>
  )
}

export default Premieres;