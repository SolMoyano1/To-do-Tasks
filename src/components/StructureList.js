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
        console.log('A new task was added')
    };

    /*
     addTask?
  Es una funcion q recibe a tarea como argumento

  Crea un if para agregar una nueva tarea al estado:
        
            if (verifico q la tarea no esté en blanco: veo q el texto sea una cadena q no esté vacia){
              - si no está vacia, le quito espacios al finall y al ppo del texto usando el metodo trim()
              
              - hago una constante q será un nuevo array: tomará el estado actual de todas las tareas 
                q vamos teniendo, y tomará tmb la tarea nueva, a la cual la pondrá al ppo de este nuevo array.
                (con ... convierto las tareas del arreglo a tareas individuales(objetos individuales d ese array))
              
                -con setTasks actualizo el estado de tasks, al pasarle la constante q cree arriba(con las tareas actualizadas)
                Esto me permite tomar las tareas anteriores y agregar las tareas anteriores al estado
    .       } 
    
    */

    const chekTaskAsCompleted = ()=>{

    };

    const deleteTask = ()=>{

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
                            id= {task.id}
                            completed={task.completed}
                            toCheck={chekTaskAsCompleted}
                            toDelete={deleteTask}
                            key={task.id}
                        />
                    )
                    
                }
            </div>
        </div>
    )
}
export default StructureList;
