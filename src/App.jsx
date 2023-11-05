import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList'
import { TaskProvider } from './state/TaskContext'

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    </div>
  )
}

export default App
