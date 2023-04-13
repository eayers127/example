import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import viteImage from './assets/vite1.jpg'
import viteImage1 from './assets/vite2.jpg'
import viteImage2 from './assets/vite3.jpg'
import viteImage3 from './assets/vite4.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p>
        Here we can see the app created using Vite.
      </p>
      <p>The steps are simple:</p>
      <ul className='list'>
        <li>Run npm init vite</li>
        <li>Name your project by typing the name</li>
        <li>Use the arrowkeys to select a framework - I chose React for this app</li>
        <li>Select a variant such as TypeScript - I chose JavaScript</li>
        <li>Then run these commands: cd 'your project name', npm install (npm i), and npm run dev to locally run your app</li>
      </ul>
      <p>Here are some images taken throughout the creation of this app to show the steps:
</p>
<img src={viteImage}></img>
<img src={viteImage1}></img>
<img src={viteImage2}></img>
<img src={viteImage3}></img>

    </div>
  )
}

export default App
