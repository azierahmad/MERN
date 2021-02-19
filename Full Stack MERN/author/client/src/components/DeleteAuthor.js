import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const DeleteAuthor =  (props) => {
    const { removeFromDom } = props;
    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/deleteAuthor/' + id)
            .then(res => {
                removeFromDom(id)
            })
    }

    
    return (
        <div>
            {props.author.map((author, id) => {
                return <p key={id}>
                    <Link to={"/" + author._id}>
                        {author.name}
                    </Link>
                    |
                    <button onClick={(e)=>{deleteAuthor(author._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}

export default DeleteAuthor