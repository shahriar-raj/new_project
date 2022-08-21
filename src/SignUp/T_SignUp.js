import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../shared/components/Header';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './T_SignUp.css'

const T_SignUp = (props) => {
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Interest, setInterest] = useState("");
    const [Gender, setGender] = useState("Male");
    const [Address, setAddress] = useState("");
    const [Contact, setContact] = useState("");
    const [InstitutionId, setInstitutionId] = useState();
    const [Day, setDay] = useState(1);
    const [Month, setMonth] = useState("Jan");
    const [Year, setYear] = useState(1940);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        console.log('button e click hoise');
        const a1 = Day.toString();
        const a2 = Year.toString();
        //console.log(a1 + a2);
        const dob = a1 + "/" + Month + "/" + a2;
        console.log(dob);

        const msg = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": Name,
                "password": Password,
                "email": Email,
                "interest": Interest,
                "gender": Gender,
                "address": Address,
                "contact": Contact,
                "institution_id": InstitutionId,
                "dateofbirth": dob
            })
        };
        fetch("http://localhost:4000/TeacherSignUp", msg)
            .then(res => res.json())
            .then(data => {
                console.log('button e click hoise abar abar');
                console.log(data);
                if (!data.isDone) {
                    alert('Id with this institution does not exist!');
                }
                else {
                    props.setData(data.id);
                    navigate('/welcome');
                }
            });
    }
    return (
<<<<<<< HEAD
        <div><Header />
            <div className='form_t'>
                <h1><u><b>Teacher Register</b></u></h1>
                <br />
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel
                            controlId="floatingName"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="name" value={Name} onChange={(e) => { setName(e.target.value) }} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" value={Password} onChange={(e) => { setPassword(e.target.value) }} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <FloatingLabel
                    controlId="floatingEmail"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingSelectGender"
                    label="Gender"
                >
                    <Form.Select aria-label="Floating label select example" value={Gender} onChange={(e) => { setGender(e.target.value) }}>
                        {/* <option>Select Gender</option> */}
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                </FloatingLabel>
                <br />
                <FloatingLabel
                    controlId="floatingAddress"
                    label="Address"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Address" value={Address} onChange={(e) => { setAddress(e.target.value) }} />
                </FloatingLabel>
                <Row className="g-3">
                    <Col md>
                        <FloatingLabel
                            controlId="floatingContact"
                            label="Contact"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Contact" value={Contact} onChange={(e) => { setContact(e.target.value) }} />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel
                            controlId="floatingInstitution_ID"
                            label="Institution_ID"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Institution_Id" value={InstitutionId} onChange={(e) => { setInstitutionId(e.target.value) }} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <h6>  <u>Date of Birth</u></h6>
                <Row className="g-3">
                    <Col md>
                        <FloatingLabel controlId="floatingInputDay" label="Day">
                            <Form.Select aria-label="Floating label select example" value={Day} onChange={(e) => { setDay(e.target.value) }}>
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
                                <option value="31">31</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel
                            controlId="floatingSelectMonth"
                            label="Month"
                        >
                            <Form.Select aria-label="Floating label select example" value={Month} onChange={(e) => { setMonth(e.target.value) }}>
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
                            <Form.Select aria-label="Floating label select example" value={Year} onChange={(e) => { setYear(e.target.value) }}>
                                {/* <option>Select Gender</option> */}
                                <option value="1950">1950</option>
                                <option value="1951">1951</option>
                                <option value="1952">1952</option>
                                <option value="1953">1953</option>
                                <option value="1954">1954</option>
                                <option value="1955">1955</option>
                                <option value="1956">1956</option>
                                <option value="1957">1957</option>
                                <option value="1958">1958</option>
                                <option value="1959">1959</option>
                                <option value="1960">1960</option>
                                <option value="1961">1961</option>
                                <option value="1962">1962</option>
                                <option value="1963">1963</option>
                                <option value="1964">1964</option>
                                <option value="1965">1965</option>
                                <option value="1966">1966</option>
                                <option value="1967">1967</option>
                                <option value="1968">1968</option>
                                <option value="1969">1969</option>
                                <option value="1970">1970</option>
                                <option value="1971">1971</option>
                                <option value="1972">1972</option>
                                <option value="1973">1973</option>
                                <option value="1974">1974</option>
                                <option value="1975">1975</option>
                                <option value="1976">1976</option>
                                <option value="1977">1977</option>
                                <option value="1978">1978</option>
                                <option value="1979">1979</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
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
                    <Button variant="success" size="lg" onClick={(e) => { handleClick(e) }}>
                        Submit
                    </Button>
                </div>
=======
        <div className='form_t'>
            <h1><u><b>Teacher Register</b></u></h1>
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
                    <FloatingLabel
                        controlId="floatingInterest"
                        label="Interest"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="interests" />
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
                            <option value="1950">1950</option>
                            <option value="1951">1951</option>
                            <option value="1952">1952</option>
                            <option value="1953">1953</option>
                            <option value="1954">1954</option>
                            <option value="1955">1955</option>
                            <option value="1956">1956</option>
                            <option value="1957">1957</option>
                            <option value="1958">1958</option>
                            <option value="1959">1959</option>
                            <option value="1960">1960</option>
                            <option value="1961">1961</option>
                            <option value="1962">1962</option>
                            <option value="1963">1963</option>
                            <option value="1964">1964</option>
                            <option value="1965">1965</option>
                            <option value="1966">1966</option>
                            <option value="1967">1967</option>
                            <option value="1968">1968</option>
                            <option value="1969">1969</option>
                            <option value="1970">1970</option>
                            <option value="1971">1971</option>
                            <option value="1972">1972</option>
                            <option value="1973">1973</option>
                            <option value="1974">1974</option>
                            <option value="1975">1975</option>
                            <option value="1976">1976</option>
                            <option value="1977">1977</option>
                            <option value="1978">1978</option>
                            <option value="1979">1979</option>
                            <option value="1980">1980</option>
                            <option value="1981">1981</option>
                            <option value="1982">1982</option>
                            <option value="1983">1983</option>
                            <option value="1984">1984</option>
                            <option value="1985">1985</option>
                            <option value="1986">1986</option>
                            <option value="1987">1987</option>
                            <option value="1988">1988</option>
                            <option value="1989">1989</option>
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
>>>>>>> eddb829aa314b693ce0f1f26e5cac782d2ec26a8
            </div>
        </div>
    )
}

export default T_SignUp;