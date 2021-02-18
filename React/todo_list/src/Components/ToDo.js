import React from 'react'
import {useState} from 'react'
const ToDo = () => {
    const [todoList, setTodoList] = useState([
        {name: " this is my first task", checked: false},
        {name: " this is my second task", checked: true}])

    const clickHandler = () =>{
        let name = document.getElementById("text").value
        setTodoList(todoList.concat({name: name, checked: false}))
        document.getElementById("text").value = ""
    }

    const changeStatus = (e, index) => {
        setTodoList(todoList.map( (item, i ) => i===index ? 
        {name: item.name, checked: e.target.checked} : 
        {name: item.name, checked: item.checked}));
        
    }
    return (
        <div>
            {
                todoList.map((item, index) => {
                    return <div key={index}>
                    {item.name}
                    <input type="button" value="DELETE"/>
                    <input type="checkbox" checked={item.checked} onChange = { (e, index) => changeStatus}/>
                    </div>
                })

            }
            <div>
                <textarea id="text" />
                <input type="button" value="ADD" onClick={clickHandler}/>
            </div>
        </div>
    )
}

export default ToDo

