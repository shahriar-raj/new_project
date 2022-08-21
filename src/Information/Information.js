import React from 'react';
import './Information.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
<<<<<<< HEAD
import Header from '../shared/components/Header';
import { useNavigate } from 'react-router-dom';

const Information = () => {
    const navigate=useNavigate();
    return (
        <div>
            <Header />
=======

const Information = () => {
    return (
>>>>>>> eddb829aa314b693ce0f1f26e5cac782d2ec26a8
        <div className='in'>
            <div className='inl'>
                <Image src="teacher1.png" width={"400px"} height={"400px"} />
                <br />
                <br />
                <br />
                <Button variant="success" size="lg">
                    Added Teachers
                </Button>
            </div>
            <div className='inr'>
                <Image src="school1.png" width={"400px"} height={"400px"} />
                <br />
                <br />
                <br />
<<<<<<< HEAD
                <Button variant="primary" size="lg" onClick={(e) => {navigate('/guest-institution')}}>
=======
                <Button variant="primary" size="lg">
>>>>>>> eddb829aa314b693ce0f1f26e5cac782d2ec26a8
                    Added Institutions
                </Button>
            </div>
        </div>
<<<<<<< HEAD
        </div>
=======
>>>>>>> eddb829aa314b693ce0f1f26e5cac782d2ec26a8
    )
}

export default Information;