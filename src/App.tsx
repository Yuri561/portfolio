import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Offer from './components/Offer/Offer';
import ContactAndCommunity from './components/ContactAndCommunity/ContactAndCommunity';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const { scrollY } = useScroll();
  const scaleHero = useTransform(scrollY, [0, 500], [1, 1.1]);
  const scaleAbout = useTransform(scrollY, [500, 1000], [1.1, 1]);
  const scaleOffer = useTransform(scrollY, [1000, 1500], [1, 1.1]);
  const scaleSkills = useTransform(scrollY, [1500, 2000], [1.1, 1]);
  const scaleContactAndCommunity = useTransform(scrollY, [2000, 2500], [1, 1.1]);

  return (
    <div className="app">
      <Header />
      <motion.div style={{ scale: scaleHero }}>
        <Hero />
      </motion.div>
      <motion.div style={{ scale: scaleAbout }}>
        <About />
      </motion.div>
      <motion.div style={{ scale: scaleOffer }}>
        <Offer />
      </motion.div>
      <motion.div style={{ scale: scaleSkills }}>
        <Skills />
      </motion.div>
      <motion.div style={{ scale: scaleContactAndCommunity }}>
        <ContactAndCommunity />
      </motion.div>
      <Footer />
    </div>
  );
};

export default App;
