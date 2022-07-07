import React from 'react';
import './person.scss'

function Person() {
  return (
    <div className='person-page-wrapper'>
    <div className='person-page-empty'></div>
    <div className='person-page-main'>
      <div className='person-page' >
        <div className='person-page-image-block'>
          <img className='person-page-img' src={`https://kinopoiskapiunofficial.tech/images/actor_posters/kp/10096.jpg`}
            alt={`Изображение: ${`Винс Гиллиган`}`} width='320px' />
            <div className='person-page-info'>
              <p className='person-page-name'>{`nameRu`}/{`nameEn`}</p>
              <p className='person-page-profession'>{`profession`}</p>
            </div>
        </div>
        <div className='person-page-textcontent'>
          <div className='person-about'>
            <div className='person-about-item'>
              <p>Дата рождения: </p>
              <span>{`1965-04-04`}</span>
            </div>
            {/* если есть дата смерти указать условия высвечивания данной строки */}
            {<div className='person-about-item'>
              <p>Дата смерти: </p>
              <span>{`1965-04-04`}</span>
            </div>}
            {
              // если есть дата смерти, то вычислить разницу, если нет, то текущая дата минус дата рождения 
              <div className='person-about-item'>
              <p>Возраст: </p>
              <span>{`1965-04-04`}</span>
            </div>}
            <div className='person-about-item'>
              <p>Рост: </p>
              <span>{`174`}</span>
            </div>
            <div className='person-about-item'>
              <p>Место рождения: </p>
              <span>{`Манхэттэн, Нью-Йорк, США`}</span>
            </div>
            <div className='person-about-item'>
              <p>Интересные факты: </p>
              <span>{`Полное имя - Роберт Джон Дауни младший (Robert John Downey Jr.).`}</span>
            </div>
          </div>
          <div className='person-films'>
            <p>Фильмы</p>
          </div>
        </div>
      </div>
    </div>
    <div className='person-page-empty-footer'></div>
  </div>
  )
}

export default Person