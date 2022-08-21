import React, { useState } from 'react';
import './Home.css';
import List from '../List';
import NewGoal from '../NewGoal';
import 'bootstrap/dist/css/bootstrap.css';
import BCarousel from '../BCarousel/BCarousel';
import About from '../../About/About';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
>>>>>>> eddb829aa314b693ce0f1f26e5cac782d2ec26a8
import Information from '../../Information/Information';
import Header from '../../shared/components/Header';
import Admin from '../../Admin/Admin';
import S_SignUp from '../../SignUp/S_SignUp';
import T_SignUp from '../../SignUp/T_SignUp';
import G_SignUp from '../../SignUp/G_SignUp';
import SignIn from '../../SignIn/SignIn';
<<<<<<< HEAD
import Welcome from '../../Welcome/Welcome';
import Institution_list from '../../Institution_List/Institution_List';
import Student from '../../Student/Student';
import Teacher from '../../Teacher/Teacher';
import Guardian from '../../Guardian/Guardian';
import Institution from '../../Institution/Institution';
import Guest_Institution from '../../Guest_Institution/Guest_Institution';
import Class from '../../Classes/Class';
import ClassReg from '../../Classes/ClassReg';
import SubjectSel from '../../Classes/SubjectSel';
import TimeSel from '../../Ins_First_signin/TimeSel';

const Home = () => {
    // const [items, setItems] = useState([{ id: 'c1', text: 'Login' }]);
=======
import Institution_list from '../../Institution_List/Institution_List';
import Welcome from '../../Welcome/Welcome';

const Home = () => {
    const [items, setItems] = useState([{ id: 'c1', text: 'Login' }]);
>>>>>>> eddb829aa314b693ce0f1f26e5cac782d2ec26a8

    // const addNewGoalHandler = newGoal => {
    //     setItems(items.concat(newGoal));
    // }

    const [data, setData] = React.useState([]);
    return (
        <div className='master'>
            <Router>
<<<<<<< HEAD
                <Routes>
                    <Route path="/" element={<BCarousel />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/info" element={<Information />} />
                    <Route path="/guest-institution" element={<Guest_Institution />} />
                    <Route path="/s_signup" element={<S_SignUp data={data} setData={setData} />} />
                    <Route path="/t_signup" element={<T_SignUp data={data} setData={setData} />} />
                    <Route path="/g_signup" element={<G_SignUp data={data} setData={setData} />} />
                    <Route path="/signin" element={<SignIn data={data} setData={setData} />} />
                    <Route path="/admin" element={<Admin data={data} setData={setData} />} />
                    <Route path="/welcome" element={<Welcome data={data} setData={setData} />} />
                    <Route path="/institution_list" element={<Institution_list data={data} setData={setData} />} />
                    <Route path="/student" element={<Student data={data} setData={setData} />} />
                    <Route path="/teacher" element={<Teacher data={data} setData={setData} />} />
                    <Route path="/guardian" element={<Guardian data={data} setData={setData} />} />
                    <Route path="/institution" element={<Institution data={data} setData={setData} />} />
                    <Route path="/classes" element={<Class data={data} setData={setData} />} />
                    <Route path="/classreg" element={<ClassReg data={data} setData={setData} />} />
                    <Route path="/subjectreg" element={<SubjectSel data={data} setData={setData} />} />
                    <Route path="/timeselect" element={<TimeSel data={data} setData={setData} />} />
                </Routes>
=======
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

>>>>>>> eddb829aa314b693ce0f1f26e5cac782d2ec26a8
            </Router>
        </div>
    )
}

export default Home;

