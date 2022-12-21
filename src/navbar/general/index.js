import React from 'react'
import { Link } from 'react-router-dom'

const NavBarGeneral = ({infor}) => {
  return (
    <div className='navbar-general-container'>
        <div className='navbar-general'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <Link className='navbar-item-link' to={`/${infor}/anime`}>
                        <span>Anime</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBarGeneral