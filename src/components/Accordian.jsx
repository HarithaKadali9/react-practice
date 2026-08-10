import React, {useState} from 'react'

const Accordian = () => {
  const [item, setItem]=useState(null);
  const [open, setOpen]=useState(false);
  const array=[
    {"name": "Java",
    "para": "James Gosling"}, 
    {"name": "Python",
    "para":"easy language"}, 
    {"name": "MErn stack", 
      "para": "React"}
    ]
  const handleClick=(ind)=>{
    if(item==ind) setItem(null);
    else setItem(ind)
  }
  return (
    
    <div className="min-h-screen flex items-center justify-center flex-col border border-gray-400 rounded-lg rounded-4 p-3 mb-3  bg-yellow-300">
      <p className="p-8 text-4xl text-red-800 font-bold">This is accordian page </p>
      <div>
        {array.map((course, ind) =>(
          <div key={ind} >
            <button className="text-2xl p-2 border border-black-800 rounded-4" onClick={()=>handleClick(ind)}>{course.name} <strong>{item==ind ? "^" : "V"}</strong></button>
            {item==ind && <p className="text-xl m-2">{course.para}</p>}
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Accordian
