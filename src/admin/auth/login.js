import React, { useRef } from 'react'
import '~/admin/style/index.css'
import axios from 'axios';
import {toast} from 'react-toastify'
import { useDispatch } from 'react-redux';
import { isFailing, isLoading, isLogin } from '~/redux/slice/auth';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        const user = {
            email:emailRef.current.value,
            password:passwordRef.current.value
        };
        if(!user.email || !user.password){
            return toast.error("Vui lòng điền hết thông tin.");
        }
        if(user.password.length < 6){
            return toast.error("Mật khẩu không chính xác.");
        }
        dispatch(isLoading());
        try{
            const res = await axios.post('/user/login',{
                email:user.email,
                password:user.password
            });
            dispatch(isLogin(res.data));
            toast.success(res.data.msg);
            navigate('/');
        }
        catch(err){
            toast.error(err.response.data.msg);
            dispatch(isFailing());
        }
    }

  return (
    <div className='admin-login'>
        <div className='grid wide'>
            <div className='admin-login-container'>
                <div className='admin-login-form'>
                    <div className='admin-login-title'>
                        <span>Đăng Nhập</span>
                    </div>
                    <div className='admin-login-detail'>
                        <input ref={emailRef} type='text' placeholder='Enter Email' />
                    </div>
                    <div className='admin-login-detail'>
                        <input ref={passwordRef} type='password' placeholder='Password' />
                    </div>
                    <div className='admin-login-button'>
                        <button onClick={handleLogin}>Đăng Nhập</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin