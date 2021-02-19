import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';


export default props => {
    const [products, setproducts] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/getproduct/')
            .then(res => setproducts(res.data));
    }, [])

    const removeFromDom = productId => {
        setproducts(products.filter(product => product._id != productId))
    }


    return (
        // <div>
        //     {props.products.map((product, idx)=>{
        //         return <p key={idx}>
                
        //             {product.Title} 
        //             ,
        //             <button onClick={(e)=>{deleteProduct(product._id)}}>
        //                 Delete
        //             </button>
        //         </p>
        //     })}
            
        // </div>

        <div>
            {props.products.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={ "/"+product._id + "/detail"}>
                            {product.Title}
                        </Link>
                        |
                        <Link to={ "/"+product._id + "/edit"}>
                            Edit
                        </Link> 
                        
                    </p>
                )
            })}
        </div>
    )
}