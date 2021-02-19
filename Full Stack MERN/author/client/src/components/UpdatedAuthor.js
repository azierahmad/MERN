import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const UpdatedAuthor = (props) => {
    const { id } = props;
    const [name, setName] = useState("")
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id,)
            .then(res => {
                setName(res.data.name);
            })
    }, [])
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateAuthor/' + id, {
            name,
            
        })
            .then(navigate('/'));
    }
    return (
        <div>
            <h1>Update a Author</h1>
            <form onSubmit={e => updateAuthor(e)}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default UpdatedAuthor