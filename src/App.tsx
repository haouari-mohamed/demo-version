import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Videos from './components/Videos';

function App() {
  return (
    <div className="min-h-screen bg-white">
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Videos />
    <Team />
    <Contact />
  </div>
  );
}

export default App;