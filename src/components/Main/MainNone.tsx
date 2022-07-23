import React from 'react';
import movienone from '../../img/Movie-none/free-icon-movie-camera-1026842.png';
import './main.scss';

const MainNone: React.FC = () => {
  return (
    <div className='main-none'>
      <p>Результатов с данными параметрами не обнаружено. Пожалуйста, скорректируйте запрос
      </p>
      <img src={movienone} alt='Камера'/> 
    </div>
  )
};

export default MainNone;