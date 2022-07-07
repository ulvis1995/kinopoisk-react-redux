import React, {useState} from 'react';
import './filmAbout.scss';
import Slider from './ImageSlider/Slider';
import AwardBlock from './AwardBlock/AwardBlock';
import Similars from './Similars/Similars';
import SeasonsInfo from './Seasons/SeasonsInfo';

function MovieSeriesAbout({idFilm, handleId}) {
  const [more, setMore] = useState(false);

  const onClickMore = () => {
    setMore(true);
  };

  return (
    <div className='film-about'>
    {more 
    ? <div className='film-info'>
        <div className='film-info-list'>
          {/* <SeasonsInfo idFilm={idFilm} more={more}/> */}
          {/* <Slider idFilm={idFilm} more={more}/>
          <AwardBlock idFilm={idFilm} more={more}/>
          <Similars idFilm={idFilm} handleId={handleId} more={more}/> */}
        </div>
      </div>
    :<button className='film-button'
      onClick={onClickMore}>
      Подробнее...
     </button>}
  </div>
  )
};

export default MovieSeriesAbout;