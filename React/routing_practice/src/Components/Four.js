import React, {useState} from 'react'

const Four = props => {
    return (
        <div>
            {isNaN (props.id) ? 
                <h1>this number is: {props.id}</h1> : <h1> the word is: {props.id}</h1>
                
            }
        </div>
    )
}

export default Four;