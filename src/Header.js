import React from 'react';
import logo from "./TNR/The New Royals 2b1e1441ba8a448e94a1b4bd200165f8/X.jpg";

const Header = () => (
  <header className="bg-black text-white">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src={logo} alt="The New Royals" className="w-12 h-12 text-white p-2 rounded-full"/>
        <span className="ml-3 text-xl">The New Royals</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#about" className="mr-5 hover:text-gray-900">About</a>
        <a href="#events" className="mr-5 hover:text-gray-900">Events</a>
        <a href="#links" className="mr-5 hover:text-gray-900">Links</a>
        <a href="#contact" className="mr-5 hover:text-gray-900">Contact</a>

      </nav>
    </div>
  </header>
);

export default Header;
