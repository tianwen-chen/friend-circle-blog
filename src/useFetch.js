import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout( () =>{
          fetch(url)
          .then(res => {
            if(!res.ok){  // error in fetching data from the server
              throw Error('cannot fetch from the resource');
            }
            return res.json();
          })
          .then( data => {
            setData(data);
            setIsPending(false);
            setError(null)
          })
          .catch(err => {
            setError(err.message);
            setIsPending(false);
          })
        }, 200)
      }, [url]);
    return ( {data, isPending, error} );
}
 
export default useFetch;