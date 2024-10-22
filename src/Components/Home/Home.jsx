import React from 'react';
import Navbar from '../Navbar';
import Herosection from '../Herosection';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Services from '../Services';
import Contact from '../Contact';
import Footer from '../Footer';

const Home = () => {
  return (
    <>
    <Navbar />
    <Herosection />
    <Projects />
    <About />
    <Skills />
    <Services />
    <Contact />
    <Footer />
    </>
  );
}

export default Home;
