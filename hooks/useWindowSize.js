import { useEffect, useState } from "react";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width:window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleSize= () => {
            setWindowSize({
                width : window.innerWidth,
                height: window.innerWidth
            })
        };
        window.addEventListener('resize', handleSize);

        return () => {
            window.removeEventListener('resize', handleSize);
        }
    }, []);

    return windowSize;

}