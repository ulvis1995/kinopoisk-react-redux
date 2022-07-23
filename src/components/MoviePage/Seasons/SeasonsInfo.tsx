import React, {useState} from 'react';

import {useTypedSelector} from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

import './seasons.scss';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SeasonItem } from '../../types';
import { SeasonsProps } from '../../typesProps';

const SeasonsInfo: React.FC<SeasonsProps> = ({id}) => {
  const {setSeasonInfo, fetchSeasonList} = useActions ()
  const [seasonStatus, setStatus] = useState<boolean> (false); 
  const {seasonInfo, seasonsList} = useTypedSelector(({infoAboutFilm}) => infoAboutFilm);


  const numberOfEpisodes: number = seasonsList.reduce((sum: number, season: SeasonItem) => {
    return sum + season?.episodes?.length
    }, 0); 

  const onClickSeason = () => {
    setStatus(seasonStatus ? false : true)
  };
  
  React.useEffect (() => {
    setSeasonInfo(seasonStatus)
  }, [seasonStatus]);

  React.useEffect (() => {
    fetchSeasonList(id)
  }, [seasonInfo]);

  interface DataTypeSeason {
    key: number,
    number: number,
    release: string | null,
    name: string
  }

  const dataSource = (obj: SeasonItem): DataTypeSeason [] => {
    return obj.episodes.map((item, index)  => {
      return ({
        key: index,
        number: item.episodeNumber,
        name: `${item.nameRu !== null ? item.nameRu : ''}  ${item.nameEn !== null ? item.nameEn : ''}`,
        release: item.releaseDate
      })
    })
  } 

  const columns: ColumnsType<DataTypeSeason> = [
    {
      title: 'N',
      dataIndex: 'number',
      key: 'number',
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
      render: (text) => new Date(text).toLocaleDateString()
    },
  ];

  return (
     <div className='film-season'>
        <div className='film-season-start'>
        <p>Подробнее о сезонах</p>
        {seasonInfo === false 
          ?<button className='button button-down' onClick={onClickSeason}>&#10094;</button>
          :<button className='button button-up' onClick={onClickSeason}>&#10094;</button>}
        </div>
        {seasonInfo 
          ? <div className='season-block'>
              <p>Сезоны  {seasonsList.length} - количество серий {numberOfEpisodes}</p>
              {seasonsList.map(season => (
                <div className='season-block-item' key={`${season.number}_${season.episodes.length}`}>
                <p>Сезон {season.number} - количество серий {season.episodes.length}</p>
                <Table dataSource={dataSource(season)} columns={columns}
                  className='season-table' 
                  pagination={false}/>
              </div>
              ))}
            </div>
          : ''}
      </div>
  )
};

export default SeasonsInfo;