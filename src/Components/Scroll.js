import React from "react";

const Scroll = (props) => { //this is going to treat the wrapped section in App.js as a prop
    return (
        <div style = {{overflowY: "scroll", border: '2px solid black', height: "800px"}}>
            {props.children} 
        </div>
    )
};

export default Scroll;

//children can be added into Scroll so it only renders that