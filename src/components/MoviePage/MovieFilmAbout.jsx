import React, { useState } from 'react';
import './filmAbout.scss';
import './AwardBlock/award.scss'
import Slider from './ImageSlider/Slider'
import AwardBlock from './AwardBlock/AwardBlock';
import Budget from './Budget/Budget';
import Similars from './Similars/Similars';

function MovieFilmAbout({idFilm, handleId}) {
  const [more, setMore] = useState(false);

  const onClickMore = () => {
    setMore(true);
  }

  return (
  <div className='film-about'>
    {more 
    ? <div className='film-info'>
        <div className='film-info-list'>
          {/* <Slider idFilm={idFilm} more={more}/>
          <AwardBlock idFilm={idFilm} more={more}/>
          <Budget idFilm={idFilm} more={more}/> */}
          <Similars idFilm={idFilm} handleId={handleId} more={more}/>
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