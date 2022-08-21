import React, { useState } from 'react';
import './Home.css';
import List from '../List';
import NewGoal from '../NewGoal';
import 'bootstrap/dist/css/bootstrap.css';
import BCarousel from '../BCarousel/BCarousel';
import About from '../../About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Information from '../../Information/Information';
import Header from '../../shared/components/Header';
import Admin from '../../Admin/Admin';
import S_SignUp from '../../SignUp/S_SignUp';
import T_SignUp from '../../SignUp/T_SignUp';
import G_SignUp from '../../SignUp/G_SignUp';
import SignIn from '../../SignIn/SignIn';
import Welcome from '../../Welcome/Welcome';
import Institution_list from '../../Institution_List/Institution_List';
import Student from '../../Student/Student';
import Teacher from '../../Teacher/Teacher';
import Guardian from '../../Guardian/Guardian';
import Institution from '../../Institution/Institution';
import Guest_Institution from '../../Guest_Institution/Guest_Institution';

const Home = () => {
    // const [items, setItems] = useState([{ id: 'c1', text: 'Login' }]);

    // const addNewGoalHandler = newGoal => {
    //     setItems(items.concat(newGoal));
    // }

    const [data,setData] = React.useState([]);
    return (
        <div className='master'>
            <Router>
            <Routes>
                <Route path="/" element={<BCarousel />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/info" element={<Information />}/>
                <Route path="/guest-institution" element={<Guest_Institution />}/>
                <Route path="/s_signup" element={<S_SignUp data={data} setData={setData}/>}/>
                <Route path="/t_signup" element={<T_SignUp data={data} setData={setData}/>}/>
                <Route path="/g_signup" element={<G_SignUp data={data} setData={setData}/>}/>
                <Route path="/signin" element={<SignIn data={data} setData={setData} />}/>
                <Route path="/admin" element={<Admin data={data} setData={setData} />}/>
                <Route path="/welcome" element={<Welcome data={data} setData={setData} />}/>
                <Route path="/institution_list" element={<Institution_list data={data} setData={setData} />}/>
                <Route path="/student" element={<Student data={data} setData={setData} />}/>
                <Route path="/teacher" element={<Teacher data={data} setData={setData} />}/>
                <Route path="/guardian" element={<Guardian data={data} setData={setData} />}/>
                <Route path="/institution" element={<Institution data={data} setData={setData} />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Home;

