import React from 'react'
import '~/outstanding/style/index.css';
import Categary from './categary';
import Tab from './tab';
const OutStanding = ({cache}) => {
  return (
    <div className='out_standing-container'>
        <div className='row'>
            <div className='col c-9 m-9 l-9'>
                <Tab cache={cache}/>
            </div>
            <div className='col c-3 m-3 l-3'>
                <Categary cache={cache}/>
            </div>
        </div>
    </div>
  )
}

export default OutStanding