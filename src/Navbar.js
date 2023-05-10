import React from "react";
import logo from './assets/img/logo.png';
import './assets/css/style.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';


const NavBar= () =>{
return(    
    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">

      <div className="logo me-auto">
        {/* <h1><a href="index.html">Scaffold</a></h1> */}
       
       <a href="#"><img src={logo} alt="SpireWeb Technologies" class="img-fluid" /></a>
      </div>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li className="dropdown"><a href="#"><span>About</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a className="nav-link scrollto" href="#about">About Us</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li><a className="nav-link scrollto" href="#testimonials">Testimonials</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div className="header-social-links d-flex align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>

)

}

export default NavBar;