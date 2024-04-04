import React from "react";
import "./App.scss";
import Navbar from './Components/Navabar/Navbar'
import Hero from './Components/Hero/Hero'
import Parralax from "./Components/Parralax/Parralax";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
const App = () => {
  return (
    <>
    <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parralax type="Services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parralax type="Portfolio"/></section>
    <Portfolio/>
    <section id="Contact">Contact</section>
    </>
  )
};

export default App;
