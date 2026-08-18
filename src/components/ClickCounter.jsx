
import { useRef } from "react";

export default function ClickCounter() {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert("You Clicked " + ref.current + "times!")
    }

    return (
        <div className="">

            <button onClick={handleClick}>Click Me!</button>

            {/* This will not work as ref doen't trigger UI re-render */}
            {/* <h3>Clicked with Ref: {ref.current.valueOf(ClickCounter)}</h3> */}
        </div>


    )
}