import React from 'react'
import './index.css';
import {Link} from 'react-router-dom';
import NavBarGeneral from './general';
const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='grid wide h_100'>
            <div className='navbar'>
                <div className='navbar-col'>
                    <Link className='navbar-col-link' to='/'>
                        <span>TRANG CHỦ</span>
                    </Link>
                </div>
                <div className='navbar-col'>
                    <Link className='navbar-col-link' to='/phim-le'>
                        <span>PHIM LẺ</span>
                    </Link>
                </div>
                <div className='navbar-col'>
                    <Link className='navbar-col-link' to='/phim-bo'>
                        <span>PHIM BỘ</span>
                    </Link>
                </div>
                <div className='navbar-col'>
                    <Link className='navbar-col-link' to='/phim-chieu-rap'>
                        <span>PHIM CHIẾU RẠP</span>
                    </Link>
                </div>
                <div className='navbar-col'>
                    <div className='navbar-col-span'>
                        <span style={{marginRight:"1rem"}}>THỂ LOẠI</span>
                        <i className="fa-solid fa-caret-down"></i>
                        <NavBarGeneral infor="the-loai"/>
                    </div>
                </div>
                <div className='navbar-col'>
                    <div className='navbar-col-span'>
                        <span style={{marginRight:"1rem"}}>QUỐC GIA</span>
                        <i className="fa-solid fa-caret-down"></i>
                        <NavBarGeneral infor="quoc-gia"/>
                    </div>
                </div>
                <div className='navbar-col'>
                    <div className='navbar-col-span'>
                        <span style={{marginRight:"1rem"}}>NĂM SẢN XUẤT</span>
                        <i className="fa-solid fa-caret-down"></i>
                        <NavBarGeneral infor="nam-san-xuat"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar