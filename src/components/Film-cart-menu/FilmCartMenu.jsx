import React from 'react';
import './filmCartMenu.scss'


function FilmCartMenu({id, nameRu, nameOriginal, poster, ratingKinopoisk, genres, type}) {
  return (
    <div className='film-cart-menu' data-type={type}>
      <div className='film-cart-img-block'> 
        <img  className='film-cart-img' 
          src={poster} width='250px' height='375px' alt={nameRu}/>
        <span className='film-cart-point'>
          {ratingKinopoisk !== null ? ratingKinopoisk : '**'}
        </span>
      </div>
      <div className='film-cart-info'>
        <p className='film-cart-name'>{nameRu}/{nameOriginal}</p>
        <p className='film-cart-genre'>{genres}</p>
      </div>
    </div>
  )
};

export default FilmCartMenu;