import React from 'react';

import {useTypedSelector} from '../../../hooks/useTypedSelector'

import './slider.scss';
import { useActions } from '../../../hooks/useActions';
import { SliderProps } from '../../typesProps';

const Slider: React.FC<SliderProps> = ({id, movieAbout}) => {
  const {setSliderIndex, fetchSliderImage} = useActions ()
  const {sliderIndex, sliderImage} = useTypedSelector(({infoAboutFilm}) => infoAboutFilm);

  const prevImgIndex = sliderIndex > 0 ? sliderIndex - 1 : sliderImage.length - 1;
  const nextImgIndex = sliderIndex === sliderImage.length - 1 ? 0 : sliderIndex + 1;

  const prevplusImgIndex =  sliderIndex > 1 ? sliderIndex - 2 
      : (sliderIndex > 0 ? sliderImage.length - 1 : sliderImage.length - 2);
      
  const nextplusImgIndex = sliderIndex === sliderImage.length - 1 ? 1 
      : (sliderIndex + 2 === sliderImage.length ? 0 : sliderIndex + 2);

  const onClicknextSlide = React.useCallback (() => {
    setSliderIndex(sliderIndex+1 === sliderImage.length - 1 ? 0 : sliderIndex + 1)
  }, [sliderIndex]);

  const onClickpreviousSlide = React.useCallback (() => {
    setSliderIndex(sliderIndex-1 > 0 ? sliderIndex - 1 : sliderImage.length - 1)
  }, [sliderIndex]);

  React.useEffect (() => {
    fetchSliderImage(id)
  }, [movieAbout]);
  
  return (
    <React.Fragment>
      {sliderImage.length >1 
        ?<div className='film-item film-slider'>
          <a className="previous" onClick={onClickpreviousSlide}>&#10094;</a>
          <div className="item-slide"
            key={prevplusImgIndex}>
            <img src={sliderImage.length>0 ? sliderImage[prevplusImgIndex].previewUrl : ''} 
              alt='Кадр из фильма' height='169px'/>
          </div>
          <div className="item-slide"
            key={prevImgIndex}>
            <img src={sliderImage.length>0 ? sliderImage[prevImgIndex].previewUrl : ''} 
              alt='Кадр из фильма' height='169px'/>
          </div>
          <div className="item-slide"
            key={sliderIndex}>
            <img src={sliderImage.length>0 ? sliderImage[sliderIndex].previewUrl : ''} 
              alt='Кадр из фильма' height='169px'/>
          </div>
          <div className="item-slide"
            key={nextImgIndex}>
            <img src={sliderImage.length>0 ? sliderImage[nextImgIndex].previewUrl : ''} 
              alt='Кадр из фильма' height='169px'/>
          </div>
          <div className="item-slide"
            key={nextplusImgIndex}>
            <img src={sliderImage.length>0 ? sliderImage[nextplusImgIndex].previewUrl : ''} 
              alt='Кадр из фильма' height='169px'/>
          </div>
          <a className="next" onClick={onClicknextSlide}>&#10095;</a>
        </div>
        : ''}
    </React.Fragment>
  )
}

export default Slider;