import { useState, useEffect } from "react"

const imgUrl = 'https://image.tmdb.org/t/p/w500'
export const useFetch = (searchTitle) => {
        const [data , setData] = useState([])
        const [page, setPage] = useState(1)
        const [totalPages, setTotalPages] = useState(0);
    const HelperFetch =async(page)=>{
        try {
            let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=aaf8812b1d1a70feeec14d75ddd78b5f&language=es-MX&page=${page}`;

            if (searchTitle) {
                url = `https://api.themoviedb.org/3/search/movie?api_key=aaf8812b1d1a70feeec14d75ddd78b5f&language=es-MX&page=${page}&query=${searchTitle}`;
            }

            const res = await fetch(url);
            const response = await res.json();
                
            if (page === 1) {
                setTotalPages(response.total_pages);
            }

            setData(response.results);
        } catch (error) {
            console.log(error);
        }
    };
    const next = () => {
        
        setPage(page + 1);
    };
    
    const prev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    
    useEffect(()=> {
        HelperFetch(page)
        
    }, [page, searchTitle])
    
    return [imgUrl, page , data, next , prev]
}

