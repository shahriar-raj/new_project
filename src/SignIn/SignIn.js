import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import Header from '../shared/components/Header';
import './SignIn.css';

 const SignIn = (props) => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("Student");
    //setType('Student');

    const handleClick = (e) =>{
        e.preventDefault();

        console.log('button e click hoise');
    
        console.log(id);
        console.log(password);
        const msg = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "type": type,
                "password": password,
            })
        };
        console.log(id);
        console.log(password);

        console.log('button e click hoise abar');
        fetch("http://localhost:4000/login",msg)
         .then(res => res.json())
           .then(data => {
          console.log('button e click hoise abar abar'); 
          console.log(data);
          if(!data){
            alert('Invalid Input!');
          }
          else {
              props.setData(id);
              const num = id;

              const firstDigitStr = String(num)[0];
              console.log(firstDigitStr);

              const firstDigitNum = Number(firstDigitStr);
              if(firstDigitNum === 1){
                navigate('/student');
              }
              else if(firstDigitNum === 2){
                navigate('/teacher');
              }
              else if(firstDigitNum === 3){
                navigate('/institution');
              }
              else if(firstDigitNum === 4){
                navigate('/guardian');
              }
              if(firstDigitNum === 5){
                navigate('/admin');
              }
            
            }
           });

}
    return (
        <div>
            <Header />
        <div className='sn'>
            <center><h1><u><b>Sign In</b></u></h1></center>
            <br />
            <Row className="g-2">
                <Col md>
                    <FloatingLabel
                        controlId="floatingID"
                        label="User ID"
                        className="mb-3"
                    >
                        <Form.Control type="number" placeholder="ID" value={id} onChange={(e)=> {setId(e.target.value)}}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingSelectType"
                        label="Login Type"
                    >
                        <Form.Select aria-label="Floating label select example" value={type} onChange={(e)=> {setType(e.target.value)}}>
                            {/* <option>Select Gender</option> */}
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Guardian">Guardian</option>
                            <option value="Institution">Institution</option>
                            <option value="Admin">Admin</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
            </FloatingLabel>
            <br />
            <div className="d-grid gap-2">
                <Button variant="success" size="lg" onClick={(e) => {handleClick(e)}}>
                    Submit
                </Button>
            </div>
        </div>
        </div>
    )
}

export default SignIn;