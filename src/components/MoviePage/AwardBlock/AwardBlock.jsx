import React, { useState, useEffect } from 'react';
import './award.scss';
import { Table } from 'antd';
import awards from './awardLoad';

function AwardBlock({ idFilm, more}) {
  const [awardShow, setShowAw] = useState(false);
  const [awardsFilm, setAwards] = useState([]);

  const dataSource = awardsFilm.map ((item, index) => {
    return item = {
      key: index,
      numder: index + 1,
      award: item.name,
      nomination: item.nominationName,
      person: item.persons.map(i => i.nameRu).join(', '),
      result: item.win ? 'победа' : 'номинация'
    }
  })

  const columns = [
    {
      title: 'N',
      dataIndex: 'numder',
      key: 'numder',
    },
    {
      title: 'Премия',
      dataIndex: 'award',
      key: 'award',
    },
    {
      title: 'Номинация',
      dataIndex: 'nomination',
      key: 'nomination',
    },
    {
      title: 'Номинант',
      dataIndex: 'person',
      key: 'person',
    },
    {
      title: 'Результат',
      dataIndex: 'result',
      key: 'result',
    },
  ];

  const pagination = {
    defaultPageSize: 10,
    showSizeChanger: false
  };
  
  const onClickAward = () => {
    setShowAw(awardShow ? false : true);
  }
  
  const loadAward = async () => {
    const award = await awards (idFilm);
    setAwards(award);
  }

  useEffect (() => {
    loadAward();
  }, [more]);

  return (
    awardsFilm.length > 0 
      ? <div className='film-award'>
          <div className='film-award-start'><p>Количество наград: {awardsFilm.length}</p>
          {awardShow === false 
            ?<button className='button button-down' onClick={onClickAward}>&#10094;</button>
            :<button className='button button-up' onClick={onClickAward}>&#10094;</button>}
          </div>
          {awardShow 
            ? <div className='award-block'>
                <Table dataSource={dataSource} columns={columns}
                  pagination={pagination}
                  className='award-table'/>
              </div>
            : ''}
      </div>
      : ''

    
  )
};

export default AwardBlock;