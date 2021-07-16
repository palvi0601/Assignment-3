import React from "react"
import {FaTimes, Fapen, FaRegCircle} from "react-icons/fa"

const Icon = ({choice}) => {
    
       switch(choice){
        case "cross" : 
        return <FaTimes />;
        case "circle":
            return <FaRegCircle />;
        default :
        return "";
       }
}

export default Icon