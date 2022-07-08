import React from 'react';
import '../Main/main.scss';
import { Select } from 'antd';
const { Option } = Select;

function Filters({genresArr, countryArr, setTypeMovie, setGenreMovie, 
  setCountryMovie, genre, type, country}) {
  const filterType = [
    {value: 'ALL', text: 'Все'},
    {value: 'FILM', text: 'Фильмы'},
    {value: 'TV_SHOW', text: 'ТВ-Шоу'},
    {value: 'TV_SERIES', text: 'ТВ-сериалы'},
    {value: 'MINI_SERIES', text: 'Мини-сериалы'}
  ]
    
  const handleChangeType = (value) => {
    return setTypeMovie(value);
  };

  const handleChangeGenre = (value) => {
    return setGenreMovie(value)
  };

  const handleChangeCountry = (value) => {
    return setCountryMovie (value)
  }

  return (
    <div className='main-filters'>
      <Select className='main-select-item'
      placeholder="Жанр" allowClear
      onChange={handleChangeGenre}
      value={genre} 
      onClear={()=> handleChangeGenre(null)}
      >
        {genresArr && genresArr.map((item, index) => 
          <Option value={item.id} key={index}>{item.genre}</Option>)}
      </Select>
      <Select className='main-select-item'
        placeholder="Тип (кино, сериал...)"
        onChange={handleChangeType}  allowClear
        onClear={()=> handleChangeType(null)}
        value={type}
      >
        {filterType.map((item, index) => 
          <Option value={item.value} key={index}>{item.text}</Option>)}
      </Select>
      <Select className='main-select-item'
        showSearch value={country}
        optionFilterProp="children"
        filterOption={(input, option) => option.children.includes(input)}
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
        placeholder="Страна" allowClear
        onChange={handleChangeCountry}
        onClear={()=> handleChangeCountry(null)}
      >
        {countryArr && countryArr.map((item, index) => 
          <Option value={item.id} key={index}>{item.country}</Option>)}
      </Select>
    </div>
  )
};

export default Filters;