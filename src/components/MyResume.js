import React from 'react';
import '../App.css';
import './MyResume.css';
import PDF1 from './images/pdf_test_download.pdf'
import Video3 from './videos/Video-3.mp4'

/*MYRESUME page where you can download my resume pdf*/
/*if you want to use this just change pdf import name and linkedin url*/

function MyResume() {
    return (
        <div className = 'myresume-container'>
            <video src= {Video3} autoPlay loop muted />
            <h1>Download resume by clicking below</h1>
            <br></br>
            <br></br>
            <a href={PDF1} download>Download</a>
            <br></br>
            <br></br>
            <p>You can also check my <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
)
}
export default MyResume