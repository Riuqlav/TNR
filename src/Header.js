import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "./assets/imgs/X.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const hideMenu = () => setIsOpen(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = document.getElementById('header').offsetHeight;

    if (currentScrollPos > visible) {
      hideMenu();
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className='bg-gradient-to-r from-black to-yellow-500 relative'>
      <div className="container mx-auto flex justify-between items-center p-1 md:p-1">
        <Link to="/TNR" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src={logo} alt="The New Royals" className="w-12 h-12 text-white p-2 rounded-full" />
          <span className="ml-1 text-xl">The New Royals</span>
        </Link>
        <button className='text-4xl md:hidden absolute top-0 right-0 m-1 mr-2 transition-colors duration-200 ' onClick={toggleMenu}>
          {isOpen ? '' : '☰'}
        </button>
          <nav className={`fixed z-20 top-0 right-0 w-40 md:w-1/3 h-full bg-black bg-opacity-80 transform pt-0.4 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out md:translate-x-0 md:relative md:bg-transparent md:flex md:items-center md:w-auto md:h-auto md:justify-end md:pt-0`}>
            {isOpen && <button className='text-4xl md:hidden absolute top-0 right-0 m-2 transition-colors duration-200 ' onClick={toggleMenu}>✖</button>}
            <Link to="/TNR/" className="block p-4 transition-colors duration-200 text-white" onClick={hideMenu}>Home</Link>
            <Link to="/articles" className="block p-4 transition-colors duration-200 text-white" onClick={hideMenu}>Articles</Link>
            <Link to="/ranks" className="block p-4 transition-colors duration-200 text-white" onClick={hideMenu}>Ranks</Link>
            <Link to="/vocabulary" className="block p-4 transition-colors duration-200 text-white" onClick={hideMenu}>Vocabulary</Link>
            <Link to="/community" className="block p-4 transition-colors duration-200 text-white" onClick={hideMenu}>Community</Link>
          </nav>
      </div>
      {isOpen && <div className="fixed z-10 inset-0 bg-black opacity-50" onClick={hideMenu}></div>}
    </header>
  );
};

export default Header;
