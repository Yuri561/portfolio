// src/components/ContactAndCommunity/ContactAndCommunity.tsx
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import '../Offer/Offer.css'; 
import emailjs from 'emailjs-com';

const ContactAndCommunity: React.FC = () => {
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error('EmailJS public key is not defined');
    }
  }, []);

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs.sendForm('contact_service', 'contact_form', formRef.current)
        .then((result) => {
          console.log(result.text);
          alert('Thanks we have received your email.');
        }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
        });
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white py-6" id='contact'>
      <Canvas style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Stars
          radius={100}
          depth={50}
          count={8000}
          factor={4}
          saturation={0}
          speed={2}
          fade
        />
      </Canvas>
      <div className="container mx-auto px-6 py-12 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={floatingVariants}
          className="animate-float mb-12"
        >
          <h2 className="text-4xl font-extrabold sm:text-6xl mb-8 animate-float">
            Contact & Community Contributions
          </h2>
          <p className="text-lg text-gray-400 mb-12 animate-float">
            Get in touch with me or check out my contributions to the community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={floatingVariants}
            className="relative bg-gray-800 rounded-3xl shadow-xl p-8 animate-float"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">Contact Me</h3>
            <form ref={formRef} method='POST' className="flex flex-col space-y-4" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-lg border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 rounded-lg border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="p-4 rounded-lg border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 p-4 rounded-lg text-white hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={floatingVariants}
            className="relative bg-gray-800 rounded-3xl shadow-xl p-8 animate-float"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">Community Contributions</h3>
            <ul className="list-disc list-inside text-left text-lg text-gray-400">
              <li className="mb-4">
                <a href="https://github.com/Yuri561" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Open Source Projects
                </a>
                : Contributed to various open-source projects including React and Node.js libraries.
              </li>
              <li className="mb-4">
                <a href="https://stackoverflow.com/users/Yuri561" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Stack Overflow
                </a>
                : Helped developers by answering questions and providing solutions.
              </li>
              <li className="mb-4">
                <a href="https://dev.to/Yuri561" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Dev.to Articles
                </a>
                : Published articles and tutorials on web development best practices.
              </li>
              <li className="mb-4">
                <a href="https://linkedin.com/in/Yuri561" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  LinkedIn
                </a>
                : Engaged with the tech community through professional networking and discussions.
              </li>
              <li className="mb-4">
                Contributed to various Discord servers such as Programmers Unite, Impact Team, TripleTen, and Devslope.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndCommunity;
