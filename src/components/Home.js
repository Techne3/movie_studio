import React, { useState, useEffect } from 'react';

import still from '../images/fallBack.jpg';
import { Link } from 'react-router-dom';

import '../styles/home.scss';
import HamburgerMenu from './HamburgerMenu';

import { FaLinkedinIn, FaVimeo, FaVimeoV } from 'react-icons/fa';

const Home = () => {
  const [showImg, setShowImg] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowImg(true);
    }, 4000);
  }, []);

  console.log(showImg);
  return (
    <>
      <HamburgerMenu />
      <>
        <section className='showcase'>
          <div className='embed-container'>
            <iframe
              className='video_players'
              src='https://player.vimeo.com/video/562032745?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?title=0&byline=0&portrait=0&autoplay=1&background=1&mute=0'
              frameborder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowfullscreen
              style={{
                position: 'absolute',
                top: '-89px',
                left: '0',
                margin: '0',
                width: '100%',
                height: '120vh',
              }}
              title='Autonomist Homepage Loop'
            ></iframe>

            <img
              src={still}
              alt='dancing'
              className={
                showImg === false ? 'starting_img' : 'starting_img_none'
              }
            />
            <img src={still} alt='dancing' className='mobile_img' />
          </div>
          <header>
            <h2 className='brand_logo'>Autonomist Films</h2>
            {/* <div className="toggle">menu</div> */}
          </header>
          <div className='video_home'></div>
          <div className='overlay'></div>
          <div className='text'>
            <h2 className='brand'>Autonomist Films</h2>
            <p>Video Production Company</p>

            <Link to='/directors'>
              <button className='btn_home'>Filmmakers</button>
            </Link>
          </div>
        </section>
        <div className='menu'></div>
      </>
    </>
  );
};

export default Home;
