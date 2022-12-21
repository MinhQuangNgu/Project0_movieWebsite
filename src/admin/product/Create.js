import '~/admin/style/index.css'
import React, {useCallback, useState,useEffect, useRef} from 'react'
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import {isLoading,isSuccess,isFailing} from '~/redux/slice/auth';
import CheckForm from './checkForm';
import { toast } from 'react-toastify';
const CreatProduct = () => {

    const [image,setImage] = useState('');

    const imgRef = useRef("");
    const  [kind,setKind] = useState([]);
    const dispatch = useDispatch();

    const vietRef = useRef();
    const anhRef = useRef();
    const descriptionRef = useRef();
    const trailerRef = useRef();
    const movieRef = useRef();
    const statusRef = useRef();
    const countryRef = useRef();
    const bornRef = useRef();
    const timeRef = useRef();
    const categaryRef = useRef();

    const auth = useSelector(state => state.auth);

    useEffect(() => {
        let here = true;
        dispatch(isLoading());
        axios.get('/kind')
            .then(res => {
                if(!here){
                    return;
                }
                dispatch(isSuccess());
                setKind(res.data.kinds);
            })
            .catch(err => {
                dispatch(isFailing());
            }) 
        return () => {
            here = false;
        }
    },[]);

    const [kindBox,setKindBox] = useState([]);

    const handleCreate = async () => {
        const movie = {
            viet:vietRef.current.value.toLowerCase(),
            anh:anhRef.current.value.toLowerCase(),
            description:descriptionRef.current.value,
            trailer:trailerRef.current.value,
            movie:movieRef.current.value,
            status:statusRef.current.value,
            country:countryRef.current.value,
            born:bornRef.current.value,
            categary:categaryRef.current.value,
            times:timeRef.current.value,
            kind:kindBox
        }
        const fields = ['viet','anh','description','trailer','movie','status','country','born',
        'categary','kind'];
        const check = fields.some(item => !movie[item]);
        if(check){
            return toast.error("Vui lòng điền hết thông tin.");
        }
        if(!image){
            return toast.error("Vui lòng chọn ảnh.");
        }
        let avatar;
        const formData = new FormData();
        formData.append("file",imgRef.current);
        formData.append("upload_preset","pxpqedfh");
        dispatch(isLoading());
        try{
            const res = await axios.post("https://api.cloudinary.com/v1_1/dqbrxkux1/image/upload",formData);
            avatar = res.data.url;
            dispatch(isSuccess());
        }
        catch(err){
            dispatch(isFailing());
        }
        dispatch(isLoading());
        try{
            const res = await axios.post('/product/create',{
                ...movie,
                image:avatar
            },{
                headers:{
                    token:`Bearer ${auth.user?.accessToken}`
                }
            });
            toast.success(res.data.msg);
            dispatch(isSuccess());
        }
        catch(err){
            toast.error(err.response.data.msg);
            dispatch(isFailing());
        }
    }


    const onDrop = useCallback(acceptedFiles => {
        if(image){
            URL.revokeObjectURL(image);
        }
        imgRef.current = acceptedFiles[0];
        const url = URL.createObjectURL(acceptedFiles[0]);
        setImage(url);
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  return (
    <div className='admin-create'>
        <div className='grid wide'>
            <div className='admin-create-container'>
                <div className='admin-create-form'>
                    <div className='admin-create-img-again'>
                        <img src={image} />
                        <div className='admin-create-img-form'>
                            <div style={{width:'100%',height:'100%',display:"flex",alignItems:"center",justifyContent:"center"}} {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                <span>
                                    <i style={{marginRight:"1rem"}} className="fa-solid fa-image"></i>
                                    Ảnh
                                </span> :
                                <span>
                                    <i style={{marginRight:"1rem"}} className="fa-solid fa-image"></i>
                                    Ảnh
                                </span>
                            }
                            </div>
                        </div>
                    </div>
                    <div className='admin-create-detail'>
                        <div className='create-title'>
                            <span>Tạo Sản Phẩm Mới</span>
                        </div>
                        <div className='create-form'>
                            <label>Việt:</label>
                            <input ref={vietRef} type='text' placeholder='Tên Tiếng Việt'/>
                        </div>
                        <div className='create-form'>
                            <label>Anh:</label>
                            <input ref={anhRef} type='text' placeholder='Tên Tiếng Anh'/>
                        </div>
                        <div className='create-form'>
                            <label>Trailer:</label>
                            <input ref={trailerRef} type='text' placeholder='Trailer'/>
                        </div>
                        <div className='create-form'>
                            <label>Movie:</label>
                            <input ref={movieRef} type='text' placeholder='Movie'/>
                        </div>
                        <div className='create-form'>
                            <label>Time:</label>
                            <input ref={timeRef} type='text' placeholder='Thời Gian'/>
                        </div>
                        <div className='create-form'>
                            <label>Status:</label>
                            <input ref={statusRef} type='text' placeholder='Status'/>
                        </div>
                        <div className='create-form'>
                            <textarea ref={descriptionRef} placeholder='Description' />
                        </div>
                        <div className='create-form'>
                            <label>Country:</label>
                            <input ref={countryRef} type='text' placeholder='Country'/>
                        </div>
                        <div className='create-form'>
                            <label>Born:</label>
                            <input ref={bornRef} type='text' placeholder='Born'/>
                        </div>
                        <div className='create-form'>
                            <select ref={categaryRef}>
                                <option value='phim-le'>Phim Lẻ</option>
                                <option value='phim-bo'>Phim Bộ</option>
                                <option value='phim-chieu-rap'>Phim Chiếu Rạp</option>
                                <option value='anime'>Anime</option>
                            </select>
                        </div>
                        <div className='check_form-container'>
                            {kind.map(item => 
                                <CheckForm totalKind={null} setKindBox={setKindBox} kindBox={kindBox} item={item} key={item?.name + "checkbox"} /> 
                            )}
                        </div>
                        <div className='create-button'>
                            <button onClick={handleCreate}>Thử</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatProduct