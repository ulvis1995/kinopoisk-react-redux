import React, { useEffect, useState } from 'react';
import './slider.scss';
import image from './sliderImage';

function Slider({idFilm, more}) {
  const [imageFilm, setImg] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const prevImgIndex = activeIndex > 0 ? activeIndex - 1 : imageFilm.length - 1;
  const nextImgIndex = activeIndex === imageFilm.length - 1 ? 0 : activeIndex + 1;

  const prevplusImgIndex =  activeIndex > 1 ? activeIndex - 2 
      : (activeIndex > 0 ? imageFilm.length - 1 : imageFilm.length - 2);
      
  const nextplusImgIndex = activeIndex === imageFilm.length - 1 ? 1 
      : (activeIndex + 2 === imageFilm.length ? 0 : activeIndex + 2);

  const onClicknextSlide = () => {
    setActiveIndex(activeIndex+1 === imageFilm.length - 1 ? 0 : activeIndex + 1)
  }

  const onClickpreviousSlide = () => {
    setActiveIndex(activeIndex-1 > 0 ? activeIndex - 1 : imageFilm.length - 1)
  }

  const loadSlider = async () => {
    const slider = await image (idFilm);
    setImg(slider);
  }

  useEffect (() => {
    loadSlider()
  }, [more]);
  
  return (
    imageFilm.length >0 
      ?<div className='film-item film-slider'>
        <a className="previous" onClick={onClickpreviousSlide}>&#10094;</a>
        <div className="item-slide"
          key={prevplusImgIndex}>
          <img src={imageFilm.length && imageFilm[prevplusImgIndex].previewUrl} 
            alt='Кадр из фильма' height='169px'/>
        </div>
        <div className="item-slide"
          key={prevImgIndex}>
          <img src={imageFilm.length && imageFilm[prevImgIndex].previewUrl} 
            alt='Кадр из фильма' height='169px'/>
        </div>
        <div className="item-slide"
          key={activeIndex}>
          <img src={imageFilm.length && imageFilm[activeIndex].previewUrl} 
            alt='Кадр из фильма' height='169px'/>
        </div>
        <div className="item-slide"
          key={nextImgIndex}>
          <img src={imageFilm.length && imageFilm[nextImgIndex].previewUrl} 
            alt='Кадр из фильма' height='169px'/>
        </div>
        <div className="item-slide"
          key={nextplusImgIndex}>
          <img src={imageFilm.length && imageFilm[nextplusImgIndex].previewUrl} 
            alt='Кадр из фильма' height='169px'/>
        </div>
        <a className="next" onClick={onClicknextSlide}>&#10095;</a>
      </div>
      : ''
  )
}

export default Slider;