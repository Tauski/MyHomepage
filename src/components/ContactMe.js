import React from 'react';
import '../App.css';
import './ContactMe.css';
import Video3 from './videos/Video-3.mp4'

/*CONTACTME page to place you contact info and other other useful phrases*/

function ContactMe() {
    return (
        <div className = 'contact-container'>
            <video src= {Video3} autoPlay loop muted />
            <h1>Contact me via phone or email</h1>
            <p>feel free to call between 9.00 - 18.00 (UTC+2)</p>
            <p>Phone: +123 012 3456 789</p>
            <p>Email: john.smith@email.com</p>
            <p>You can also send message in LinkedIn</p>
        </div>
)
}
export default ContactMe