import { useEffect, useState } from "react";

export function useFetch (url) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        // AbortController prevents state updates on unmounted components (Race Conditions)

        const abortController = new AbortController();

        const fetchData= async () => {
            try {
                setLoading(true);
                const response = await fetch(url, {
                    signal: abortController.signal
                })

                if(!response.ok) {
                    throw new Error('Network Response Failed!')
                }

                const json = await response.json();
                setData(json)
                setError(null);

            } catch (error) {
                if (error.name !== 'AbortError'){
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchData();

        return () => {
            // Cleanup function: Aborts the fetch request if the user navigrated away the mid-request
            abortController.abort();
        }
    }, [url])

    return {data, isLoading, error}
}

// we returned data, loading and error 