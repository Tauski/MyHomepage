import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
/*import Video1 from './videos/video-2.mp4'*/
import Video2 from './videos/video-1.mp4'

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src= {Video2} autoPlay loop muted />
            <h1>THIS IS STUFF ABOUT ME</h1>
            <p>Personal homepage/portfolio</p>
            <p>Feel free to look around</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    Contact Me
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    About Me <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
)
}
export default HeroSection
