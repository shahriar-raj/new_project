import React from 'react';
import './Welcome.css';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD
import {useNavigate} from 'react-router-dom';

const Welcome = (props) => {
    const navigate=useNavigate();
=======

const Welcome = () => {
    const id = 100001;
>>>>>>> eddb829aa314b693ce0f1f26e5cac782d2ec26a8
    return (
        <div className='wel'>
            <Spinner animation="grow" />
            <img src='welcome-back.png' width={"250px"} height={"250px"} />
            <Spinner animation="grow" />
            <h1 className='h'>Welcome to EduCare</h1>
<<<<<<< HEAD
            <p className='par'>Your Unique ID is: <u>{props.data}</u>. Remember this ID and the given password to login</p>
            <Button variant="danger" onClick={(e)=>{navigate('/')}}>Back to Home</Button>
=======
            <p className='par'>Your Unique ID is: <u>{id}</u>. Remember this ID and the given password to login</p>
            <Button variant="danger">Back to Home</Button>
>>>>>>> eddb829aa314b693ce0f1f26e5cac782d2ec26a8
        </div>
    )
}

export default Welcome;