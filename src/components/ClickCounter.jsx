
import { useRef } from "react";

export default function ClickCounter() {
    let ref = useRef(0);
    const inputRef = useRef(null)

    function handleClick() {
        ref.current = ref.current + 1;
        alert("You Clicked " + ref.current + "times!")
    }

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <div className="flex justify-between items-center">

            <button onClick={handleClick}>Click Me!</button>

            {/* This will not work as ref doen't trigger UI re-render */}
            {/* <h3>Clicked with Ref: {ref.current.valueOf(ClickCounter)}</h3> */}

            <input type="text" ref={inputRef} className="bg-red-300" />
            <button onClick={focusInput}>Focus</button>
        </div>


    )
}