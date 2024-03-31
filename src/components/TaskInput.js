import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { addTodo } from '../utils/todoSlice';

const TaskInput = () => {
  const dispatch = useDispatch();
  const [text,setText] = useState("");

  const handleInputChange = (e)=>{  
    setText(e.target.value);
  }

  const handlerAddClick= ()=>{
    if(text.length>0)
      dispatch(addTodo(text));
    setText("");
  }
  
  return (
    <div>
      <div className='flex flex-col border-b-4'>
        <div className='font-bold text-3xl m-4'>
            <h1>Add a Todo</h1>
        </div>
        <div className='m-4 flex'>
            <div className='w-10/12'>
                <input className='p-2 w-full rounded-lg' type='text' value={text} onChange={handleInputChange}></input>
            </div>
            <div>
                <button className='mx-4 bg-blue-900 p-2 px-4 rounded-lg hover:opacity-90 text-white' 
                  onClick={handlerAddClick}>Add</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TaskInput
