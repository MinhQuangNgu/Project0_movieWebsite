import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { isFailing, isLoading, isSuccess } from '~/redux/slice/auth';

const DeleteBrand = ({setDeleteBrand}) => {

    const [brand,setBrand] = useState([]);
    const [delBrand,setDelBrand] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        let here = true;
        dispatch(isLoading());
        axios.get('/kind')
            .then(res => {
                if(!here){
                    dispatch(isSuccess());
                    return;
                }
                dispatch(isSuccess());
                setBrand(res.data.kinds);
            })
            .catch(() => {
                dispatch(isFailing());
            })

        return () => {
            here = false;
        }
    },[]);

    const handleDeleteBrand = async () => {
        dispatch(isLoading());
        try{
            const res = await axios.delete(`/kind/delete/${delBrand?.slug}`,{
                headers:{
                    token:`Bearer ${auth.user?.accessToken}`
                }
            });
            toast.success(res.data.msg);
            dispatch(isSuccess());
            setDelBrand('');
        }
        catch(err){
            toast.error(err.response.data.msg);
            dispatch(isFailing());
        }
    }


  return (
    <div className='delete-brand-container'>
        <div className='create-brand-container'>
            <div className='create-brand-close'>
                <i onClick={() => setDeleteBrand(false)} style={{cursor:"pointer"}} className="fa-solid fa-xmark"></i>    
            </div>
            <div className='create-brand-title'>
                <span>Xóa Brand</span>
            </div>
            <ul className='brand-list'>
                {brand.map(item => 
                    <li onClick={() => setDelBrand(item)} key={item.name} className='brand-list-item'>{item.name}</li>
                )}
            </ul>
            {delBrand && 
            <div className='brand-confirm'>
                <span>Bạn có thực sự muốn xóa {delBrand?.name}?</span>
                <div className='brand-button'>
                  <button onClick={handleDeleteBrand}>Xóa</button>  
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default DeleteBrand