import React, { Fragment, useState, useEffect } from 'react';
import {
  SlideShowContainer,
  SlideShowSlides,
  SlideShowImage,
  SlideShowText,
  SlideShowNumberText,
  SlideShowArrowPrev,
  SlideShowArrowNext,
  SlideShowDot,
} from './styles';
import { Container, Col, Row } from 'reactstrap';

let slideIndex = 0;

const Slides = ({ index, currentIndex, data }) => {
  return (
    <SlideShowSlides show={index == currentIndex ? true : false}>
      <SlideShowNumberText>{data['number']}</SlideShowNumberText>
      <SlideShowImage src={data['img']}></SlideShowImage>
      <SlideShowText>{data['text']} </SlideShowText>
    </SlideShowSlides>
  );
};
export const SlideShow = ({ slides = [] }) => {
  const [index, setSlideIndex] = useState(0);
  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };

  const currentSlide = (n) => {
    showSlides((slideIndex = n));
  };

  let i;
  const showSlides = (n) => {
    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length;
    }
    setSlideIndex(slideIndex);
  };

  useEffect(() => {
    console.log('slideIndex', slideIndex);
  });

  return (
    <Fragment>
      <SlideShowContainer>
        {slides.map((x, i) => (
          <Slides key={i}
            index={i}
            currentIndex={index}
            data={{
              ...x,
            }}
          ></Slides>
        ))}
        <SlideShowArrowPrev onClick={() => plusSlides(-1)}>
          &#10094;
        </SlideShowArrowPrev>
        <SlideShowArrowNext onClick={() => plusSlides(1)}>
          &#10095;
        </SlideShowArrowNext>
      </SlideShowContainer>
      <div className={'text-center'}>
        <SlideShowDot onClick={() => currentSlide(0)}></SlideShowDot>
        <SlideShowDot onClick={() => currentSlide(1)}></SlideShowDot>
        <SlideShowDot onClick={() => currentSlide(2)}></SlideShowDot>
      </div>
    </Fragment>
  );
};
