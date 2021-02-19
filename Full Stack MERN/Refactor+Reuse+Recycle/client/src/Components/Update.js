import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from './ProductForm'
import DeleteButton from './DeleteButton';
import { Link, navigate } from "@reach/router"

export default props => {
    const { id } = props;
    const [product, setproduct] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/getproduct/' + id)
        .then(res => {
            setproduct(res.data);
            setLoaded(true);
        })
    }, [])

    const updateProduct = product => {
        
        axios.put('http://localhost:8000/api/updateproduct/' + id, product )
            .then(res => console.log(res));
    }

    
    return (
        <div>
            {/* <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title:</label><br />
                    <input type="text" 
                    name="Title" 
                    value={Title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price:</label><br />
                    <input type="text" 
                    name="Price"
                    value={Price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description:</label><br />
                    <input type="text" 
                    name="Description"
                    value={Description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form> */}
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.Title}
                        initialPrice={product.Price}
                        initialDescription={product.Description}
                        successCallback={() => navigate("/product")}
                    />
                    <DeleteButton productId={product._id} successCallback={() => navigate("/product")} />
                    
                </>
                
            )}
            <br />
            <Link to={`/product`}>Back</Link>
        </div>
    )
}
