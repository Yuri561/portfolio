import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white my-5 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Houbenove Pierre-Louis. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/Yuri561" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            GitHub
          </a>
          <a href="https://linkedin.com/in/Yuri561" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://twitter.com/Yuri561" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            Twitter
          </a>
          <a href="mailto:houbenovep@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
