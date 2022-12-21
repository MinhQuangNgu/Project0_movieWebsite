import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import '~/outstanding/style/index.css';

const CategaryCard = ({item}) => {


  return (
    <Link style={{textDecoration:"none"}} to={`/xem-phim/${item?.slug}`}>
        <div className='categary-card-container'>
            <div className='categary-card-img'>
                <img src={item?.image} />
            </div>
            <div className='categary-card-detail'>
                <div className='categary-card-viet-title'>
                    <span style={{textTransform:"capitalize"}}>{item?.viet}</span>
                </div>
                <div className='categary-card-english-title'>
                    <span style={{textTransform:"capitalize"}}>{item?.anh}</span>
                </div>
                <div className='categary-card-watch'>
                    <span>{item?.watch} lượt xem</span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CategaryCard