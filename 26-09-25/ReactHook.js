import { useState } from "react";

function ReactHook(){
    const [message,changeMessage]=useState("Hello")

    const onClickBtn=()=>{
        changeMessage("Good Bye")
    }

    return(
        <div>
            <button onClick={onClickBtn}>Cilck</button>
            <p>{message}</p>
        </div>
    )
}

export default ReactHook