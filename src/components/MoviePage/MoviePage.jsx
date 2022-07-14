import React from 'react';
import './moviePage.scss';
import genresArray from "../../functions/array";
import countryArray from '../../functions/arrayCountre';
import MovieFilmAbout from './MovieFilmAbout';

import { useSelector, useDispatch } from 'react-redux';
import { fetchMoviePage } from '../../redux/actions/movieId';

function MoviePage() {
  const dispatch = useDispatch();
  const {id, moviePage} = useSelector(({movieId}) => movieId);

  React.useEffect (() => {
    dispatch(fetchMoviePage(id))
  }, [id]);

  return (
    <div className='movie-page-wrapper'>
      <div className='movie-page-empty'></div>
      <div className='movie-page-main'>
        <div className='movie-page' >
          <div className='movie-page-image-block'>
            <img className='movie-page-img' src={moviePage.posterUrl}
              alt={`Изображение: ${moviePage.nameRu}`} width='320px' />
              <div className='movie-page-info'>
                <p className='movie-page-name'>{moviePage.nameRu}/{moviePage.nameOriginal}</p>
                <p className='movie-page-genre'>{genresArray(moviePage.genres)}</p>
              </div>
          </div>
          <div className='movie-page-textcontent'>
            <div className='movie-rating'>
              {moviePage.ratingKinopoisk 
                ? <div className='movie-rating-item'>
                  <p>{moviePage.ratingKinopoisk}</p>
                  <span>{moviePage.ratingKinopoiskVoteCount} оценки</span>
                </div>
                : <div className='movie-rating-item'>
                    <p>Рейтинг отсутствует</p>
                  </div>}
              {moviePage.ratingImdb 
                ? <div className='movie-rating-item'>
                    <p>{moviePage.ratingImdb} imdb</p>
                    <span>{moviePage.ratingImdbVoteCount} оценки</span>
                  </div>
                : <div className='movie-rating-item'>
                    <p>Рейтинг отсутствует</p>
                  </div>}    
            </div>
            <h2 className='slogan'>{moviePage.slogan}</h2>
            <div className='movie-description'>
              <p>{(moviePage.description === null && moviePage.editorAnnotation === null )
                    ? ''
                    : `${moviePage.description !== null ? moviePage.description : ''} 
                        ${moviePage.editorAnnotation !== null ? moviePage.editorAnnotation : ''}`}
              </p>
            </div>
            <div className='movie-stats'>
              <div className='movie-stats-item'>
                <span>Тип</span>
                <p>{moviePage.type}</p>
              </div>
              <div className='movie-stats-item'>
                <span>Страна</span>
                <p>{countryArray(moviePage.countries)}</p>
              </div>
              {moviePage.ratingAgeLimits !== null
                ? <div className='movie-stats-item'>
                    <span>Ценз</span>
                    <p>{moviePage.ratingAgeLimits}</p>
                  </div>
                : ''}
              {moviePage.type === 'FILM' 
                ?<div className='movie-stats-item'>
                  <span>Год выпуска</span>
                  <p>{moviePage.year}</p>
                </div>
                : ''}
              {moviePage.type === ('TV_SERIES' || 'TV_SHOW' || 'MINI_SERIES') 
                ?<div className='movie-stats-item'>
                  <span>Годы выпуска</span>
                  <p>{moviePage.startYear}-{moviePage.endYear ? moviePage.endYear : ''}</p>
                </div>
                : <div className='movie-stats-item'>
                    <span>Длительность</span>
                    <p>{moviePage.filmLength !== null ? moviePage.filmLength : '-'}</p>
                  </div>}
            </div>
          </div>
        </div>
        <MovieFilmAbout id={id} typeFilm={moviePage.type}/>
      </div>
      <div className='movie-page-empty-footer'></div>
    </div>
  )
};

export default MoviePage;