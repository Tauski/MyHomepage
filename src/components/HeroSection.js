import React from 'react';
import '../App.css';
import './HeroSection.css';
/*import Video1 from './videos/video-2.mp4'*/
import Video1 from './videos/video-1.mp4'

/*HEROSECTION main page, just place your own catch phrase here*/
/*placement background video if you want, also you can use images*/

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src= {Video1} autoPlay loop muted />
            <h1>THIS IS STUFF ABOUT ME</h1>
            <p>Personal homepage/portfolio</p>
            <p></p>
        </div>
)
}
export default HeroSection
