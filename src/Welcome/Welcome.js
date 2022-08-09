import React from 'react';
import './Welcome.css';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

const Welcome = () => {
    const id = 100001;
    return (
        <div className='wel'>
            <Spinner animation="grow" />
            <img src='welcome-back.png' width={"250px"} height={"250px"} />
            <Spinner animation="grow" />
            <h1 className='h'>Welcome to EduCare</h1>
            <p className='par'>Your Unique ID is: <u>{id}</u>. Remember this ID and the given password to login</p>
            <Button variant="danger">Back to Home</Button>
        </div>
    )
}

export default Welcome;