import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import '~/outstanding/style/index.css';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
import CategaryCard from './categaryCard';
import CategaryHead from './header';
const Categary = ({cache}) => {

  const [movie,setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let here = true;
    const url = '/product?sort=-watch&limit=12';
    if(cache.current[url]){
      return setMovies(cache.current[url]);
    }
    dispatch(isLoading());
    axios.get(url)
      .then(res => {
        if(!here){
          dispatch(isSuccess());
          return;
        }
        dispatch(isSuccess());
        cache.current[url] = res.data.products;
        setMovies(res.data.products);
      })
      .catch(() => {
        dispatch(isFailing());
      })
    return () => {
      here = false;
    }
  },[]);

  return (
    <div className='categary-container'>
        <CategaryHead />
        <div className='categary-detail'>
            {movie?.map(item => 
              <CategaryCard key={item?._id + "cateitem"} item={item}/>
            )}
        </div>
    </div>
  )
}

export default Categary