
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import promo1 from '../Assets/Imgs/Promo1.jpg'
import promo2 from '../Assets/Imgs/Promo2.jpg'
import promo3 from '../Assets/Imgs/Promo3.jpg'

export default function CarouselComponent() {


    return (
        <Carousel className='Carousel pb-0' style={{ width: '100%',  height: '65vh'}}>
            <Carousel.Item >
                <img
                    style={{ width: '130vh', height: '60vh' }}
                    src={promo1}
                    alt="First slide"
  
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '130vh', height: '60vh' }}
                    src={promo2}
                    alt="Second slide"
   
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '130vh', height: '60vh' }}
                    src={promo3}
                    alt="Third slide"
            
                />
            </Carousel.Item>
        </Carousel>
    )
}
