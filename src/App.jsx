import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ClickCounter from './components/ClickCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-2xl max-w-fit">
        <h1>We have started our project</h1>
      </div>

      <ClickCounter />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
