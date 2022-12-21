import React, { useEffect, useRef } from 'react'
import '~/admin/style/index.css'

const CheckForm = ({item,kindBox,setKindBox,totalKind}) => {

    const checkRef = useRef();

    useEffect(() => {
        const check = totalKind?.some(id => id?._id.toString() === item?._id.toString());
        if(check){
            checkRef.current.checked = true;
        }
    },[]);

    const handleChange = () => {
        if(checkRef.current?.checked){
            setKindBox([...kindBox,item]);
        }
        else{
            const newKind = kindBox.filter(id => id._id !== item._id);
            setKindBox(newKind);
        }
    }


  return (
    <div className='check_form'>
        <input onChange={handleChange} ref={checkRef} id={`${item?.slug}`} type='checkbox' />
        <label htmlFor={`${item?.slug}`}>{item?.name}</label>
    </div>
  )
}

export default CheckForm