import React from 'react';
import './Home.css';
import List from '../List';
import NewGoal from '../NewGoal';
import 'bootstrap/dist/css/bootstrap.css';
import BCarousel from '../BCarousel';

const Home = () => {
    const items = [{ id: 'c1', text: 'Login' },
    { id: 'c2', text: 'Register' },
    { id: 'c3', text: 'Yes' }];

    return (
        <div className='master'>
            <div className='column' >
                <div className='lp'>
                    <img src="book-stack.png" className="App-logo" alt="logo" />
                </div>
                <div className='rp'>
                    <h1 className='header'>EduCare</h1>
                </div>
            </div>
            <BCarousel />
            <List io={items} />
            <div className='col'>
                <div className='l'> <p>HELLO</p> </div>
                <div className='r'> <p>Bye</p> </div>
            </div>
        </div>
    )
}

export default Home;

