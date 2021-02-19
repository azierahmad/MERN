import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const [product, setproduct] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/getproduct/" + props.id)
            .then(res => setproduct(res.data))
    }, [])

    
    return (
        <div>
            <p>Title: {product.Title}</p>
            <p>Price: {product.Price}</p>
            <p>Description: {product.Description}</p>
            
        </div>
    )
}