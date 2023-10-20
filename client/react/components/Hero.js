import React from 'react';
import { Link } from 'react-router-dom';
// import { CustomImage } from './CustomImage';

export const HeroSection = ({
}) => {

  return(
    <div className='section hero'>
      <div className='col typography'>
        <h1 className='title'>What are we about or something</h1>
        <p className='info'>Family recipes to feed your cravings like you never left home.</p>
        <Link to={'/recipes'}>
          <button className='button-59'>Explore Now</button>
        </Link>
      </div>
      {/* <div className='col hero-solo'>
        <CustomImage imgSrc={''} pt={"90%"} />
      </div> */}
    </div>
  )
}