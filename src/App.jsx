import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ClickCounter from './components/ClickCounter'
import ScrollImage from './components/ScrollImage'
import PlayingVideo from './components/PlayingVideo'
import RenderTracker from './components/RenderTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="border-b-2 border-blue-500">
      <h1>
        All Using use Ref hook
      </h1>

      <ClickCounter />
        <ScrollImage />
      <PlayingVideo />
      <RenderTracker />
    </div>
      

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
