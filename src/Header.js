import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./assets/imgs/X.jpg"

const Header = () => (
  <header className='bg-gradient-to-r from-black to-yellow-500'>
    <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
      <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src={logo} alt="The New Royals" className="w-12 h-12 text-white p-2 rounded-full"/>
        <span className="ml-3 text-xl">The New Royals</span>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to="/" className="mr-5 transition duration-1000 ease-in-out hover:text-white text-white">Home</Link>
        <Link to="/About" className="mr-5 transition duration-1000 ease-in-out hover:text-white text-white">About</Link>
        <Link to="/Projects" className="mr-5 transition duration-1000 ease-in-out hover:text-white text-white">Projects</Link>
        <Link to="/Ranks" className="mr-5 transition duration-1000 ease-in-out hover:text-white text-white">Ranks</Link>
        <Link to="/Vocabulary" className="mr-5 transition duration-1000 ease-in-out hover:text-white text-white">Vocabulary</Link>
      </nav>
    </div>
  </header>
);

export default Header;
