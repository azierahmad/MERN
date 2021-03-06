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
    }, [products, loaded]);

    const removeFromDom = productId => {
        setproducts(products.filter(product => product._id != productId));
    }
    

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res=>{
                setproducts([...products, res.data]);
            })
    }

    return (
        <div>

            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
            {/* <ProductForm />
            
                {products.length > 0 &&
                    products.map((product, index) => {
                        
                        return( <>
                        <div key={index}> {product.Title} </div> 
                        <Link to={`/${ product._id }/detail`}>Detail</Link> 
                            |
                        <Link to={`/${ product._id }/edit`}> Edit</Link>
                        
                        <br />
                        </>
                        )
                    })}
                <hr/>
                {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>} */}

        </div>
    )
}
