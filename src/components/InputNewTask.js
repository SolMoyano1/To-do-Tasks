import React, { useState } from "react";
import '../styleSheets/InputNewTask.css';
import { v4 as uuidv4} from 'uuid';

function InputNewTask (props){
    
    const [input, setInput] = useState('')
    
    const handleChange = (e)=>{
        setInput (e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            taskName: input,
            completed: false
        };
        props.submit(newTask);
    };


    return(
        <form className="formNewTask" onSubmit={handleSubmit}>
           
            <input 
                type='text' 
                placeholder='Add a new task...' 
                name='taskName'
                className="inputAddNewTask"
                onChange={handleChange}
            />
            
            <button className="addBtn">
                Add
            </button>

        </form>
    )
}
export default InputNewTask;