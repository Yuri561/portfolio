import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TechNow from '../../../public/TechNow.png';
import Convertio from '../../../public/Convertio.png';
import Ufirst from '../../../public/Ufirst.png';
import ExclaimedFood from '../../../public/ExclaimedFood.png';
import './card.css'; // Import the card CSS
import Starfield from './Starfield';

const projects = [
  {
    title: 'TechNow Dashboard',
    description: 'A comprehensive solution for managing tasks, communication, and tracking progress in real-time. TechNow ensures efficient team collaboration and project management.',
    img: TechNow,
    livePreview: 'https://tech-now-plum.vercel.app/',
    github: 'https://github.com/Yuri561/tech-frontend'
  },
  {
    title: 'Convertio - Ultimate Conversion Tool',
    description: 'Seamlessly convert documents, media, and more with ease using our all-in-one conversion tool. Convertio supports a wide range of formats and provides high-speed conversions.',
    img: Convertio,
    livePreview: 'https://convertio-xi.vercel.app/',
    github: 'https://github.com/Yuri561/Convertio'
  },
  {
    title: 'U-First Technician Services',
    description: 'A robust platform connecting technicians with clients for a variety of home and professional services. U-First simplifies the booking and management of service requests.',
    img: Ufirst,
    livePreview: 'https://u-first.vercel.app/',
    github: 'https://github.com/Yuri561/U_First'
  },
  {
    title: 'ExclaimedFood - Gourmet Delights',
    description: 'Experience exquisite dining with our food service app, featuring a range of gourmet recipes and services. ExclaimedFood brings fine dining to your doorstep with just a few clicks.',
    img: ExclaimedFood,
    livePreview: 'https://efs-eight.vercel.app/',
    github: 'https://github.com/Yuri561/restaurantApp'
  },
];

const ShowcaseSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start('visible');
    }
  }, [inView, animationControls]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <section className="bg-black py-16 relative scroll-container" id='about'>
      <Starfield/>
      <div className="container mx-auto px-4 scroll-section">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={animationControls}
          variants={textVariants}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-extrabold text-white animate-float"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Project Showcase
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg animate-float"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Discover the diverse range of projects I have worked on, each designed to solve unique challenges and enhance user experiences. Explore the technical details and visual appeal of my work.
          </motion.p>
        </motion.div>

        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div key={index} className="p-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="relative flex flex-col items-center justify-center text-center bg-gray-800 rounded-3xl shadow-xl p-8 animate-float parent"
                style={{ backdropFilter: 'blur(10px)', height: '500px', margin: 'auto' }}
              >
                <div className="card">
                  <img src={project.img} alt={project.title} className="w-full h-40 mb-6 rounded-lg object-contain shadow-lg" />
                  <div className="logo">
                    <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                    <span className="circle circle3"></span>
                    <span className="circle circle4"></span>
                    <span className="circle circle5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
                        <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"></path>
                        <path d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"></path>
                        <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="glass"></div>
                  <div className="content">
                    <span className="title">{project.title}</span>
                    <span className="text">{project.description}</span>
                  </div>
                  <div className="bottom">
                    <div className="social-buttons-container">
                      <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="social-button social-button1">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
                          <path d="M12 5c-7.633 0-11.547 7.005-11.719 7.281-.094.155-.094.283 0 .438C.453 13.995 4.367 21 12 21s11.547-7.005 11.719-7.281c.094-.155.094-.283 0-.438C23.547 12.005 19.633 5 12 5zm0 14c-5.132 0-8.699-4.614-9.406-5.406C3.301 12.614 6.868 8 12 8s8.699 4.614 9.406 5.594C20.699 14.386 17.132 19 12 19zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"></path>
                        </svg>
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="social-button social-button2">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.774.42-1.304.763-1.604-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.293-1.552 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.767.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.922.431.372.815 1.103.815 2.222 0 1.606-.014 2.896-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ShowcaseSection;
