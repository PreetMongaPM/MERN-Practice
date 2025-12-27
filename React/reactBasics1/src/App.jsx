import { useState } from 'react'
import PM from './assets/PreetMongaPM.jpg'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={PM} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
        </ul>
      </div>
      <h1>It's PM</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Jaap Count is {count}
        </button>
        <p>
          Welcome to PM's world
        </p>
      </div>
  
    </>
  )
}

export default App
