 import React from 'react';
 import './Person.css';

 const Person = (props) => {
    return (
        <div className="Person">
             <p onClick={props.click}>I'm { props.name } and I am { props.age } years old</p>
             <input type="text" onChange={ props.changed } value={ props.name } />
             <button>Submit</button>
        </div>
    )
 };

 export default Person;
