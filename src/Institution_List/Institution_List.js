import React from 'react';
import './Institution_List.css';

const Institution_list = () => {
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
                    return <li>{School.name} {School.id} <a>{School.thana}</a> <img src="school.png" /></li>;
                })}
            </ol>
        </>
    )
}

export default Institution_list;

