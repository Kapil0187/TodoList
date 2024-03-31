import React from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'

const MainContainer = () => {
  return (
    <div className='m-4 md:m-16 rounded-lg p-8 bg-gray-300 shadow-lg'>
      <TaskInput/>
      <TaskList/>
    </div>
  )
}

export default MainContainer
