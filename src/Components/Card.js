import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className = 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

///need to add {} to the props since they are JS 
//can only return one element back to the DOM.
//passed id into the src so that it randomizes the robots we get from the API
//Instead of using props and calling the props.item in the div we can give it into the function using ES6
