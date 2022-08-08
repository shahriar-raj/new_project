import React from 'react';
import '../../components/Home/Home.css';

const Header = () => {
    return (

        <div className='column' >
            <div className='lp'>
                <img src="book-stack.png" className="App-logo" alt="logo" />
            </div>
            <div className='rp'>
                <h1 className='header'>EduCare</h1>
            </div>
        </div>
    )
}

export default Header;