import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './BCarousel.css';

function BCarousel() {
    return (
        <Carousel className='yes'>
            <Carousel.Item className='yes2'>
                <img
                    className="d-block w-100"
                    src="pngtree-concept-of-online-exam-on-internet-png-image.png"
                    alt="First slide"
                    height={"850px"}
                    width={"500px"}
                />
                <Carousel.Caption >
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='yes2'>
                <img
                    className="d-block w-100"
                    src="book-stack.png"
                    alt="Second slide"
                    height={"850px"}
                    width={"600px"}
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='yes2'>
                <img
                    className="d-block w-100"
                    src="book-stack1.png"
                    alt="Third slide"
                    height={"850px"}
                    width={"600px"}
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BCarousel;