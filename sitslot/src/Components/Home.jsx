import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';


const Home = () => {
  return (
    <>
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        <Link to="/index" className="logo d-flex align-items-center me-auto me-lg-0">
          <h1>SIT_SLOT</h1>
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="/index">Home</Link></li>
            <li><Link to="/event">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="header-social-links">
          <a href="https://x.com/sitmangalore?t=dkhgNi7-sen0Sf9rW_h-Mg&s=09" className="twitter"><FaTwitter /></a>
          <a href="https://www.facebook.com/srinivasgroup/" className="facebook"><FaFacebook /></a>
          <a href="https://www.instagram.com/sitmng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="instagram"><FaInstagram /></a>
          <a href="https://www.linkedin.com/school/sitmangalore/" className="linkedin"><FaLinkedin /></a>
          <a href="https://youtube.com/@sitmangalore?si=wmd6nPpISfUtq2EW" className="youtube"><FaYoutube /></a>
        </div>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

      </div>
    </header>

  

    </>
  )
}

export default Home;
