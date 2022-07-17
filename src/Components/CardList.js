import React from 'react';
import Card from '../Components/Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;

//We should loop over the robots so it prints everything in the array.
//We need to give each thing in the loop a key so it can be refered to.

//These are pure functions that get something and return something which is super simple. We need to get things to pass and send information.
