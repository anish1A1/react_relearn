import { useReducer } from "react";
import TaskList from "./TaskList";
import AddList from "./AddList";

// You can use this reducerFunction inside the component or even outside like this
function tasksReducer(tasks, action) {
    switch (action.type){
        case 'added' :{
            return [
                ...tasks,{
                    id: action.id,
                    text: action.text,
                    done: false
                }
            ];
        }
        case 'changed' : {
            return tasks.map((t) => t.id === action.task.id ? action.task : t)
        }
        case 'delete' : {
            return tasks.filter((t) => t.id !== action.id)
        }
        default: {
            throw Error("Unknown action: " + action.type)
        }        
    }
}

export default function TaskAppReducer() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text:text
        })
    }

    function handleChangeTask(task){
        dispatch({
            type: 'changed',
            task:task
        })
    }

    function handleDelete (id) {
        dispatch({
            type: 'delete',
            id: id
        })
    }

    return (
        <div className="">

            <h1>Tasks : with Reducer (Used useReducer to make usage of single state) </h1>

            <AddList addList={handleAddTask}/>

            <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDelete} />
        </div>
    )


}


let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];