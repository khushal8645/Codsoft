import React from 'react';
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Classes from "./components/classes/Classes";
import Pricing from "./components/pricing/Pricing";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Classes />
      <Pricing />
      <Contact />
      <About />
    </div>
  )
}


export default App
