import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function image_inhotel() {
  return (

    <Carousel variant="dark p-4 w-auto h-auto">
      <Carousel.Item  interval={1000}>
        <img
          className="d-block  w-100" style={{  height:'500px'}}
          src="http://dimg04.c-ctrip.com/images/20071h000001i58gx412B.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Hotel</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100" style={{  height:'500px'}}
          src="https://pinksider.com/image/1983/0/0/w700h413/thumbnail.webp?signature=bwUNBYhK3Jfajx2j8ychPtkcNrI="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 " style={{height:'500px'}}
          src="https://www.1hotels.com/sites/default/files/styles/mega_menu_image_retina/public/2021-03/1_hotel01.jpg?h=a49d782d&itok=jEfYexKd"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default image_inhotel
