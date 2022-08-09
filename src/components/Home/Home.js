import React, { useState } from 'react';
import './Home.css';
import List from '../List';
import NewGoal from '../NewGoal';
import 'bootstrap/dist/css/bootstrap.css';
import BCarousel from '../BCarousel/BCarousel';
import About from '../../About/About';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Information from '../../Information/components/Information';
import Header from '../../shared/components/Header';
import Admin from '../../Admin/Admin';
import S_SignUp from '../../SignUp/S_SignUp';
import T_SignUp from '../../SignUp/T_SignUp';
import G_SignUp from '../../SignUp/G_SignUp';
import SignIn from '../../SignIn/SignIn';
import Institution_list from '../../Institution_List/Institution_List';
import Welcome from '../../Welcome/Welcome';

const Home = () => {
    const [items, setItems] = useState([{ id: 'c1', text: 'Login' }]);

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
                        {/* <List io={items} />
                        <NewGoal onAddGoal={addNewGoalHandler} />
                        <div className='col'>
                            <div className='l'> <p>HELLO</p> </div>
                            <div className='r'> <p>Bye</p> </div>
                        </div> */}
                    </Route>
                    <Route path="/about" exact>
                        <Header />
                        <About />
                    </Route>
                    <Route path="/info" exact>
                        <Header />
                        <Information />
                    </Route>
                    <Route path="/s_signup" exact>
                        <Header />
                        <S_SignUp />
                    </Route>
                    <Route path="/t_signup" exact>
                        <Header />
                        <T_SignUp />
                    </Route>
                    <Route path="/g_signup" exact>
                        <Header />
                        <G_SignUp />
                    </Route>
                    <Route path="/signin" exact>
                        <Header />
                        <SignIn />
                    </Route>
                    <Route path="/admin" exact>
                        <Admin />
                    </Route>
                    <Route path="/welcome" exact>
                        <Welcome />
                    </Route>
                    <Route path="/ins" exact>
                        <Institution_list />
                    </Route>
                    <Redirect to="/" />
                </Switch>

            </Router>
        </div>
    )
}

export default Home;

