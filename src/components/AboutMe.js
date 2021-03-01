import React from 'react';

import './AboutMe.css';
import SkillsItem from './SkillsItem';
import javaLogo from './images/java_logo.jpg'
import CPPLogo from './images/cplusplus_logo.png'
import CLogo from './images/c_logo.png'
import phpLogo from './images/php_logo.png'
import jsLogo from './images/javascript_logo.jpg'
import flutterLogo from './images/flutter_logo.png'
import cssLogo from './images/css_logo.jpg'
import sqlLogo from './images/sql_logo.png'
import StatusBar from './Status-bar';
import Video4 from './videos/Video-3.mp4'

/*ABOUTME this is the page about you. I think this would be filled with what you usually would write in your job application*/
/*You can make it more interesting by adding images. For instance I've added some images about coding techniques and added proficiency bars below*/
/*also you may use different background images/videos*/

/*SKILLITEMS simple carditems with STATUSBAR below them*/
/*be careful with layouts*/

function AboutMe() {
    return (
      <div className="secion" id="about">
        <video src= {Video4} autoPlay loop muted />        
      <div className="container">        
        <div className="about-section">
          <div className="content">
              <h1>About Me</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, ommodi consequat. Quis 
            aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate 
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, onsequat. Quis aute iure reprehenderit in voluptate velit esse cillum
               dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui 
               officia deserunt mollit anim id est laborum.
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, onsequat. Quis aute iure reprehenderit in voluptate velit esse cillum
               dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui 
               officia deserunt mollit anim id est laborum.
              <br></br>
              <br></br>   
              and so on...
            </p>
          </div>          
          <div className="image-wrapper-left">
            <div className='skills-items'>
              <SkillsItem img src={CPPLogo} label='C++'/>         
                <StatusBar completed={80} bgcolor='#631b12'/>  
              <SkillsItem img src={javaLogo} label='Java'/>
                <StatusBar completed={60} bgcolor='black'/> 
              <SkillsItem img src={phpLogo} label='php'/>             
                <StatusBar completed={50} bgcolor='black'/> 
              <SkillsItem img src={flutterLogo} label='flutter'/>             
                 <StatusBar completed={30} bgcolor='black'/> 
              
            </div>
          </div>
            <div className="image-wrapper-right">   
              <SkillsItem img src={sqlLogo} label='SQL'/>
                <StatusBar completed={75} bgcolor='black'/>    
              <SkillsItem img src={CLogo} label='C'/>
                <StatusBar completed={50} bgcolor='black'/>              
              <SkillsItem img src={jsLogo} label='JavaScript'/>
                <StatusBar completed={30} bgcolor='black'/>
              <SkillsItem img src={cssLogo} label='css'/>
                <StatusBar completed={30} bgcolor='black'/>              
            </div>
        </div>
        <div className="about-section">
        <div className="content">
              <h1>hobbies</h1>
            <p>
              Now a little bit about me outside of work...  
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, onsequat. Quis aute iure reprehenderit in voluptate velit esse cillum
               dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui 
               officia deserunt mollit anim id est laborum.
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, onsequat. Quis aute iure reprehenderit in voluptate velit esse cillum
               dolore eu fugiat nulla pariatur. Excepteur
              <br></br>
              <br></br>
              hello worlds
              <br></br>
              <br></br>              
            </p>
          </div>
          <div className="image-wrapper-right">
          <div className='skills-items'>
              <SkillsItem img src={phpLogo} label='php'/>             
                <StatusBar completed={50} bgcolor='black'/> 
              <SkillsItem img src={flutterLogo} label='flutter'/>             
                 <StatusBar completed={30} bgcolor='black'/> 
              
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AboutMe
