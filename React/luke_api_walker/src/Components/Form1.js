import React, {useState, useEffect} from 'react'
import {navigate} from '@reach/router';
import {InputLabel, Select, MenuItem} from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


    const Form1 = () => {
        const[id, setId] = useState(0);
        const[choice, setChoice] = useState("");
    
        const changeHandler = (e) => {
            setId(e.target.value)
        }
    
        const searchDone = (e) => {
            e.preventDefault();
            choice ==="people"? navigate('/people/' + id) :choice === "planets" ? navigate('/planets/'+ id) :choice === "starships"? navigate('/starships/' + id) : navigate('/species/' +id)
        }


    return (
        <div>
            <Form onSubmit={searchDone}>
            <br />
                <InputLabel id="choice">Search For:</InputLabel> <Select onChange={e => setChoice(e.target.value)} labelId="choice" id="choice">
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem  value='people'>People</MenuItem>
                    <MenuItem value='planets'>Planet</MenuItem>
                    
                </Select>
                <Form.Control type="text" name="id" placeholder="the id ?!" onChange={changeHandler} />
                <Button variant="primary" type="submit">Search</Button>
            </Form>
        </div>
    )
}

export default Form1
