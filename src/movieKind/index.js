import React, { useEffect } from 'react'
import  '~/movieKind/type/index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import Categary from '~/outstanding/categary';
import OrderKind from './orderKind';
import TabCardDEtail from '~/outstanding/tab/tabCard/card';
import Pagination from '~/pagination';
const MovieKind = ({cache}) => {

  const {slug,kind} = useParams();
  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);

  return (
    <div className='movie_kind-container'>
        <HelmetProvider>
          <Helmet>
            <title>{kind === 'the-loai' ? 'Thể Loại' :
            kind === 'quoc-gia' ? 'Quốc Gia' : 'Năm Sản Xuất'} {`>`} Phim tại Kasuga.com</title>
          </Helmet>
        </HelmetProvider>
        <div className='grid wide'>
            <div className='row'>
              <div className='col c-9 m-9 l-9'>
                  <OrderKind />
                  <div className='kind_movie-card-container'>
                        <div className='row'>
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <Pagination />
                        </div>
                    </div>
              </div>
              <div className='col c-3 m-3 l-3'>
                <Categary cache={cache}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MovieKind