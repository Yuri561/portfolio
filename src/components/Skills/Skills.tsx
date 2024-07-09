import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import '../Offer/Offer.css'; 

const skills = {
  "Frontend": [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Sass', 'Redux'
  ],
  "Backend": [
    'Node.js', 'Express', 'C', 'MongoDB', 'MySQL', 'Java', 'Python', 'Prisma', 'NextJS'
  ],
  "DevOps": [
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud', 'Jenkins', 'CI/CD', 'Terraform', 'Ansible'
  ],
  "Tools & Others": [
    'Git', 'GitHub', 'GitLab', 'Jira', 'Figma', 'Bash', 'Visual Studio Code', 'Postman', 'Linux'
  ]
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
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

const Skills: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-white py-16 overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
        </Canvas>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.h2 
            className="text-4xl font-extrabold mb-8 animate-float"
            variants={floatingVariants}
          >
            Skills & Technologies
          </motion.h2>
          {Object.keys(skills).map((category, index) => (
            <motion.div 
              key={index} 
              className="mb-8 animate-float"
              variants={floatingVariants}
            >
              <h3 className="text-3xl font-bold mb-4">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills[category as keyof typeof skills].map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-800 rounded-lg p-4 shadow-lg"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
