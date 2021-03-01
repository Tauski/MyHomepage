import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image1 from './images/AndroidLogo.jpg'
import Image2 from './images/ReactLogo.jpg'
import Image3 from './images/QtLogo.jpg'
import Image5 from './images/GameEngineLogo.jpg'

/*CARDS used to fill main page, use your projects or main accomplishments here*/
/*using CARDITEM to display the information*/

function Cards() {
  return (
    <div className='cards'>
      <h1>Frontpage projects</h1>
      <p>Old, recent and current projects</p>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
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
          <ul className='cards_items'>
            <CardItem
              img src={Image3}
              text='HRMS Mobile Software'
              label='Qt + SQLite + Azure SQL Database'
              path='/services'
            />
            { <CardItem
              img src={Image2}
              text='Crossplatform mobile apps'
              label='ReactNative + Flutter + Xamarin'
              path='/products'
            /> }
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
  );
}

export default Cards;