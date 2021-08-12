import './Carousel.css';
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
function Carousel() {
    return (
        <CarouselProvider
            isPlaying={false}
            interval={1000}
            infinite={true}
            visibleSlides={1}
            naturalSlideHeight={100}
            naturalSlideWidth={100}
            className={'carousel__body'}
            totalSlides={3}
            currentSlide={1}
        >
            <Slider
                className='slider__body'
                classNameAnimation='newSlide'
            >
                <Slide

                    classNameVisible='slide'
                    index={0}
                    className='slide__item' >
                    <div className="card">

                        <ButtonNext
                            className='btn next'>
                            👉
                        </ButtonNext>

                        <ButtonBack
                            className='btn back'>
                            👈
                        </ButtonBack>
                    </div>
                </Slide>
                <Slide
                    classNameVisible='slide'
                    index={1}
                    className='slide__item' >
                    <div className="card">

                        <ButtonNext
                            className='btn next'>
                            👉
                        </ButtonNext>
                        <h1>This is the main slide</h1>
                        <ButtonBack
                            className='btn back'>
                            👈
                        </ButtonBack>
                    </div>
                </Slide>
                <Slide
                    classNameVisible='slide'
                    index={2}
                    className='slide__item' >
                    <div className="card">

                        <ButtonNext
                            className='btn next'>
                            👉
                        </ButtonNext>

                        <ButtonBack
                            className='btn back'>
                            👈
                        </ButtonBack>
                    </div>
                </Slide>
            </Slider>
            <div className="dots">
                <Dot
                    className={'dot'}
                    slide={0}>
                </Dot>
                <Dot
                    className={'dot'}
                    slide={1}>
                </Dot>
                <Dot
                    className={'dot'}
                    slide={2}>
                </Dot>
            </div>
        </CarouselProvider>
    )
}

export default Carousel
