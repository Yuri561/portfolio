import React, { useState } from 'react';

const navItems = [
  { name: "Home", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Resume", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Bootstrap", href: "#" },
  { name: "Linux", href: "#" },
  { name: "Vim", href: "#" },
  { name: "Bash", href: "#" },
  { name: "PHP", href: "#" },
  { name: "AWS", href: "#" },
  { name: "Vercel", href: "#" },
  { name: "React", href: "#" },
  { name: "Tailwindcss", href: "#" },
  { name: "Meraki UI", href: "#" },
  { name: "NodeJS", href: "#" },
  { name: "JavaScript", href: "#" },
  { name: "Python", href: "#" },
  { name: "Mysql", href: "#" },
  { name: "MongoDb", href: "#" },
  { name: "NextJS", href: "#" },
  { name: "Docker", href: "#" },
  { name: "VS Code", href: "#" },
  { name: "PHPStorm", href: "#" },
  { name: "Sublime", href: "#" }
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative shadow dark:bg-gray-800">
      <div className="container px-4 py-2 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center">
              <a href="#">
                <img className="w-auto h-6 sm:h-7" src="/logo.png" alt="Logo" />
              </a>
              <div className="hidden mx-4 md:block">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <input type="text" className="w-full py-1 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                </div>
              </div>
            </div>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className={`flex-1 w-full px-6 py-2 transition-all duration-300 ease-in-out md:flex md:items-center md:justify-between md:relative md:top-0 md:opacity-100 md:translate-x-0 ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
            <div className="flex flex-col md:flex-row md:mx-1">
              {navItems.slice(0, 4).map((item) => (
                <a key={item.name} className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0" href={item.href}>{item.name}</a>
              ))}
            </div>

            <div className="my-2 md:hidden">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <input type="text" className="w-full py-1 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-2 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
          {navItems.slice(4).map((item) => (
            <a key={item.name} className="mx-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href={item.href}>{item.name}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
