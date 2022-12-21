import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '~/outstanding/style/index.css';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
import TabCardDEtail from './card';

const TabCard = ({type,cache}) => {

  const [movie,setMovie] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    let here = true;
    const url = `/product?categary=${type}`;
    if(cache.current[url]){
      return setMovie(cache.current[url]);
    }
    dispatch(isLoading());
    axios.get(url)
      .then(res => {
        if(!here){
          dispatch(isSuccess());
          return;
        }
        dispatch(isSuccess());
        cache.current[url] = res.data;
        setMovie(res.data);
      })
      .catch(err => {
        dispatch(isFailing());
      })
    return () => {
      here = false;
    }
  },[type]);

  return (
    <div className='tab_card-container'>
        <div className='row'>
            {movie?.products?.map(item => 
              <TabCardDEtail item={item} key={item?.slug + type} />
            )}
        </div>
        <div className='watch-all'>
            <Link className='watch-all-link' to={`/${type}`}>
               <span>Xem Tất Cả</span>
            </Link>
        </div>
    </div>
  )
}

export default TabCard