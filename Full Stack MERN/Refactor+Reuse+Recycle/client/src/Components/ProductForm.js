import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from "@reach/router"
export default (props ) => {
    const { initialTitle, initialPrice, initialDescription,  onSubmitProp } = props;
    const [Title, setTitle] = useState(initialTitle); 
    const [Price, setPrice] = useState(initialPrice);
    const [Description, setDescription] = useState(initialDescription);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({Title, Price, Description});
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={Title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={Price}/>
            </p>

            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={Description}/>
            </p>
            <input type="submit" onClick={() => navigate("/product")}/>
        </form>
    )
}
