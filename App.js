import React, {useState} from "react"
import Icon from "./components/Icon"

//import react-toastify
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

//import reactstrap
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"

const tictac = new Array(9).fill("")


const App = () => {
    let [isCross, setisCross] = useState(true)
    let [winMessage, setwinMessage] = useState("")

    let steps = 0;

    const playAgain = () => {
        setisCross(true);
        tictac.fill("");
        setwinMessage("");
    }

    const findWinner = () => {
         steps++;
        
        if(tictac[0] == tictac[1] && tictac[0] == tictac[2] && tictac[0] != "" )
        return(setwinMessage(tictac[0] + "has won"))

        else if(tictac[3] == tictac[4] && tictac[4] == tictac[5] && tictac[3] != "" )
        return(setwinMessage(tictac[3] + "has won"))

        else if(tictac[6] == tictac[7] && tictac[6] == tictac[8] && tictac[6] != "" )
        return(setwinMessage(tictac[6] + "has won"));

        else if(tictac[0] == tictac[3] && tictac[0] == tictac[6] && tictac[0] != "" )
        return(setwinMessage(tictac[0] + "has won"));
        
        else if(tictac[1] == tictac[4] && tictac[1] == tictac[7] && tictac[1] != "" )
        return(setwinMessage(tictac[1] + "has won"));
        
        else if(tictac[2] == tictac[5] && tictac[2] == tictac[8] && tictac[2] != "" )
        return(setwinMessage(tictac[2] + "has won"));
        
        else if(tictac[0] == tictac[4] && tictac[0] == tictac[8] && tictac[0] != "" )
        return(setwinMessage(tictac[0] + "has won"));
        
        else if(tictac[2] == tictac[4] && tictac[2] == tictac[6] && tictac[2] != "" )
        return(setwinMessage(tictac[2] + "has won"));

        else if(steps == 9)
        return (setwinMessage("it's a draw"))
    }


    return (
        <div>
            <Icon  choice = {isCross? "cross" : "circle"} className = "icon"/>
            </div>

    )
}

export default App