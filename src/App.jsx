import React from "react";
import "./App.scss";
import Navbar from './Components/Navabar/Navbar'
import Hero from './Components/Hero/Hero'
const App = () => {
  return (
    <>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">Prallax</section>
    <section>Services</section>
    <section id="Portfolio">Prallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>portfoli03</section>
    <section id="Contact">Contact</section>
    </>
  )
};

export default App;
