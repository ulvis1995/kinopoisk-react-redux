import React from 'react';
import imgA from '../../img/exapmle/360.webp'
import './filmCartMenu.scss'


function FilmCartMenu() {
  return (
    <div className='film-cart-menu'>
      <div className='film-cart-img-block'> 
        <img  className='film-cart-img' src={imgA} width='250px' alt={'Matrix'}/> 
        {/* прокинуть название фильма в альт  */}
        <span className='film-cart-point'>7.6</span>
      </div>
      <div className='film-cart-info'>
        <p className='film-cart-name'>Матрица/Matrix</p>
        <p className='film-cart-genre'> Боевик, приключения, фантастика</p>
      </div>
    </div>
  )
};

export default FilmCartMenu;