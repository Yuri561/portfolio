// /components/ShowcaseSection.js
import { useEffect } from 'react';
import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TechNow from '../../../public/TechNow.png';
import Convertio from '../../../public/Convertio.png';
import ImpactGames from '../../../public/ImpactGames.png';
import Ufirst from '../../../public/Ufirst.png';
import ExclaimedFood from '../../../public/ExclaimedFood.png';
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
  {
    title: 'ImpactGames - Build Together, Play Together',
    img: ImpactGames,
    description: 'ImpactGames is a collaborative platform that brings together developers and gamers to create, share, and play games.',
    livePreview: 'https://impactgames.vercel.app/',
    github: 'https://github.com/Yuri561/impactgames'
  },
];

const ShowcaseSection = () => {
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
    <section className="bg-black py-16">
      <Starfield/>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={animationControls}
          variants={textVariants}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-extrabold text-white"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Project Showcase
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Welcome to my project showcase! I am a self-taught full stack developer with a passion for creating innovative solutions and solving real-world problems. Each project you see here represents a unique challenge I have faced and overcome, driven by my love for programming and the MERN stack. As I continue to hone my skills and break into the tech industry, I am constantly learning and evolving. Whether it's building a comprehensive task management system, a seamless conversion tool, or a robust platform connecting clients with technicians, I strive to create applications that not only meet the needs of users but also provide an exceptional user experience. I hope you enjoy exploring my work as much as I have enjoyed creating it!
          </motion.p>
        </motion.div>

        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div key={index} className="p-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="relative flex flex-col items-center justify-center text-center bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <img src={project.img} alt={project.title} className="w-full h-40 mb-6 rounded-lg object-cover" />
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-around w-full mt-4">
                  <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Preview</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
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
