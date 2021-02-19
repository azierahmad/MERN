import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router"
import 'bootstrap/dist/css/bootstrap.min.css';


import CreateAuthors from "./CreateAuthors"

const AuthorsTable = props => {
    const [authors, setAuthors] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/getAllAuthors")
            .then(response => setAuthors((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    }, [])

    const navigateToNewRoute =(e) => {
        navigate("/new");
    }
    return(
        <div className="container">
            {authors.length > 0 && 
            authors.map((item, index) => {
                return(<> 
                <div key={index}> {item.name} </div> 
                <Link to={`author/${ item._id }/edit`}>edit</Link>
                <br />
                </>) 
            })
            }
            <input type="button" value=" please put the name" onClick = { e => navigateToNewRoute(e) } />
        </div>
    )

}

export default AuthorsTable