import React from "react";
import '../styleSheets/EachTask.css'
import {AiFillCloseSquare} from "react-icons/ai";
import { AiOutlineCheckSquare } from "react-icons/ai";

function EachTask (props){

    const {taskName, id, completed, toCheck, toDelete} = props;
    
    return(
       <div className={completed? 'divEachTask divCompletedTAsks': 'divEachTask' } >

            <div className="taskName">
                {taskName}
            </div>

            <div>
                <AiOutlineCheckSquare 
                  className="icons"
                  onClick={()=> toCheck(id)}
                />
            </div>

            <div>
                <AiFillCloseSquare 
                  className="icons"
                  onClick={()=> toDelete(id)}
                />
            </div>
            
       </div>
    )
}
export default EachTask;