import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {

    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/deleteproduct/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div>
            {props.products.map((product, idx)=>{
                return <p key={idx}>
                
                    {product.Title} 
                    ,
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}