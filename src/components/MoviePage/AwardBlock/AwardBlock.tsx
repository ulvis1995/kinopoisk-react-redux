import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {useTypedSelector} from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

import './award.scss';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataTypeAward } from '../../typeDataTable';
import { AwardProps } from '../../typesProps';

const AwardBlock: React.FC<AwardProps> = ({ id}) => {
  const {setStaffId, setAwardShow, fetchAwards} = useActions ()
  const [awards, setShowAw] = useState<boolean>(false);
  const {awardShow, awardsFilm} = useTypedSelector(({infoAboutFilm}) => infoAboutFilm);

  const data: DataTypeAward[] = awardsFilm.map ((item, index) => {
    return ({
      key: index,
      number: index + 1,
      award: item.name,
      nomination: item.nominationName,
      persons: item.persons,
      result: item.win ? 'победа' : 'номинация'
    })
  });

  const columns: ColumnsType<DataTypeAward> = [
    {
      title: 'N',
      dataIndex: 'number',
      key: 'number',
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
      dataIndex: 'persons',
      key: 'persons',
      render: (_, {persons}) => {
        const onClick = (idStaff: number) => {
          setStaffId(idStaff)
        }
        return persons.map(i => 
           (<Link to={{pathname: `/staff/${i.kinopoiskId}`}}
                      className='item-name' key={i.kinopoiskId}
                      onClick={() => onClick(i.kinopoiskId)}>
                    {`${i.nameRu}  `}
                  </Link>)
        )
      }
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
    setShowAw(awards ? false : true);
  };

  React.useEffect (() => {
    setAwardShow(awards)
  }, [awards]);

  React.useEffect (() => {
    fetchAwards(id)
  }, [awardShow]);

  return ( 
    <div className='film-award'>
      <div className='film-award-start'>
      <p>Награды</p>
      {awardShow === false 
        ?<button className='button button-down' onClick={onClickAward}>&#10094;</button>
        :<button className='button button-up' onClick={onClickAward}>&#10094;</button>}
      </div>
      {awardShow 
        ? <div className='award-block'>
            <p>Количество: {awardsFilm.length}</p>
            <Table dataSource={data} columns={columns}
              pagination={pagination} bordered={true}
              className='award-table'/>
          </div>
        : ''}
    </div>
  )
};

export default AwardBlock;