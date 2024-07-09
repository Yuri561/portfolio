import React, { useState } from 'react';

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Showcase", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative border-gray-200 bg-black dark:bg-black dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo2.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full ${isOpen ? 'block' : 'hidden'}`} id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="shooting-star-container absolute inset-0">
        <div className="shooting-star"></div>
      </div>
      <style>{`
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
        }

        .shooting-star-container {
          overflow: hidden;
          pointer-events: none;
        }

        .shooting-star {
          position: absolute;
          top: -10%;
          left: 50%;
          width: 2px;
          height: 100px;
          background: linear-gradient(45deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
          animation: shooting-star 2s ease-in-out infinite;
        }

        @keyframes shooting-star {
          0% {
            transform: translateX(-50%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(300px) translateY(100vh) rotate(45deg);
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;
