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
        <ul className='header-menu-list'>
          <li className='header-menu-item header-menu-choice'>Главная</li>
          <li className='header-menu-item header-menu-top'>
            Топ →
            <ul className=' header-menu-top-list'>
              <li>Топ-250. Лучших</li>
              <li>Топ-100. Популярных</li>
              <li>Топ ожидаемых</li>
            </ul>
          </li>
          <li className='header-menu-item'>Персоналии</li>
          <li className='header-menu-item'>Премьеры и релизы</li>
        </ul>
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