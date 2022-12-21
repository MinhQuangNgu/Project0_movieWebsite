import React from 'react'
import '~/order/type/index.css';
const Order = () => {
  return (
    <div className='order-container'>
        <select>
            <option>-- Sắp Xếp --</option>
            <option>Năm Sản Xuất</option>
            <option>Thời Gian Update</option>
        </select>
        <select>
            <option>-- Thể Loại --</option>
            <option>2012</option>
        </select>
        <select>
            <option>-- Quốc Gia --</option>
            <option>2012</option>
        </select>
        <select>
            <option>-- Năm Sản Xuất --</option>
            <option>2012</option>
        </select>
        <div className='order-button'>
            <button>Lọc Phim</button>
        </div>
    </div>
  )
}

export default Order