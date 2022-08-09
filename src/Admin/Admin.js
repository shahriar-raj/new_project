import Button from 'react-bootstrap/Button';
import React from 'react';
import Image from 'react-bootstrap/Image';
import './Admin.css';

const Admin = () => {
    let Name = "abrar";
    let Id = 500001;
    let contact = "01976837633";
    let email = "abcd@gmail.com";
    return (
        <div>
            <div className='left'>
                <h1 className='Header'><u>Admin</u></h1>
                <br />
                <Image src="admin.png" width={"100px"} height={"100px"} />
                <br />
                <br />
                <h4 className='hj'><u>Name:</u> {Name}</h4>
                <h4 className='hj'><u>Admin Id:</u> {Id}</h4>
                <h4 className='hj'><u>Contact:</u> {contact}</h4>
                <h4 className='hj'><u>Email:</u> {email}</h4>
                <br />
                <br />
                <br />
                <Button variant="danger" size="lg">
                    Log Out
                </Button>
            </div>
            <div className='right'>
                <Image src="school1.png" width={"400px"} height={"400px"} />
                <br />
                <br />
                <br />
                <Button variant="primary" size="lg">
                    Added Institutions
                </Button>
            </div>
        </div>
    )
}

export default Admin;