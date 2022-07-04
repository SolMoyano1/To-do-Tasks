import React, { useState } from "react";
import '../styleSheets/StructureList.css'
import InputNewTask from "./InputNewTask";
import EachTask from "./EachTask";

function StructureList (){

    const [tasks, setTasks] =  useState ([]);

    const addNewTask = (task)=>{
        if(task.taskName.trim()){
            task.taskName = task.taskName.trim();
            const newArrayTasks = [task, ...tasks];
            setTasks(newArrayTasks);
        };
    };

    const deleteTask = (id)=>{
        const newArrayTasks = tasks.filter((task)=> task.id !== id);
        setTasks(newArrayTasks);
    };
    
    const chekTaskAsCompleted = (id) =>{
        const newArrayTasksCompleted = tasks.map( (task) =>{
            if(task.id === id){
                task.completed = !task.completed;
            }
            return task;
        })
        setTasks(newArrayTasksCompleted);
    };

    return(
        <div className="divContainer">
            <h1 className="title">My Tasks</h1>
            <div>
               <InputNewTask submit={addNewTask}/> 
            </div>

            <div>
                {
                    tasks.map((task)=>
                        <EachTask
                            taskName = {task.taskName}
                            id = {task.id}
                            completed = {task.completed}
                            toCheck = {chekTaskAsCompleted}
                            toDelete = {deleteTask}
                            key = {task.id}
                        />
                    )
                    
                }
            </div>
        </div>
    )
}
export default StructureList;
