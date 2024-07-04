import React, { useState } from "react";
import DarkMode from "./DarkMode";
import Logo from '../assets/logo.svg'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="section">
      <div className="absolute top-0 left-0 right-0 z-10 bg-transparent backdrop-filter backdrop-blur-md">
        <nav className="">
          <div className="max-w-screen-4xl text-2xl flex flex-wrap items-center justify-between mx-auto p-6">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src={Logo}
                className="h-12 "
                alt="Logo"
              />
              <span className="self-center dark:text-white text-bold text-3xl font-normal whitespace-nowrap mt-2 uppercase">
                Eco Fuse
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default tracking-wider">
              <ul className="font-small flex flex-col md:flex-row md:justify-center p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 uppercase font-normal">
                <li>
                  <a
                    href="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black 0 md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black  0 md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Green Energy 
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black   md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Case Study
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="duration-300 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black   md:p-0 dark:text-white md:dark:hover:text-slate-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Resources
                  </a>
                </li>
               
                <DarkMode />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
