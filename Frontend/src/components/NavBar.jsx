import React from 'react'

const NavBar = () => {
  const items=[{"name": "Tasks"}, {"name": "DoOperation"}]
  return (
    <div>
        
      {items.map((item, ind)=>(
        <button key={ind} className="p-4">{item.name}</button>
      ))}
    </div>
  )
}

export default NavBar
