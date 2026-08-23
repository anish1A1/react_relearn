import { useRef, useEffect } from "react";

function RenderTracker() {
    
    const renderRefCount = useRef(0);
    useEffect(() => {
        renderRefCount.current += 1;
    });
    console.log(renderRefCount.current)

    return <p>This component has rendered {renderRefCount.current} times.</p>;
}
export default RenderTracker;