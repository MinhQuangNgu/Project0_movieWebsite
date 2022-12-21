import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '~/card';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
const NomitationMovie = ({cache}) => {

  const [movie,setMovie] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    let here = true;
    const url = `/product?sort=-watch&limit=10`;

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
        cache.current[url] = res.data.products;
        setMovie(res.data.products);
      })
      .catch(er => {
        dispatch(isFailing());
      })
    return () => {
      here = false;
    }
  },[]);
  return (
    <div className='nomitation_movie-container'>
        <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={10}
        slidesPerView={6}
        navigation
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
        >
        {movie?.map(item => 
          <SwiperSlide key={item?._id + "categary"}><Card item={item}/></SwiperSlide>
        )}
        </Swiper>
    </div>
  )
}

export default NomitationMovie