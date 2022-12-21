import React from 'react'
import '~/outstanding/style/index.css';
import TabCard from './tabCard';
import TabNavbar from './tabNavbar';
const Tab = ({cache}) => {
  return (
    <div className='tab-container'>
      <TabNavbar infor={"PHIM LẺ"} type="phim-le"/>
      <TabCard cache={cache} type="phim-le"/>
      <TabNavbar infor={"PHIM BỘ"} type="phim-bo"/>
      <TabCard cache={cache} type="phim-bo"/>
      <TabNavbar infor={"PHIM CHIẾU RẠP"} type="phim-chieu-rap"/>
      <TabCard cache={cache} type="phim-chieu-rap"/>
      <TabNavbar infor={"PHIM ANIME"} type="phim-anime"/>
      <TabCard cache={cache} type="anime"/>
    </div>
  )
}

export default Tab