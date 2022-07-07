import React from 'react';
import './moviePage.scss';
import genresArray from "../../functions/array";
import countryArray from '../../functions/arrayCountre';
import { useEffect, useState } from 'react';
import token  from '../../apiData/token';
import urlFilms from '../../apiData/urlFilms';
import axios from 'axios';
import MovieFilmAbout from './MovieFilmAbout';

function MoviePage({idFilm, handleId}) {
  const [pageMId, setPageMovie] = useState([]);

  useEffect (() => {
    const pageMovie = async () => {
      const response = await axios.get(
        `${urlFilms}/films/${idFilm}`,
        {headers: {
          'X-API-KEY': `${token}`,
          'Content-Type': 'application/json'}}
      )
      setPageMovie(response.data)
    };
    pageMovie();
  }, [idFilm]);

  return (
    <div className='movie-page-wrapper'>
      <div className='movie-page-empty'></div>
      <div className='movie-page-main'>
        <div className='movie-page' >
          <div className='movie-page-image-block'>
            <img className='movie-page-img' src={pageMId.posterUrl}
              alt={`Изображение: ${pageMId.nameRu}`} width='320px' />
              <div className='movie-page-info'>
                <p className='movie-page-name'>{pageMId.nameRu}/{pageMId.nameOriginal}</p>
                <p className='movie-page-genre'>{genresArray(pageMId.genres)}</p>
              </div>
          </div>
          <div className='movie-page-textcontent'>
            <div className='movie-rating'>
              {pageMId.ratingKinopoisk 
                ? <div className='movie-rating-item'>
                  <p>{pageMId.ratingKinopoisk}</p>
                  <span>{pageMId.ratingKinopoiskVoteCount} оценки</span>
                </div>
                : <div className='movie-rating-item'>
                    <p>Рейтинг отсутствует</p>
                  </div>}
              {pageMId.ratingImdb 
                ? <div className='movie-rating-item'>
                    <p>{pageMId.ratingImdb} imdb</p>
                    <span>{pageMId.ratingImdbVoteCount} оценки</span>
                  </div>
                : <div className='movie-rating-item'>
                    <p>Рейтинг отсутствует</p>
                  </div>}    
            </div>
            <h2 className='slogan'>{pageMId.slogan}</h2>
            <div className='movie-description'>
              <p>{(pageMId.description === null && pageMId.editorAnnotation === null )
                    ? ''
                    : `${pageMId.description !== null ? pageMId.description : ''} 
                        ${pageMId.editorAnnotation !== null ? pageMId.editorAnnotation : ''}`}
              </p>
            </div>
            <div className='movie-stats'>
              <div className='movie-stats-item'>
                <span>Тип</span>
                <p>{pageMId.type}</p>
              </div>
              <div className='movie-stats-item'>
                <span>Страна</span>
                <p>{countryArray(pageMId.countries)}</p>
              </div>
              {pageMId.ratingAgeLimits !== null
                ? <div className='movie-stats-item'>
                    <span>Ценз</span>
                    <p>{pageMId.ratingAgeLimits}</p>
                  </div>
                : ''}
              {pageMId.type === 'FILM' 
                ?<div className='movie-stats-item'>
                  <span>Год выпуска</span>
                  <p>{pageMId.year}</p>
                </div>
                : ''}
              {pageMId.type === ('TV_SERIES' || 'TV_SHOW' || 'MINI_SERIES') 
                ?<div className='movie-stats-item'>
                  <span>Годы выпуска</span>
                  <p>{pageMId.startYear}-{pageMId.endYear ? pageMId.endYear : ''}</p>
                </div>
                : <div className='movie-stats-item'>
                    <span>Длительность</span>
                    <p>{pageMId.filmLength !== null ? pageMId.filmLength : '-'}</p>
                  </div>}
            </div>
          </div>
        </div>
        <MovieFilmAbout idFilm={idFilm} handleId={handleId}/>
      </div>
      {/* {pageMId.type === ('TV_SERIES' || 'TV_SHOW' || 'MINI_SERIES')
        ? <div className='movie-seasons'>
            <h3>Количество сезонов: 5</h3>

          </div>
        : ''} */}
        
      <div className='movie-page-empty-footer'></div>
    </div>
  )
};

export default MoviePage;