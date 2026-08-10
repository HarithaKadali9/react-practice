import React from "react"
import {useState} from "react"
const DarkMode=()=>{
    const [mode, setMode]=useState(false);
    return(
        <div className={`h-screen ${mode ? "bg-white text-black" : "bg-black text-white"}`}>
            <p className="mode: color ? white: black">This is text</p>
            <button onClick={()=>setMode(!mode)}>Click</button>
        </div>
    )
}
export default DarkMode