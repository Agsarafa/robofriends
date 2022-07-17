import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--blue bg-lightest-blue'
            type="search" 
            placeholder="Search Robots!" 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;

//Search Box is being given the searchChange from App.js and is the onChange is taking the value. 