import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './BCarousel.css';

function BCarousel() {
    return (
        <Carousel className='yes'>
            <Carousel.Item className='yes2'>
                <img
                    className="d-block w-100"
                    src="student-details.png"
                    alt="First slide"
                    height={"580px"}
                    width={"400px"}
                />
                <Carousel.Caption className='cap'>
                    <h3>Easy to Use</h3>
                    <p>User friendly interfaces for extracting infos</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='yes2'>
                <img
                    className="d-block w-100"
                    src="classroom.png"
                    alt="Second slide"
                    height={"580px"}
                    width={"400px"}
                />

                <Carousel.Caption className='cap'>
                    <h3>Efficient</h3>
                    <p>Enhances class teaching time through automation of overhead works</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='yes2'>
                <img
                    className="d-block w-100"
                    src="school.png"
                    alt="Third slide"
                    height={"580px"}
                    width={"400px"}
                />

                <Carousel.Caption className='cap'>
                    <h3>All In One </h3>
                    <p>Classes, Attendance, Results all managed in one system</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BCarousel;