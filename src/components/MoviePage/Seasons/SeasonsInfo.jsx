import React, {useState, useEffect} from 'react';
import './seasons.scss';
import { Table } from 'antd';
import seasons from './seasonsLoad';

function SeasonsInfo({idFilm, more}) {  
  const [seasonsShow, setShowSeas] = useState(false);
  const [seasonsList, setSeason] = useState([]);  

  const onClickSeason = () => {
    setShowSeas(seasonsShow ? false : true);
  }

  const loadSeason = async () => {
    const season = await seasons (idFilm);
    setSeason (season);
  }

  useEffect (() => {
    loadSeason();
  }, [more]);

  // const dataSource = seasonsList.episodes.map ((item, index) => {
  //   return item = {
  //     key: item.index,
  //     numder: item.index + 1,
  //     name: `${item.nameRu !== null ? item.nameRu : ''}/${item.nameEn !== null ? item.nameEn : ''}`,
  //     release: new Date(item.releaseDate).toLocaleDateString()
  //   }
  // })

  const dataSource = (obj) => {
    return obj.episodes.map((item, index) => {
      return item = {
        key: index,
        number: item.episodeNumber,
        name: `${item.nameRu !== null ? item.nameRu : ''}/${item.nameEn !== null ? item.nameEn : ''}`,
        release:item.releaseDate
      }
    })
  }

  const columns = [
    {
      title: 'N',
      dataIndex: 'numder',
      key: 'numder',
    },
    {
      title: 'Название серии',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Дата релиза',
      dataIndex: 'release',
      key: 'release',
    },
  ];

  return (
    seasonsList.length > 0 
      ? <div className='film-season'>
          <div className='film-season-start'><p>Сезоны  {seasonsList.length}</p>
          {seasonsShow === false 
            ?<button className='button button-down' onClick={onClickSeason}>&#10094;</button>
            :<button className='button button-up' onClick={onClickSeason}>&#10094;</button>}
          </div>
          {seasonsShow 
            ? <div className='season-block'>
                {seasonsList.map(season => (
                  <div className='season-block-item'>
                  <p>Сезон {season.number} - количество серий {season.episodes.length}</p>
                  <Table dataSource={dataSource(season)} columns={columns}
                    className='season-table'
                    pagination={false}/>
                </div>
                ))}
              </div>
            : ''}
      </div>
      : ''
  )
};

export default SeasonsInfo;