import React from 'react'
import {useNavigate} from 'react-router-dom';
const DeeperDetail = ({trailer,movie}) => {

    const navigate = useNavigate();

    const handleTrigger = () => {
        trailer.current.scrollIntoView();
    }

    const handleNavigate = () => {
        navigate(`/watch/${movie?.slug}`);
    }

  return (
    <div className='detail'>
        <div className='detail-movie'>
            <div className='detail-movie-image'>
                <img src={movie?.image} alt={movie?.viet}/>
                <div className='detail-movie-button'>
                    <button onClick={handleTrigger}><i style={{marginRight:"0.5rem"}} className="fa-brands fa-youtube"></i>Trailer</button>
                    <button onClick={handleNavigate}><i style={{marginRight:"0.5rem"}} className="fa-solid fa-play"></i>Xem Phim</button>
                </div>
            </div>
            <div className='detail-movie-container'>
                <div className='detail-movie-viet'>
                    <span>
                        {movie?.viet}
                    </span>
                </div>
                <div className='detail-movie-english'>
                    <span>{movie?.anh} ({movie?.born}) | HD | {movie?.status} VietSub</span>
                </div>
                <div className='detail-movie-detail-container'>
                    <div className='detail-movie-status'>
                        <span>Trạng Thái: <span>{movie?.status} Vietsub</span></span>
                    </div>
                    <div className='detail-movie-contry'>
                        <span>Quốc Gia: {movie?.country}</span>
                    </div>
                    <div className='detail-movie-contry'>
                        <span>Thời Lượng: {movie?.times}</span>
                    </div>
                    <div className='detail-movie-contry'>
                        <span>Năm Sản Xuất: {movie?.born}</span>
                    </div>
                    <div className='detail-movie-contry'>
                        <span>Thể Loại:
                            {movie?.kind?.map((item,index) => 
                                <span key={index + "adsdas"}> {item?.name}{index === movie?.kind.length - 1 ? '.' :' , '} </span>
                            )}
                        </span>
                    </div>
                    <div className='detail-movie-contry'>
                        <span>Lượt Xem: {movie?.watch}</span>
                    </div>
                    <div className='detail-movie-rating'>
                        <div className='detail-movie-rating-container'>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className='detail-movie-rating-container-fullstar'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeeperDetail