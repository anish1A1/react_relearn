import { useState } from "react";
import TaskList from "./TaskList";
import AddList from "./AddList";


export default function TaskApp() {

    const [tasks, setTask] = useState(initialTasks);

    function changeTask(updatedTask) {
       setTask(tasks.map((t) => 
        t.id === updatedTask.id ? updatedTask : t  
        ));
    }

    function deleteTask (id){
        setTask(tasks.filter((t) => t.id !== id))
    }

    function addList(text){
        setTask([...tasks, {
            id: nextId++,
            text: text,
            done: false
        }])
    }


    return(
        <div className="">
        <h1>Tasks : Normally (Normally with many states usage) </h1>

        <AddList addList ={addList}/>
        
        <TaskList tasks={tasks} onChangeTask={changeTask} onDeleteTask={deleteTask}/>
        </div>
    );
};




let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];