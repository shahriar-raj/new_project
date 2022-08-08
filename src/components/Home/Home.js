import React, { useState } from 'react';
import './Home.css';
import List from '../List';
import NewGoal from '../NewGoal';
import 'bootstrap/dist/css/bootstrap.css';
import BCarousel from '../BCarousel/BCarousel';
import About from '../../About/pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => {
    const [items, setItems] = useState([{ id: 'c1', text: 'Login' },
    { id: 'c2', text: 'Register' },
    { id: 'c3', text: 'Yes' }]);

    const addNewGoalHandler = newGoal => {
        setItems(items.concat(newGoal));
    }

    return (
        <div className='master'>
            <Router>
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
                <NewGoal onAddGoal={addNewGoalHandler} />
                <div className='col'>
                    <div className='l'> <p>HELLO</p> </div>
                    <div className='r'> <p>Bye</p> </div>
                </div>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Router>
        </div>
    )
}

export default Home;

