import React from "react";
import '../styleSheets/InputNewTask.css'

function InputNewTask (){
    
    return(
        <form className="formNewTask">
            <input 
                type='text' 
                placeholder='Add a new task' 
                name='taskName'
                className="inputAddNewTask"
            />
            
            <button className="addBtn">
                Add
            </button>
        </form>
    )
}
export default InputNewTask;