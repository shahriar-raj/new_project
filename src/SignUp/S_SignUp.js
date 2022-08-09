import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './S_SignUp.css'

const S_SignUp = () => {
    return (
        <div className='form_s'>
            <h1><u><b>Student Register</b></u></h1>
            <br />
            <Row className="g-2">
                <Col md>
                    <FloatingLabel
                        controlId="floatingName"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="name" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Col>
            </Row>
            <FloatingLabel
                controlId="floatingEmail"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingInputStandard" label="Standard">
                        <Form.Select aria-label="Floating label select example">
                            {/* <option>Select Gender</option> */}
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel
                        controlId="floatingSelectGender"
                        label="Gender"
                    >
                        <Form.Select aria-label="Floating label select example">
                            {/* <option>Select Gender</option> */}
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <br />
            <FloatingLabel
                controlId="floatingAddress"
                label="Address"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="Address" />
            </FloatingLabel>
            <Row className="g-3">
                <Col md>
                    <FloatingLabel
                        controlId="floatingContact"
                        label="Contact"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Contact" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel
                        controlId="floatingInstitution_ID"
                        label="Institution_ID"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Institution_Id" />
                    </FloatingLabel>
                </Col>
            </Row>
            <h6>  <u>Date of Birth</u></h6>
            <Row className="g-3">
                <Col md>
                    <FloatingLabel controlId="floatingInputDay" label="Day">
                        <Form.Select aria-label="Floating label select example">
                            {/* <option>Select Gender</option> */}
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel
                        controlId="floatingSelectMonth"
                        label="Month"
                    >
                        <Form.Select aria-label="Floating label select example">
                            {/* <option>Select Gender</option> */}
                            <option value="Jan">January</option>
                            <option value="Feb">February</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sep">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputYear" label="Year">
                        <Form.Select aria-label="Floating label select example">
                            {/* <option>Select Gender</option> */}
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <br />
            <div className="d-grid gap-2">
                <Button variant="success" size="lg">
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default S_SignUp;