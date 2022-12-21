import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import '~/detail/style/index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Categary from '~/outstanding/categary';
import DeeperDetail from './deeperDetail';
import Comment from './comment';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
const Detail = ({cache}) => {

    const {pathname} = useLocation();
    const trailer = useRef();

    const dispatch = useDispatch();

    const [movie,setMovie] = useState('');

    const {slug} = useParams();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]);

    useEffect(() => {
        let here = true;
        const url = `/product/one/${slug}`;
        dispatch(isLoading());
        axios.get(url)  
            .then(res => {
                if(!here){
                    dispatch(isSuccess());
                    return;
                }
                setMovie(res.data.product);
                dispatch(isSuccess());
            })
            .catch(er => {
                dispatch(isFailing());
            })
        return () => {
            here = false;
        }
    },[slug]);
    


  return (
    <div className='detail-container'>
        <HelmetProvider>
            <Helmet>
                <title>Xem Phim {`${movie?.viet}`}</title>
            </Helmet>
        </HelmetProvider>
        <div className='grid wide'>
            <div className='row'>
                <div className='col c-9 m-9 l-9'>
                    <DeeperDetail trailer={trailer} movie={movie}/>
                    <div className='detail-navbar'>
                        <div className='detail-navbar-container'>
                            <span>NỘI DUNG PHIM</span>
                        </div>
                    </div>
                    <div className='detail-movie-content'>
                        <span>{movie?.description}</span>
                        <div className='detail-movie-content-img'>
                            <img src={movie?.image} />
                        </div>
                    </div>
                    <div ref={trailer} className='detail-navbar'>
                        <div className='detail-navbar-container'>
                            <span>TRAILER</span>
                        </div>
                    </div>
                    <div className='detail-movie-trailer'>
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${movie?.trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='detail-navbar'>
                        <div className='detail-navbar-container'>
                            <span>BÌNH LUẬN PHIM</span>
                        </div>
                    </div>
                    <div className='detail-movie-comment'>
                        <div className='detail-movie-comment-head'>
                            <div className='detail-movie-comment-head-number'>
                                <span>0 bình luận</span>
                            </div>
                            <div className='detail-movie-comment-order'>
                                <span style={{marginRight:"0.5rem"}}>Sắp Xếp Theo:</span>
                                <select>
                                    <option>Mới Nhất</option>
                                    <option>Cũ Nhất</option>
                                </select>
                            </div>
                        </div>
                        <div className='detail-movie-comment-form'>
                            <textarea placeholder='Viết bình luận...'/>
                        </div>
                        <Comment />
                        <Comment />
                        <Comment />
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

export default Detail