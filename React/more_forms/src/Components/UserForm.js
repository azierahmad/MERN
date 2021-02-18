import React, { useState } from "react";

const UserForm = (props) => {
    const [user, setUser] = useState("");
    const [userError, setuserError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");

    const [pass, setPass] = useState("");
    const [passError, setpassError] = useState("");

    const [conifp, setConifp] = useState("");
    const [conifpError, setconifpError] = useState("");
    
    
    const handleuser = (e) => {
        setUser(e.target.value);
        if(e.target.value.length < 2) {
            setuserError("The field must be at least 2 characters!");
        } else if(e.target.value.length > 2) {
            setuserError("");
        }
    }

    const handleuser1 = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setemailError("the field must be at lease 5 characters");
        } else if(e.target.value.length > 5) {
            setemailError("");
        }
    }

    const handleuser2 = (e) => {
        setPass(e.target.value);
        if(e.target.value.length < 8) {
            setpassError("The passwords must match and be at least 8 characters!");
        } else if(e.target.value.length >= 8) {
            setpassError("");
        }

        
    }

    const handleuser3 = (e) => {
        setConifp(e.target.value);
        if(  e.target.value !== pass) {
            setconifpError("the password doesn't match!");
        } else if (e.target.value === pass){
            setconifpError("match!");
        }
    }
    
    
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>User Name: </label>
                <input type="text" onChange={ handleuser } />
                {
                    userError ?
                    <p style={{color:'red'}}>{ userError }</p> :
                    ''
                }
            </div>

            <div>
                <label>Email: </label>
                <input type="text" onChange={ handleuser1 } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>

            <div>
                <label>Password: </label>
                <input type="text" onChange={ handleuser2 } />
                {
                    passError ?
                    <p style={{color:'red'}}>{ passError }</p> :
                    ''
                }
            </div>

            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleuser3 } />
                {
                    conifpError ?
                    <p style={{color:'red'}}>{ conifpError }</p> :
                    ''
                }
            </div>


            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
