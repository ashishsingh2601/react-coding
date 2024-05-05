import { useEffect, useCallback } from "react";
import { useState } from "react"


const useDataFetch  = (url, page) => {
    console.log("page->", page)
    const [postsData, setPostsData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);


    const fetchData = useCallback(async () => {
        console.log(`${url}?limit=10&skip=${page * 10 - 10}`)
        try{
            setLoading(true);
            const response = await fetch(`${url}?limit=10&skip=${page * 10 - 10}`)
            if(!response.ok){
                throw new Error("Something Went Wrong!");
            }
            const data = await response.json();
            setPostsData(data);
            setTotalPages(data.total / 10);
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }, [url, page]);

    useEffect(() => {
        fetchData();
    }, [fetchData])


    return [postsData, totalPages, loading];
}

export default useDataFetch