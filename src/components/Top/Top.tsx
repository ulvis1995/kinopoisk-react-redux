import React from 'react';
import { Link } from 'react-router-dom';

import {useTypedSelector} from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import './top.scss';
import FilmCartMenu from '../Film-cart-menu/FilmCartMenu';
import genresArray from "../../functions/array";

import { Pagination } from 'antd';
import LoadingBlock from '../LoadingBlock/LoadingBlock';
import { TopProps } from '../typesProps';

const Top: React.FC<TopProps> = ({activeLink}) =>  {
  const {fetchTop, setMovieId, setPageTop250, setPageTopPopular, setPageTopAwait} = useActions ()  
  const {pageT250, pageTPopular, pageTAwait, topList, totalTop, isLoaded} = useTypedSelector(({top}) => top);
  const nameTop = (): string => {
    if (activeLink === '/top-250best') {
      return 'TOP_250_BEST_FILMS'
    };
    if (activeLink === '/top-100popular') {
      return 'TOP_100_POPULAR_FILMS'
    };
    if (activeLink === '/top-await') {
      return 'TOP_AWAIT_FILMS'
    };
    return '/'
  };

  const nameTopPage = (): number => {
    if (activeLink === '/top-250best') {
      return pageT250
    };
    if (activeLink === '/top-100popular') {
      return pageTPopular
    };
    if (activeLink === '/top-await') {
      return pageTAwait 
    };
    return pageT250
  }
  const page = nameTopPage()

  React.useEffect (() => {

    fetchTop(nameTopPage(), nameTop())
  }, [pageT250, pageTPopular, pageTAwait, activeLink]);

  const onClickid = React.useCallback ((id: number) => {
    setMovieId(id)
  }, []);

  const onSelectPage = React.useCallback ((page: number) => {
    if (activeLink === '/top-250best') {setPageTop250(page)}
    if (activeLink === '/top-100popular') {setPageTopPopular(page)}
    if (activeLink === '/top-await') {setPageTopAwait(page)}
  }, [activeLink]);

  return (
    <div className='top-wrapper'>
    <div className='top-empty'></div>
    {isLoaded
      ?<div>
      <div className='top'>
        {topList?.map(item => 
        <Link  to={{pathname: `/films/${item.filmId}`}}
          key={`${item.filmId}_${item.year}`}
          >
          <FilmCartMenu onClickid={onClickid}
            nameRu={item.nameRu}
            nameOriginal={item.nameEn}
            genres={genresArray(item.genres)}
            poster={item.posterUrlPreview}
            ratingKinopoisk={item.rating}
            id={item.filmId}/>
        </Link>)}
      </div>
      
      {totalTop>20 && topList.length !== 0
      ? <Pagination className='pagination'
      current={page} onChange={onSelectPage} total={totalTop} 
      defaultPageSize={20} showSizeChanger={false}/>
      : ''}
    </div>
    : <LoadingBlock/>}
    <div className='top-empty-footer'></div>
  </div>
  )
}

export default Top