import { useState, useCallback, useEffect } from "react"

const useFetchData = (url) => {
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        try{
            const response = await fetch(url);
            
            if(!response.ok){
                throw new Error("Something went wrong");
            }
    
            const data = await response.json();
            setData(data);
    
        }catch(err){
            console.log(err);
        }
    
    }, [url])



    useEffect(() => {
        fetchData();
    }, [fetchData])

   
    return data;


}

export default useFetchData