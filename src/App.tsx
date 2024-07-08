// App.tsx
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Offer from './components/Offer/Offer';

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <Header />
      <Hero />
      <About />
      <Offer/>
    </ParallaxProvider>
  );
};

export default App;
