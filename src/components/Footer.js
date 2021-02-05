import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for your interest
        </p>
        <p className='footer-subscription-text'>
          And may you have a wonderful day
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>Email</Link>
            <Link to='/'>Phone</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>         
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a rel="noopener noreferrer" target="_blank" href="https://www.github.com/Tauski">GitHub</a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/niko-tauriainen-102">LinkedIn</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Niko Tauriainen
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>02/2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;