import React from 'react'

const Form = (props) => {
    const {inputs, setInputs} = props;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value

        });
    }
    return (
        <form>
        <div>
            <label htmlFor="firstname">Fisrt Name:</label>
            <input onChange={onChange} type="text" name="fisrtname" />
        </div>
        <div>
            <label htmlFor="lastname">Last Name:</label>
            <input onChange={onChange}  type="text" name="lastname" />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input onChange={onChange}  type="text" name="email" />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input onChange={onChange}  type="text" name="password" />
        </div>
        <div>
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <input onChange={onChange}  type="text" name="confirmpassword" />
        </div>
        <input type="submit" value="Create User" />
        </form>
    )
}

export default Form
