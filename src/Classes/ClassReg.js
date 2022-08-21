import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ClassReg.css'

const ClassReg = (props) => {
    let standards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div className='form_c'>
            <h1><u><b>Class Register</b></u></h1>
            <br />
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingInputStandard" label="Standard">
                        <Form.Select aria-label="Default select example">
                            {standards.map(stn => {
                                return <option value={stn}>{stn}</option>;
                            })}
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingSection" label="Section">
                        <Form.Control type="text" placeholder="Section" />
                    </FloatingLabel>
                </Col>
            </Row>
            <br />
            <Row className="g-3">
                <Col md>
                    <FloatingLabel controlId="floatingInputSession" label="Session">
                        <Form.Select aria-label="Default select example">
                            <option value="2019">2019</option>;
                            <option value="2020">2020</option>;
                            <option value="2021">2021</option>;
                            <option value="2022">2022</option>;
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingRoom" label="Room Number">
                        <Form.Control type="number" placeholder="Room" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingInputDivision" label="Division">
                        <Form.Select aria-label="Default select example">
                            <option value="Not Applicable">Not Applicable</option>;
                            <option value="Science">Science</option>;
                            <option value="Commerce">Commerce</option>;
                            <option value="Arts">Arts</option>;
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

export default ClassReg;