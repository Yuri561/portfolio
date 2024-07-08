import React, { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [globeColor, setGlobeColor] = useState("#ffffff");

  useEffect(() => {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setGlobeColor(isDarkTheme ? "#ffffff" : "#000000");
  }, []);

  const globeRef = React.useRef();

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1;
    }
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor="rgba(0,0,0,0)"
          width={window.innerWidth * 1.5}
          height={window.innerHeight * 1.5}
        />
      </div>
      <div className="container mx-auto px-6 py-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="animate-fade-in"
        >
          <h1 className="text-4xl font-bold sm:text-6xl">
            Hey, I am <span className="text-blue-500">Houbenove Pierre-Louis</span>,
            <br />a Fullstack Developer
          </h1>
          <p className="mt-6 text-lg">Dream big or don't dream at all</p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 flex justify-center animate-fade-in-delay"
        >
          <input
            type="text"
            placeholder="Your Email"
            className="w-2/3 p-4 rounded-l-lg border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
          />
          <button className="bg-blue-500 p-4 rounded-r-lg text-white hover:bg-blue-600">Connect with Me</button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 animate-fade-in-delay"
        >
          <p className="text-gray-400">Popular Tags:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <span className="bg-gray-800 px-3 py-1 rounded-lg">React</span>
            <span className="bg-gray-800 px-3 py-1 rounded-lg">Tailwind CSS</span>
            <span className="bg-gray-800 px-3 py-1 rounded-lg">JavaScript</span>
            <span className="bg-gray-800 px-3 py-1 rounded-lg">Node.js</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
