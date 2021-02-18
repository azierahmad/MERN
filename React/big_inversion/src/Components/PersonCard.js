import React from 'react'

const PersonCard = props => {
    return (
        <div>
            <h1>{props.firstname} {props.lastname}</h1>
            <p>age: {props.age}</p>
            <p>hair color: {props.haircolor}</p>
        </div>
    )
}

export default PersonCard