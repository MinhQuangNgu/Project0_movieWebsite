import React from 'react'
import '~/pagination/style/index.css';
import usePagination from '~/useQuery/paginating/usePagination';
const Pagination = ({total,limit}) => {

    const {page,jump,next,prev,activePage,firstArr,lastArr} = usePagination({total:total || 10,limit:limit ? limit : 12});

  return (
    <div className='pagination-container'>
        <div onClick={prev} className='paginatioon-item'>
            <i className="fa-solid fa-angle-left"></i>
        </div>
        {firstArr.map(item => (  
        <div key={item + "pagination"} onClick={() => jump(item)} className = {`paginatioon-item ${activePage(item)}`}>
            {item}
        </div>
        ))}
        {lastArr.length > 0 &&
        <>
        <div className ='paginatioon-item'>
            ...
        </div>
        <div onClick={() => jump(lastArr[0])} className = {`paginatioon-item ${activePage(lastArr[0])}`}>
            {lastArr[0]}
        </div>
    </>}
        <div onClick={next} className ='paginatioon-item'>
            <i className="fa-solid fa-angle-right"></i>
        </div>
    </div>
  )
}

export default Pagination