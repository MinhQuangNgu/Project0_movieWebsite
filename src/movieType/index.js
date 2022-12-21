import React, { useEffect, useState } from 'react'
import {  useLocation, useParams } from 'react-router-dom';
import '~/movieType/type/index.css';
import Order from '~/order';
import Categary from '~/outstanding/categary';
import TabCardDEtail from '~/outstanding/tab/tabCard/card';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Pagination from '~/pagination';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
const TypeMovie = ({cache}) => {

    const {slug} = useParams();

    const [movie,setMovie] = useState();

    const dispatch = useDispatch();

    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]);

    useEffect(() => {
        let here = true;
        const url = `/product?categary=${slug}`;
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
                setMovie(res.data);
                cache.current[url] = res.data;
                dispatch(isSuccess());
            })
            .catch(err => {
                dispatch(isFailing());
            })
        return () => {
            here = false;
        }
    },[slug]);

  return (
    <div className='type_movie-container'>
        <HelmetProvider>
            <Helmet>
                <title>{slug === 'phim-le' ? 'Phim Lẻ': slug === 'phim-bo' 
                ? 'Phim Bộ' : slug === 'anime' ? 'Anime' : 'Phim Chiếu Rạp'}</title>
            </Helmet>
        </HelmetProvider>
        <div className='grid wide'>
            <div className='row'>
                <div className='col c-9 m-9 l-9'>
                    <Order />
                    <div className='type_movie-card-container'>
                        <div className='row'>
                            {movie?.products?.map(item => 
                                <TabCardDEtail key={item?.viet + "key"} item={item}/>
                            )}
                            <Pagination total={movie?.count}/>
                        </div>
                    </div>
                </div>
                <div className='col c-3 m-3 l-3'>
                    <Categary cache={cache}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TypeMovie