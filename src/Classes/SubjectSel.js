import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './SubjectSel.css';

const SubjectSel = (props) => {
    let subj = ['Bangla', 'Math', 'English', 'Science'];
    let Teachers_Id = [30001, 30002, 30003];
    let Teachers_Name = ["A", "B", "C"];
    const Teachers = [{ name: Teachers_Name[0], id: Teachers_Id[0] }];
    for (let i = 1; i < Teachers_Id.length; i++) {
        const newTeacher = {
            name: Teachers_Name[i],
            id: Teachers_Id[i]
        };
        Teachers.push(newTeacher);
    }
    return (
        <div className='form_su'>
            <h1><u><b>Subject Register</b></u></h1>
            <br />
            <Form>
                {subj.map(sub => {
                    return (<div>
                        <Row className="g-2">
                            <Col md>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label={sub}
                                    className="switches"
                                />
                            </Col>
                            <Col md>
                                <FloatingLabel
                                    controlId="floatingSelectGrid"
                                    label="Select Teacher"
                                    className='options'
                                >
                                    <Form.Select aria-label="Floating label select example">
                                        {Teachers.map(teacher => {
                                            return <option value={teacher.id}>{teacher.id} - {teacher.name}</option>
                                        })}
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>

                    </div>);
                })}
            </Form>
            <br />
            <div className="d-grid gap-2">
                <Button variant="success" size="lg" className='btn_c'>
                    Submit
                </Button>
            </div>
        </div>
    )
}


export default SubjectSel;