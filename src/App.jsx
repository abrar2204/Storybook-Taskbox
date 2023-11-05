import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList'
import { TasksProvider } from './state/TaskContext'

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <TaskList />
      </TasksProvider>
    </div>
  )
}

export default App
