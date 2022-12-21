import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import '~/outstanding/style/index.css';

const TabCardDEtail = ({item}) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/xem-phim/${item?.slug}`);
  }

  const handleNavigateDelete = () => {
    navigate(`/admin/edit/${item?.slug}`);
  }

  const auth = useSelector(state => state.auth);

  return (
    <div className='col c-3 m-3 l-3'>
      <div className='tab_card-detail-container'>
        <Link style={{textDecoration:"none"}} to={`/xem-phim/${item?.slug}`}>
          <div className='image-container'>
              <img src={item?.image} />
          </div>
          <div className='tab_card-detail'>
              <div className='tab_card-title'>
                <span className='tab_card-title-span'>{item?.viet}</span>
              </div>
              <div className='tab_card-title-english'>
                <span className='tab_card-title-span'>{item?.anh}</span>
              </div>
          </div>
        </Link>
        {auth.user?.accessToken && 
        <div className='tab_edit-file'>
          <button>Xóa</button>
          <button onClick={handleNavigate}>Xem</button>
          <button onClick={handleNavigateDelete}>Sửa</button>
        </div>
        }
      </div>
    </div>
  )
}

export default TabCardDEtail