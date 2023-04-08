import React from "react";

export const Child = ({fromChild}) => {
    return (
        <div>
           <button onClick={()=> fromChild("Hear Child Component")}>Child Component</button>
        </div>
    )
}