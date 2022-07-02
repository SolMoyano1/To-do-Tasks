import React from "react";
import '../styleSheets/StructureList.css'
import InputNewTask from "./InputNewTask";
import EachTask from "./EachTask";

function StructureList (){

    return(
        <div className="divContainer">
            <h1 className="title">My Tasks</h1>
            <div>
               <InputNewTask/> 
            </div>

            <div>
                <EachTask/>
            </div>
            

        </div>


    )
}
export default StructureList;
