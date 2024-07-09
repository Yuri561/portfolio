// src/components/WhatIOffer/WhatIOffer.tsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Canvas} from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Offer.css'; // Import the CSS for this component

const offerings = [
  {
    title: 'Web Development',
    description: 'Creating responsive, high-performance websites using modern technologies like React, Next.js, and TypeScript.',
  },
  {
    title: 'Mobile App Development',
    description: 'Building user-friendly mobile applications for both Android and iOS using React Native.',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and experiences with a focus on user-centric design principles.',
  },
  {
    title: 'API Development',
    description: 'Developing robust APIs using Node.js, Express, and other backend technologies.',
  },
  {
    title: 'Project Management',
    description: 'Managing projects efficiently with Agile methodologies, ensuring timely delivery and quality.',
  },
];

const Starfield = () => {
  return (
    <Canvas style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </Canvas>
  );
};

const Offer: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden" id='services'>
      <Starfield />
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="animate-fade-in mb-12"
        >
          <h2 className="text-4xl font-extrabold sm:text-6xl">
            What I Offer
          </h2>
          <p className="mt-6 text-lg">Explore the range of services and skills I bring to the table.</p>
        </motion.div>
        
        <Slider ref={sliderRef} {...sliderSettings}>
          {offerings.map((offer, index) => (
            <div key={index} className="p-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative flex flex-col items-center justify-center text-center bg-gray-800 rounded-3xl shadow-xl p-8 animate-float"
                style={{ backdropFilter: 'blur(10px)', height: '300px', margin: 'auto' }}
              >
                <h3 className="text-3xl font-bold mb-4 text-white">{offer.title}</h3>
                <p className="text-lg text-gray-400">{offer.description}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Offer;
