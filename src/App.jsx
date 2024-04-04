import React from "react";
import "./App.scss";
import Navbar from './Components/Navabar/Navbar'
import Hero from './Components/Hero/Hero'
import Parralax from "./Components/Parralax/Parralax";
import Services from "./Components/Services/Services";
const App = () => {
  return (
    <>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parralax type="Services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parralax type="Portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>portfoli03</section>
    <section id="Contact">Contact</section>
    </>
  )
};

export default App;
