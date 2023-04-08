import { useState} from "react";
import {Child} from "./Child"

export const Parent = () => {
    const [text,setText] = useState("My Text")
    const fromChild =(fromtext) =>{
        setText(fromtext)
    }

    return(
        <div>
        <h1>{text}</h1>
        <Child fromChild = {fromChild}/>
    </div>
    )
}