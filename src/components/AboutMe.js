import React from 'react';
import './AboutMe.css';
import CardItem from './CardItem';
import Image1 from './images/AndroidLogo.jpg'
import Image2 from './images/ReactLogo.jpg'
import Image3 from './images/QtLogo.jpg'
import Image5 from './images/GameEngineLogo.jpg'

/*TODO STILL JUST A PLACEHOLDER*/

function AboutMe() {
    return (
        <div className='cards'>
      <h1>Niko Tauriainen</h1>
      <p>Little bit about me</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src={Image1} 
              text='My ideal PDA android application with TTS and STT functions'
              label='Java + PHP/MySQL'
              path='/services'
            />
            <CardItem
              img src={Image2}
              text='Personal homepage/portfolio'
              label='ReactJS + CSS'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src={Image3}
              text='HRM Mobile Software'
              label='Qt + SQLite + Azure SQL Database'
              path='/services'
            />
            <CardItem
              img src={Image5}
              text='A simple component based 2D/3D game engine.'
              label='C++ + Various libraries'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      <p>See more on my GitHub page</p>
    </div>
    )
}

export default AboutMe
