import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '~/movieDetail/style/index.css';
import {HelmetProvider,Helmet} from 'react-helmet-async';
import Comment from '~/detail/comment';
import { useDispatch } from 'react-redux';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';
import axios from 'axios';
const MovieMoreDetail = () => {

  const {slug} = useParams();
  const [movie,setMovie] = useState("");

  const [movieLink,setMovieLink] = useState("");
  const [episo,setEpiso] = useState(1);

  const dispatch = useDispatch();

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
        dispatch(isSuccess());
        setMovie(res.data.product);
      })
      .catch(err => {
        dispatch(isFailing());
      })
    return () => {
      here = false;
    }
  },[slug]);


  const getEpisode = (e) => {
    if(e == episo){
      return 'active';
    }
  }

  return (
    <div className='watch-container'>
      <HelmetProvider>
        <Helmet>
          <title>Xem Phim {`${movie?.viet}`}</title>
        </Helmet>
      </HelmetProvider>
        <div className='grid wide'>
            <div className='watch'>
                <span className='span-change'>
                  <Link style={{textDecoration:"none"}} to='/'>
                      <span className='watch-home'>Trang Chủ</span>
                  </Link>
                  <span style={{margin:"0 1rem"}}> / </span>
                  {movie?.viet}</span>
            </div>
            <div className='watch-movie'>
                {movie?.categary === 'phim-bo' ? 
                <iframe src={`${movieLink}` || `${movie?.movie}`} width="100%" height="100%" allowFullScreen allow="autoPlay"></iframe>
                :
                <iframe src={`${movie?.movie}`} width="100%" height="100%" allowFullScreen allow="autoPlay"></iframe>}
            </div>
            <div className='watch-title'>
              <span style={{textTransform:"uppercase"}}>{movie?.viet} ({movie?.born})</span>
            </div>
            {movie?.categary === 'phim-bo' ?
            <><div className='watch-episode'>
              <span>
              <i style={{marginRight:"0.5rem"}} className="fa-solid fa-tv"></i>Chọn Tập</span>
              </div>
              <div className='watch-epic'>
                {movie?.phimbo.map(item =>
                  <div key={item?.tap + "asdsd"} onClick={() => {
                    setEpiso(item?.tap);
                    setMovieLink(item?.link);
                  }} className={`episodic ${getEpisode(item?.tap)}`}>
                    {item?.tap}
                  </div>
                )}
            </div>
            </>:
          <div className='watch-episode'>
              <div className='episodic active'>
                Full
              </div>
          </div>}
            <div className='watch-comment-form'>
                <div className='watch-comment-container'>
                  <div className='watch-comment-comment'>
                      <span>0 bình luận</span>
                  </div>
                  <div className='watch-comment-comment-order'>
                      <span style={{marginRight:"0.5rem"}}>Sắp Xếp Theo:</span>
                      <select>
                          <option>Mới Nhất</option>
                          <option>Cũ Nhất</option>
                      </select>
                  </div>
                </div>
                <div className='watch-detail-comment-form'>
                    <textarea placeholder='Viết bình luận...'/>
                </div>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    </div>
  )
}

export default MovieMoreDetail