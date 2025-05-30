import React, { useState } from 'react'
import Tab from './Tab';

const Box = ({addTodo}) => {
    const [val, setVal] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(val)
        setVal("")

    }
  return (
    <div className="border rounded-full border-sky-800 text-black  grid ">
          <form action="" onSubmit={handleSubmit}>
            <input value={val} onChange={(e) => setVal(e.target.value)} className=" rounded-full lg:w-md px-3 py-1 outline-none w-55" type="Text" placeholder="What is your Today's Task" />
            <button type="Submit" className="text-white  bg-sky-800 rounded-full py-2 px-2 relative left-2">
              Add Task 
            </button>
          </form>

       </div>
   
  )
}

export default Box
