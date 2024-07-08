
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ScrollEffects: React.FC = () => {
  return (
    <Parallax className="relative" y={[10, -10]} tagOuter="figure">
      <img src="/haiti.png" alt="Haiti" className="w-full h-64 object-cover rounded-lg mb-6" />
    </Parallax>
  );
};

export default ScrollEffects;
