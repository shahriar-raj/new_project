import React from 'react';
import './Institution_List.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Institution_list = props => {
    let Name = ['Amar School', 'Bekar School', 'Chor Schoool'];
    let Id = [1000, 20000, 3000];
    let Itype = ["College", "School", "School"];
    let Thana = ['A', 'B', 'C'];
    let District = ['A', 'B', 'C'];
    let WebsiteLink = ['A', 'B', 'C'];
    let Email = ['A', 'B', 'C'];
    let PostOffice = ['A', 'B', 'C'];
    const Schools = [{ name: Name[0], id: Id[0], thana:Thana[0], itype:Itype[0], district:District[0], website:WebsiteLink[0], email:Email[0], post:PostOffice[0]}];
    for (let i = 1; i < Name.length; i++) {
        const newIns = {
            name: Name[i],
            id: Id[i], 
            thana:Thana[i], 
            itype:Itype[i], 
            district:District[i], 
            website:WebsiteLink[i], 
            email:Email[i], 
            post:PostOffice[i]
        };
        Schools.push(newIns);
        console.log(Schools);
    }
    return (
        <>
        <center>
        <h1 className="Head"><u>Institution List</u></h1>
        </center>
            <ul className='InsList' type="none">
                {Schools.map(School => {
                    return <li>
                        { /*{School.name} {School.id} <a>{School.thana}</a> <center><img src="school.png" width={"100px"} height={"100px"} /></center>; */}
                        <Card
                            bg={'secondary'}
                            key={'Primary'}
                            text={'white'}
                            style={{ width: '50rem' }}
                            className="mb-2"
                        >
                            <Card.Header>{School.name}</Card.Header>
                            <Card.Body>
                                <Card.Title>{School.id} </Card.Title>
                                <Card.Text>
                                    {School.itype}  {School.thana}
                                    <br />
                                    <a href="{School.website}">{School.website}</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </li>;
                })}
            </ul>
            <Button variant="danger" size="lg" className="bck">
                Back to Profile
            </Button>
            <Button variant="success" size="lg" className="add">
                Add Institution
            </Button>
        </>
    )
}

export default Institution_list;

