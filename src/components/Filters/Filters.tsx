import React from 'react';

import { filterType } from './filterArray';
import { FiltersProps } from '../typesProps';
import '../Main/main.scss';

import { Select } from 'antd';
const { Option } = Select;


const Filters: React.FC<FiltersProps> = ({genresArr, 
  countryArr, setTypeMovie, setGenreMovie, 
  setCountryMovie, genre, type, country}) => {
    
  const handleChangeType = (value: string | null) => {
    return setTypeMovie(value);
  };

  const handleChangeGenre = (value: string | null) => {
    return setGenreMovie(value)
  };

  const handleChangeCountry = (value: string | null) => {
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
        {genresArr && genresArr.map((item: { id: number, genre: string}, index: number) => 
          <Option value={item.id} key={index}>{item.genre}</Option>)}
      </Select>
      <Select className='main-select-item'
        placeholder="Тип (кино, сериал...)"
        onChange={handleChangeType}  allowClear
        onClear={()=> handleChangeType(null)}
        value={type}
      >
        {filterType.map((item: { value: string, text: string}, index: number) => 
          <Option value={item.value} key={index}>{item.text}</Option>)}
      </Select>
      <Select className='main-select-item'
        showSearch value={country}
        optionFilterProp="children"
        placeholder="Страна" allowClear
        onChange={handleChangeCountry}
        onClear={()=> handleChangeCountry(null)}
      >
        {countryArr && countryArr.map((item: {id: number, country: string}, index: number) => 
          <Option value={item.id} key={index}>{item.country}</Option>)}
      </Select>
    </div>
  )
};

export default Filters;