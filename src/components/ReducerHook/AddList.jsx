import { useState } from "react"

export default function AddList({addList}){
    const [curText, setCurText] = useState('')

    const addingAList =(text) =>{
        if(!text.trim()) return; //prevents empty tasks

        addList(curText);
        setCurText('');
    }
    return(
        <div>
            <input type="text" placeholder="Add Task" value={curText} onChange={(e) => setCurText(e.target.value)} />

            <button onClick={() => addingAList(curText)} >Add</button>
        </div>
    )
}