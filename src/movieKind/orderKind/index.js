import React from 'react'
import { useParams } from 'react-router-dom';
import  '~/movieKind/type/index.css';
const OrderKind = () => {

    const {kind} = useParams();
  return (
    <div className='order-kind-container'>
        <select>
            <option>-- Sắp Xếp --</option>
            <option>Năm Sản Xuất</option>
            <option>Thời Gian Update</option>
        </select>
        <select>
            <option>-- Thể Loại Phim --</option>
            <option>Phim Lẻ</option>
            <option>Phim Bộ</option>
            <option>Phim Chiếu Rạp</option>
        </select>
        {kind !== 'the-loai' && 
        <select>
            <option>-- Thể Loại --</option>
            <option>Phim Lẻ</option>
            <option>Phim Bộ</option>
            <option>Phim Chiếu Rạp</option>
        </select>
        }
        {kind !== 'quoc-gia' &&
        <select>
            <option>-- Quốc Gia --</option>
            <option>2012</option>
        </select>}
        {kind !== 'nam-san-xuat' && 
        <select>
            <option>-- Năm Sản Xuất --</option>
            <option>2012</option>
        </select>}
        <div className='order-kind-button'>
            <button>Lọc Phim</button>
        </div>
    </div>
  )
}

export default OrderKind