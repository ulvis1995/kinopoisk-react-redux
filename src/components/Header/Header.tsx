import React from 'react';
import { Link } from 'react-router-dom';

import {useTypedSelector} from '../../hooks/useTypedSelector'

import menu from '../../img/header/menu-svgrepo-com.svg';
import {menuList} from './headerData';
import './header.scss';

import { Input } from 'antd';
import { useActions } from '../../hooks/useActions';
const { Search } = Input;

const Header: React.FC = () => {  
  const {setSearch, setPagePoint, setPageLink} = useActions ()
  const {activePage} = useTypedSelector(({header}) => header);

  const onSearch = (search: string) => setSearch(search);

  const onClickPage = React.useCallback( (index: number) => {
    setPagePoint(index)
  }, []);

  const onClickLink = React.useCallback( (value: string) => {
    setPageLink(value)
  }, []);
  
  return (
    <div className='header-wrapper'>
    <header className='header'>
      <div className='header-menu'>
        <Link to={{pathname: `/`}}>
          <img src={menu} alt='Меню'/>
          <p>MovieSearch</p>
        </Link>
        <ul className='header-menu-list'>
          {menuList && menuList.map((item: {link: string, name: string}, index: number) => (
            <li className={
              activePage === index 
                ? 'header-menu-item choice' 
                : 'header-menu-item'}
                key={index}
                onClick={() => onClickPage(index)}>
              <Link to={item.link}
              onClick={() => onClickLink(item.link)}>{item.name}</Link>
            </li>
            ))}
        </ul>
      </div>
      <Search className='header-seach'
        placeholder="Поиск фильмов и сериалов"
        allowClear
        onSearch={onSearch}/>
    </header>
    </div>
  )
};

export default Header;