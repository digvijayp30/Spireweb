import React from "react";

import NavBar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Feacher from "./Feachers"
import Footer from "./Footer";
import Services from "./Services";


const App = () =>{
  return(
    <div>
     <NavBar />
     <Hero />
     <About />
     <Feacher />
     <Services />
     <Footer />
   
    </div>
  );
}

export default App;