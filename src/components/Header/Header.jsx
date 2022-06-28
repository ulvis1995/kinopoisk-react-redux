import React from 'react';
import menu from "../../img/header/menu-svgrepo-com.svg";
import "./header.scss";

import { Input } from 'antd';
const { Search } = Input;

function Header() {
  const onSearch = (value) => console.log(value);
  
  return (
    <div className='header-wrapper'>
    <header className='header'>
      <div className='header-menu'>
        <img src={menu} alt='Меню'/>
        <p>MovieSearch</p>
      </div>
      <Search className='header-seach'
      placeholder="Фильмы, сериалы, персоны"
      allowClear
      onSearch={onSearch}
    />
    </header>
    </div>
  )
};

export default Header;