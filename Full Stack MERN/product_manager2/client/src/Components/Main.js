import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../Components/ProductForm';
import ProductList from '../Components/ProductList';
import { Link } from '@reach/router';
export default () => {

    const [products, setproducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/findAllProduct')
        .then(res => {
            setproducts(res.data);
            setLoaded(true);
        });
    }, [products, loaded])
    
    return (
        <div>
        <ProductForm />
        
            {products.length > 0 &&
                products.map((product, index) => {
                    
                    return( <>
                    <div key={index}> {product.Title} </div> 
                    <Link to={`/${ product._id }/detail`}>Detail</Link>
                    <br />
                    </>
                    )
                })}
            
            <hr/>
        </div>
    )
}
