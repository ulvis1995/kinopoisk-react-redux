import React from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector'

import './filmAbout.scss';
import Slider from './Slider/Slider';
import AwardBlock from './AwardBlock/AwardBlock';
import Budget from './Budget/Budget';
import Similars from './Similars/Similars';
import SeasonsInfo from './Seasons/SeasonsInfo';
import Staff from './Staff/Staff';

import { useActions } from '../../hooks/useActions';
import { MovieProps } from '../typesProps';


const MovieFilmAbout: React.FC<MovieProps> = ({id, typeFilm}) => {
  const {setMovieAbout} = useActions ()
  const {movieAbout} = useTypedSelector(({movieId}) => movieId)

  const onClickMore = React.useCallback (() => {
    setMovieAbout(true)
  }, [id]);

  React.useEffect(()=>{
    return ()=> {setMovieAbout(false)}
  },[id])

  return (
  <div className='film-about'>
    {movieAbout 
    ? <div className='film-info'>
        <div className='film-info-list'>
          <Staff id={id} />
          {/* {typeFilm !== 'FILM' ? <SeasonsInfo id={id}/> : null}  */}
          {/* <Slider id={id} movieAbout={movieAbout}/> */}
          {/* <AwardBlock id={id}/> */}
          {/* {typeFilm === 'FILM' ? <Budget id={id} movieAbout={movieAbout}/> : null} */}
          {/* <Similars id={id}/> */}
        </div>
      </div>
    :<button className='film-button'
      onClick={onClickMore}>
      Подробнее...
     </button>}
  </div>

  )
};

export default MovieFilmAbout;