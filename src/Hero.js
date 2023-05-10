import React from "react";
import hero from "./assets/img/hero-img.png";

import './assets/css/style.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';

const Hero = () =>{
    return(
      
        <section id="hero">

<div className="container">
  <div className="row">
    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
      <div>
        <h1>We design digital products that help grow businesses</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
      </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
      <img src={hero} className="img-fluid" alt="Hero"/>
    </div>
  </div>
</div>

</section>


    )
}

export default Hero;