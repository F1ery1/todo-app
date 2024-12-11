import { useState } from 'react'
import {AddTask} from '../components/AddTask'
import {Task} from '../components/Task'
import './App.css'


export const App = () => {
  return (
    <div className='app'>
      <AddTask/>
      <div className='taskList'>
        <Task/>
      </div>
    </div>
  )
}