import React from 'react';

import { FiltersPremieresProps } from '../typesProps';
import { filterMonth, filterYear } from './filterArray';
import '../Main/main.scss';

import { Select } from 'antd';
const { Option } = Select;

const FiltersPremier: React.FC<FiltersPremieresProps> = ({setMonth, setYear, year, month}) => {
  const monthNow = new Date().toLocaleString('en', { month: 'long' }).toLocaleUpperCase();
  const yearNow = new Date ().getFullYear();

  const handleChangeMonth = (value: string | null) => {
    return setMonth(value);
  };

  const handleChangeYear = (value: number | null) => {
    return setYear (value)
  };

  return (
    <div className='main-filters'>
      <Select className='main-select-item'
        placeholder="Месяц премьеры"
        onChange={handleChangeMonth}  allowClear
        onClear={()=> handleChangeMonth(monthNow)}
        value={month}>
        {filterMonth.map((item: {value: string, text: string}, index: number) => 
          <Option value={item.value} key={index}>{item.text}</Option>)}
      </Select>
      <Select className='main-select-item'
        showSearch value={year}
        optionFilterProp="children"
        placeholder="Год премьеры" allowClear
        onChange={handleChangeYear}
        onClear={()=> handleChangeYear(yearNow)}
      >
        {filterYear.map((item: number, index: number) => 
          <Option value={item} key={index}>{item}</Option>)}
      </Select>
    </div>
  )
};

export default FiltersPremier;