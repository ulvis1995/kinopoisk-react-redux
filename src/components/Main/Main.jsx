import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FilmCartMenu from '../Film-cart-menu/FilmCartMenu';
import './main.scss';
import token  from '../../token'

function Main() {
  const [movie, setMovie] = useState([]);

  useEffect (() => {
    const LoadMovie = async () => {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films`,
        {headers: {
          'X-API-KEY': `${token}`,
          'Content-Type': 'application/json'}}
      )
      console.log(response.data)
    };

    LoadMovie();
  }, [movie])

  return (
    <div className='main-wrapper'>
      <div className='main-empty'></div>
      <div className='main'>
        <FilmCartMenu />
      </div>
      <div className='main-empty-footer'></div>
    </div>
  )
};

export default Main;