import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './NewGoal.css';

const NewGoal = () => {
    const addGoalHandler = event => {
        event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: "My new Goal!"
        };
        console.log(newGoal);
    };

    return (
        <form className='F' onSubmit={addGoalHandler}>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button class="btn btn-outline-secondary" type="submit" id="button-addon1">submit</button>
            </div>

        </form>

    );
};

export default NewGoal;