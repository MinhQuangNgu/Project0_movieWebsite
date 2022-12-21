import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OutStanding from '~/outstanding';
import Nomination from '../nominations';
import './index.css';
import NomitationMovie from './nomitationMovies';
const Home = ({cache}) => {


  const {pathname} = useLocation();
  useEffect(()=>{
      window.scrollTo(0,0);
  },[pathname]);

  
  return (
    <div className='home-container'>
        <div className='grid wide'>
          <div className='home'>
              <div className='home-title'>
                <span>Kasuga.com</span>
              </div>
              <Nomination />
              <NomitationMovie cache={cache} />
              <OutStanding cache={cache}/>
          </div>
        </div>
    </div>
  )
}

export default Home