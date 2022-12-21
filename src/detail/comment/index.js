import React from 'react'

const Comment = () => {
  return (
    <div className='detail-movie-comment-detail'>
        <div className='detail-movie-comment-image'>
            <img src="https://anhdep123.com/wp-content/uploads/2021/02/Tong-hop-nhung-hinh-anh-hot-girl-toc-ngan-de-thuong-dang-yeu-nhat-16.jpg" />
        </div>
        <div className='detail-movie-comment-user-detail'>
            <p className='name'>Quang Ngu</p>
            <p className='content'>NỘI DUNG PHIM
Shikimori-san Không Chỉ Dễ Thương Thôi Đâu - Kawaii dake ja Nai Shikimori-san cậu nam sinh trung học Izumi là một người xui xẻo bẩm sinh, nhưng anh lại may mắn khi có được cô bạn gái cùng lớp xinh đẹp và dễ thương là Shikimori. Mỗi khi cậu bạn trai Izumi gặp rắc rối, thì cô lại trở thành một người bạn gái ngầu lòi giải cứu Izumi. Câu chuyện cũng kể về cuộc sống thường ngày và đầy dễ thương giữa cặp đôi và những người bạn thân.</p>
            <div className='like'>
                <span className='link-hover'>Thích</span>
                <span>.</span>
                <span className='link-hover'>Phản Hồi</span>
                <span>.</span>
                <span>2 ngày trước</span>
            </div>
        </div>
    </div>
  )
}

export default Comment