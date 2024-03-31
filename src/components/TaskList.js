import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../utils/todoSlice';


const TaskList = () => {
  const todo = useSelector((store)=>store.todo);
  const dispatch = useDispatch();
  
  const handleDeleteTodo = (id)=>{
    dispatch(deleteTodo(id))
  }

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div>
       <div className='font-bold text-3xl m-4'>
            <h1>Todo List</h1>
        </div>
        <div className='m-4 flex flex-col'>
            {todo &&
              todo.map((data)=>{
                return <div className='flex flex-row m-2'>
                  <div className='w-10/12'>
                    <ul>
                      <li className='text-xl font-bold mx-2'
                        key={data.id}
                        style={{
                          textDecoration: data.completed ? "line-through" : "none",
                        }}
                      >{data.text}</li></ul>
                  </div>
                  <div className='flex'>
                      <button className='mx-4 bg-green-400 p-2 px-4 rounded-lg hover:opacity-90 '
                      onClick={() => handleToggleComplete(data.id)}>{data.completed ? "Incomplete" : "Complete"}</button>
                      <button className='mx-4 bg-green-400 p-2 px-4 rounded-lg hover:opacity-90'
                      onClick={() => handleDeleteTodo(data.id)}>Delete</button>
                  </div>
                </div>
              })
            }
        </div>
    </div>
  )
}

export default TaskList
