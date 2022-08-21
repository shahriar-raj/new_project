import React from 'react';
import './Class.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Class = props => {
    let Standard = [1, 2, 3];
    let Id = [1000, 20000, 3000];
    let RoomNo = [101, 102, 103];
    let Section = ['A', 'B', 'C'];
    let Session = [2015, 2020, 2020]
    let Division = ['Science', 'Arts', 'Commerce'];
    const Classes = [{ standard: Standard[0], id: Id[0], room: RoomNo[0], section: Section[0], session: Session[0], division: Division[0] }];
    for (let i = 1; i < Standard.length; i++) {
        const newClass = {
            standard: Standard[i],
            id: Id[i],
            room: RoomNo[i],
            section: Section[i],
            session: Session[i],
            division: Division[i]
        };
        Classes.push(newClass);
        console.log(Classes);
    }
    return (
        <>
            <center>
                <h1 className="Head"><u>Classes List</u></h1>
            </center>
            <ul className='InsList' type="none">
                {Classes.map(Cla => {
                    return <li>
                        {
                            <Card
                                bg={'secondary'}
                                key={'Primary'}
                                text={'white'}
                                style={{ width: '50rem' }}
                                className="mb-2"
                            >
                                <Card.Header><b>{Cla.standard} {Cla.section}</b></Card.Header>
                                <Card.Body>
                                    <Card.Title>{Cla.id}</Card.Title>
                                    <Card.Text>
                                        ROOM NO. = {Cla.room}
                                        <br />
                                        Division = {Cla.division}
                                        <br />
                                        Session = {Cla.session}
                                        <Button variant="dark" className='btnc'>Go to Class</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        }
                    </li>;
                })}
            </ul>
            <Button variant="danger" size="lg" className="bck">
                Back
            </Button>
            <Button variant="success" size="lg" className="add">
                Add Classes
            </Button>
        </>
    )
}

export default Class;