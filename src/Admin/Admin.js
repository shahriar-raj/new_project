import Button from 'react-bootstrap/Button';
import React from 'react';
import './Admin.css';

const Admin = () => {
    return (
        <div>
            <div className='left'>
                <h1 className='Header'>Admin</h1>
            </div>
            <div className='right'>
                <Button variant="primary" size="lg">
                    Added Institutions
                </Button>
            </div>
        </div>
    )
}

export default Admin;