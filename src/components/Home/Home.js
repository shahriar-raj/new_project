import React, { useState } from 'react';
import './Home.css';
import List from '../List';
import NewGoal from '../NewGoal';
import 'bootstrap/dist/css/bootstrap.css';
import BCarousel from '../BCarousel/BCarousel';
import About from '../../About/pages/About';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Information from '../../Information/components/Information';
import Header from '../../shared/components/Header';

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
                <Switch>
                    <Route path="/" exact>
                        <Header />
                        <BCarousel />
                        <List io={items} />
                        <NewGoal onAddGoal={addNewGoalHandler} />
                        <div className='col'>
                            <div className='l'> <p>HELLO</p> </div>
                            <div className='r'> <p>Bye</p> </div>
                        </div>
                    </Route>
                    <Route path="/about" exact>
                        <Header />
                        <About />
                    </Route>
                    <Route path="/info" exact>
                        <Information />
                    </Route>
                    <Redirect to="/" />
                </Switch>

            </Router>
        </div>
    )
}

export default Home;

