import React, {useState} from 'react'

const Crud = () => {
    // Create
    // read
    // update
    // delete
    const [list, setList]=useState([]);
    const [item, setItem]=useState("")
    const handleCreate=(item)=>{
        setList(...prev, item);
        setItem("");
    }
  return (
    <div>
        <input type="text" id="addlist" onChange={e.target.value}/>
      <button onClick={handleCreate}>Create</button>
      <div>
        <p>Available tasks in list: </p>
        {list.length>0 && list.map((task, ind)=>(
            <p key="ind">{task}</p>
        ))}
      </div>
      <button>Update</button>
      <button>Delete</button>
    </div>
  )
}

export default Crud
