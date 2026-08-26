import { useState } from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'
import ScrollImage from './components/ScrollImage'
import PlayingVideo from './components/PlayingVideo'
import RenderTracker from './components/RenderTracker'
import TodoList from './components/TodoList'

import { createTodos } from './utlis'
import DisplayList from './components/DisplayList'

const todos = createTodos();

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(false);
  const [tab, setTab] = useState('all');

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

    <div className="border">
      <h1>This is from useMemo Hooks</h1>

      <div className='flex item centre w-10 bold'>
        <button onClick={() => setTab('all')}> All</button>
        <button onClick={() => setTab('active')}> Active</button>
        <button onClick={() => setTab('completed')}> Completed</button>
      </div>
      <br />
      <label> 
          <input type="checkbox" checked={isDark} 
          onChange={(e) => setIsDark(e.target.checked)}
          />
          Dark Mode
      </label>
      <hr />
      
      <div>
        <TodoList 
          todos={todos} 
          tab={tab}
          theme={isDark ? 'bg-black text-white' : 'bg-white text-black'}
        />
      </div>

    </div>
    
    <div className="border-1 ">
      <h1>Now about useCallback Hook</h1>

      <div className="">
        <DisplayList />
      </div>
    </div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
