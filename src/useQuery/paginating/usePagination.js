import React, { useEffect, useState } from 'react'

const usePagination = ({total,limit}) => {

    const count = Math.ceil(total / limit);

    const [page,setPage] = useState(1);
    const [firstArr,setFirstArr] = useState([]);
    const [lastArr,setLastArr] = useState([]);

    useEffect(() => {
        const newArr = [...Array(count)].map((item,index) => index + 1);
        if(count >= 4){
            if(count - page > 3){
                const arr = newArr.slice(page - 1,page + 2);
                setFirstArr(arr);
                const las = newArr.slice(count - 1);
                setLastArr(las);
            }
            else{
                const arr = newArr.slice(count - 4);
                setFirstArr(arr);
                setLastArr([]);
            }
        }
        else{
            setFirstArr(newArr);
            setLastArr([]);
        }
    },[total,limit,page]);



    const jump = (e) => {
        setPage(e);
    }

    const next = () => {
        setPage(Math.min(page + 1 , count));
    }
    const prev = () => {
        setPage(Math.max(1,page - 1));
    }

    const activePage = (e) => {
        if(e === page){
            return 'active';
        }
    }
  return {page,jump,next,prev,activePage,firstArr,lastArr}
}

export default usePagination