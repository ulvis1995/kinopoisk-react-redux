import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FilmCartMenu from '../Film-cart-menu/FilmCartMenu';
import './main.scss';
import token  from '../../token.jsx';
import { Pagination, Select } from 'antd';
const { Option } = Select;


function Main() {
  const [movie, setMovie] = useState([]);
  const [genresArr, setGenresArr] = useState([]);
  const [countryArr, setCountryArr] = useState([]);
  const [current, setCurrent] = useState(1);
  const [totalMovie, setTotal] = useState (400);
  const [typeMovie, setTypeMovie] = useState ('ALL');
  const [genreMovie, setGenreMovie] = useState ('');
  const [countryMovie, setCountryMovie] = useState ('')

  const urlFilms = 'https://kinopoiskapiunofficial.tech/api/v2.2/films'
  const genresArray = (obj) => {
    return obj.map(i => i.genre).join(', ')
  }

  const onChange = (page) => {
    setCurrent(page);
  };

  const handleChange = (value) => {
    return setTypeMovie(value);
  };

  const handleChangeGenre = (value) => {
    return setGenreMovie(value)
  }

  useEffect (() => {
    const LoadMovie = async () => {
      const response = await axios.get(
        `${urlFilms}?page=${current}&type=${typeMovie}&genres=${genreMovie}`,
        {headers: {
          'X-API-KEY': `${token}`,
          'Content-Type': 'application/json'}}
      )
      setMovie(response.data.items)
      setTotal(response.data.total)

      const responseFilters = await axios.get(
        `${urlFilms}/filters`,
        {headers: {
          'X-API-KEY': `${token}`,
          'Content-Type': 'application/json'}}
      )

      const genres = responseFilters.data.genres.filter(item => item.genre !== '')

      setGenresArr(genres)
      setCountryArr(responseFilters.data.country)
    };

    LoadMovie();
  }, [current, typeMovie, genreMovie])

  console.log(movie)

  return (
    <div className='main-wrapper'>
      <div className='main-empty'></div>
        <div className='main-filters'>
          <Select className='main-select-genre'
          placeholder="Жанр"
          onChange={handleChangeGenre}
          >
            {genresArr.map((item, index) => 
              <Option value={item.id} key={index}>{item.genre}</Option>)}
          </Select>
          <Select className='main-select-type'
            placeholder="Тип (кино, сериал...)"
            onChange={handleChange}
          >
            <Option value="ALL">Все</Option>
            <Option value="FILM">Фильмы</Option>
            <Option value="TV_SHOW">ТВ-Шоу</Option>
            <Option value="TV_SERIES">ТВ-сериалы</Option>
            <Option value="MINI_SERIES">Мини-сериалы</Option>
          </Select>
        </div>
        <div className='main'>
          {movie.map(item => <FilmCartMenu 
            key={item.kinopoiskId+item.year}
            id={item.kinopoiskId}
            nameRu={item.nameRu}
            nameOriginal={item.nameOriginal}
            genres={genresArray(item.genres)}
            poster={item.posterUrlPreview}
            ratingKinopoisk={item.ratingKinopoisk}
            type={item.type}/>)}
        </div>
        <div className='main-empty-footer'></div>
        {totalMovie>20 
        ? <Pagination className='pagination'
        current={current} onChange={onChange} total={totalMovie} 
        defaultPageSize={20} showSizeChanger={false}/>
        : ''}
    </div>
  )
};

export default Main;