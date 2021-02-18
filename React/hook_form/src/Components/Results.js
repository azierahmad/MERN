import React from 'react'

const Results = props => {
    const {firstname, lastname , email , password ,confirmpassword} = props.data;
    return (
        <div>
        <h1>The Result:</h1>
            <p>First Name: {firstname}</p>
            <br/>
            <p>Last Name: {lastname}</p>
            <br/>
            <p>Email: {email}</p>
            <br/>
            <p>Password: {password}</p>
            <br/>
            <p>Confirm Password: {confirmpassword}</p>
        </div>
    )
}

export default Results
