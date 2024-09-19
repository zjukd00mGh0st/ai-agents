import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/system/Sidebar/Sidebar'
import Chat from './components/system/Chat/Chat'

function App() {

  return (
      <div className="system--app">
        <div className="system--app-sidebar">
          <Sidebar />
        </div>
        <div className="system--app-chat">
          <Chat />
        </div>
      </div>
  )
}

export default App
