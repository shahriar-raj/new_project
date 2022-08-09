import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SignIn.css';

const SignIn = () => {
    return (
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
                        <Form.Control type="text" placeholder="ID" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingSelectType"
                        label="Login Type"
                    >
                        <Form.Select aria-label="Floating label select example">
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
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <br />
            <div className="d-grid gap-2">
                <Button variant="success" size="lg">
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default SignIn;