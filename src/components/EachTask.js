import React from "react";
import '../styleSheets/EachTask.css'
import {AiFillCloseSquare} from "react-icons/ai";
import { AiOutlineCheckSquare } from "react-icons/ai";

function EachTask (props){

    const {taskName, id, completed, toCheck, toDelete} = props;
    
    return(
       <div className="divEachTask">

            <div className="taskName">
                {taskName}
            </div>

            <div>
                <AiOutlineCheckSquare 
                  className="icons"
                  onClick={toCheck}
                />
            </div>

            <div>
                <AiFillCloseSquare 
                  className="icons"
                  onClick={toDelete}
                />
            </div>
            
       </div>
    )
}
export default EachTask;