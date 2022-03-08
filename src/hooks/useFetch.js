import {useState, useEffect} from 'react';

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleFetch = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => setError(err))
    }

    useEffect(() => {
        handleFetch()
    }, [url])

    return {data, error}
}