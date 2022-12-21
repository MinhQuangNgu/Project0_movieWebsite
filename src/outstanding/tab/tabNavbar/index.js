import React from 'react'
import { Link } from 'react-router-dom';
import '~/outstanding/style/index.css';
const TabNavbar = ({infor,type}) => {
  return (
    <div className='tab_navbar-container'>
        <Link className='tab_navbar-link' to={`/${type}`}>
            <div className='tab_navbar-detail'>
                <span>{infor}</span>
            </div>
        </Link>
    </div>
  )
}

export default TabNavbar