import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import FilmCartMenu from '../Film-cart-menu/FilmCartMenu';
import './main.scss';
import { Pagination } from 'antd';
import MainNone from './MainNone';
import Filters from '../Filters/Filters';
import LoadFilters from '../../apiData/LoadFilters';
import LoadMovie from '../../apiData/LoadMovie';
import genresArray from "../../functions/array";

function Main({handleId}) {
  const [movie, setMovie] = useState([]);
  const [current, setCurrent] = useState(1);
  const [totalMovie, setTotal] = useState (400);
  
  const [genresArr, setGenresArr] = useState([]);
  const [countryArr, setCountryArr] = useState([]);
  
  const [typeMovie, setTypeMovie] = useState ('ALL');
  const [genreMovie, setGenreMovie] = useState ('');
  const [countryMovie, setCountryMovie] = useState ('');


  const load = async()=>{
    const movie = await LoadMovie(current, typeMovie, genreMovie, countryMovie);
    setMovie(movie.items)
    setTotal(movie.total) 
    const filt = await LoadFilters()
    setGenresArr(filt.genres)
    setCountryArr(filt.countres)
  };

  useEffect ( () => {
    load();
  }, [current, typeMovie, genreMovie, countryMovie])

  const onChange = (page) => {
    setCurrent(page);
  };



  return (
    <div className='main-wrapper'>
      <div className='main-empty'></div>
      <Filters 
      genresArr={genresArr} 
      countryArr={countryArr}
      typeMovie={typeMovie}
      setTypeMovie={setTypeMovie}
      setGenreMovie={setGenreMovie}
      setCountryMovie={setCountryMovie}
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
      current={current} onChange={onChange} total={totalMovie} 
      defaultPageSize={20} showSizeChanger={false}/>
      : ''}
      <div className='main-empty-footer'></div>
    </div>
  )
};

export default Main;