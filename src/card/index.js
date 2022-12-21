import React from 'react'
import '~/card/index.css';
import { Link } from 'react-router-dom';
const Card = ({item}) => {
  return (
    <div className='card-container'>
        <Link style={{textDecoration:"none"}} to={`/xem-phim/${item?.slug}`}>
          <div className='image-container'>
              <img src={item?.image} />
          </div>
          <div className='card-detail'>
              <div className='card-title'>
                <span style={{textTransform:"capitalize"}}>{item?.viet}</span>
              </div>
              <div className='card-title-english'>
                <span style={{textTransform:"capitalize"}}>{item?.anh}</span>
              </div>
          </div>
        </Link>
    </div>
  )
}

export default Card