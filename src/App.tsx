// App.tsx
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <Header />
      <Hero />
      <About />
    </ParallaxProvider>
  );
};

export default App;
