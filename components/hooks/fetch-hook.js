import {useState, useEffect} from 'react';


// this is hook component is used to make fetch calls and handle
// related data fetching related states like data, loading and error
export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoadin] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (url !== null) {
        (async () => {
            try {
                setLoadin(true)
                setError(null)
                const response = await fetch(url.url)
                const json = await response.json()
                setData(json.drinks)
                setLoadin(false)

            } catch (err) {
                setError(err)
            }})()
        }
    }, [url])

    return {data, loading, error}
  
}

