import { useState } from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'
import ScrollImage from './components/ScrollImage'
import PlayingVideo from './components/PlayingVideo'
import RenderTracker from './components/RenderTracker'
import TodoList from './components/TodoList'

import { createTodos } from './utlis'
import DisplayList from './components/DisplayList'
import TaskApp from './components/ReducerHook/TaskApp'
import TaskAppReducer from './components/ReducerHook/TaskAppReducer'
import { RegistrationForm } from './components/ReducerHook/RegistrationForm'
import Dashboard from './components/CustomHooks/Dashboard'
import FishingData from './components/CustomHooks/UserData'

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

    <div className="border-1 mt-5">
      <h1>For Reducer Hook</h1>
      <TaskApp />
      <h1>Again but with changes (used useReducer)</h1>
    <br />

    <TaskAppReducer />

    <RegistrationForm />
    </div>

    <div className="border-t ">
      <h1>Now custom Hooks</h1>
      <Dashboard />
      <br />

      <FishingData />
    </div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
