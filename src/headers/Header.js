import React, { useState ,useRef} from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { isLogout } from '~/redux/slice/auth';
import {isFailing,isLoading,isSuccess} from '~/redux/slice/auth';
import {toast} from 'react-toastify';
import DeleteBrand from '~/admin/brand/Delete';
const Header = () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [trigger,setTrigger] = useState(false);
    const [deleteBrand,setDeleteBrand] = useState(false);
    const brandRef = useRef("");

    const handleLogout = () => {
        dispatch(isLogout());
    }

    const handleCreateBrand = async () => {
        if(!brandRef.current.value){
            return toast.error("Vui lòng điền thông tin.");
        }
        dispatch(isLoading());
        try{
            const res = await axios.post('/kind/create',{
                name:brandRef.current.value
            },{
                headers:{
                    token:`Bearer ${auth.user?.accessToken}`
                }
            });

            toast.success(res.data.msg);
            dispatch(isSuccess());
            brandRef.current.value = "";
        }
        catch(err){
            toast.error(err.response.data.msg);
            dispatch(isFailing());
        }
    }
    
  return (
    <div className='head-container'>
        <div className='grid wide h_100'>
            <div className='row h_100'>
                <div className='col c-12 m-12 l-3 h_100'>
                    <div className='head-brand'>
                        <Link to='/' className='head-brand-link'>
                            <span style={{color:"#FD6363"}}>KASUGASHOP</span>.COM
                        </Link>
                    </div>
                </div>
                <div className='col c-0 m-0 l-6 h_100'>
                    <div className='head-search'>
                        <div className='head-search-container'>
                            <input type='text' placeholder='Tìm Kiếm'/>
                            <div className='head-search-icon'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col c-0 m-0 l-3'>
                    {!auth.user ? <div className='head-auth'>
                        <Link className='head-auth-link' to='/register'>
                            <span>Đăng Ký</span>
                        </Link>
                        <Link className='head-auth-link' to='/login'>
                            <span>Đăng Nhập</span>
                        </Link>
                    </div>:
                    <div className='head-auth'>
                        {auth.user?.accessToken && 
                        <>
                            <div style={{fontSize:"1rem"}} className='head-auth-link'>
                                <span onClick={() => setDeleteBrand(true)}>Xóa Kind</span>
                            </div>
                            <div style={{fontSize:"1rem",marginRight:"1rem"}} className='head-auth-link'>
                                <span onClick={() => setTrigger(true)}>Tạo Kinds</span>
                            </div>
                            <Link  style={{marginRight:"2rem",fontSize:"1rem"}} className='head-auth-link' to='/admin/create'>
                                <span>Tạo Phim</span>
                            </Link>
                        </>
                        }
                        <div className='head-auth-link'>
                            <span onClick={handleLogout}>Đăng Xuất</span>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
        {trigger && 
        <div className='create-brand'>
            <div className='create-brand-container'>
                <div className='create-brand-close'>
                    <i onClick={() => setTrigger(false)} style={{cursor:"pointer"}} className="fa-solid fa-xmark"></i>    
                </div>
                <div className='create-brand-title'>
                    <span>Tạo Brand</span>
                </div>
                <div className='create-brand-input'>
                    <input defaultValue={brandRef.current?.value} ref={brandRef} type='text' placeholder='Brand'/>
                </div>
                <div className='create-brand-button'>
                    <button onClick={handleCreateBrand}>Tạo Brand</button>
                </div>
            </div>
        </div>
        }
        {deleteBrand && 
            <DeleteBrand setDeleteBrand={setDeleteBrand}/>
        }
    </div>
  )
}

export default Header