import React from 'react';
import './Institution_List.css';
import Button from 'react-bootstrap/Button';

const Institution_list = props => {
    let names = ['A', 'B', 'C'];
    let id = [1, 2, 3];
    let thana = ['A', 'B', 'C'];
    const Schools = [{ name: names[0], id: id[0], thana: thana[0] }];
    for (let i = 1; i < names.length; i++) {
        const newIns = {
            name: names[i],
            id: id[i],
            thana: thana[i]
        };
        Schools.push(newIns);
        console.log(Schools);
    }
    return (
        <>
            <ol className='InsList'>
                {Schools.map(School => {
                    return <li>{School.name} {School.id} <a>{School.thana}</a> <center><img src="school.png" width={"100px"} height={"100px"} /></center></li>;
                })}
            </ol>
            <Button variant="success" size="lg" className="add">
                Add Institution
            </Button>
        </>
    )
}

export default Institution_list;

