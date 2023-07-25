import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./TNR/The New Royals 2b1e1441ba8a448e94a1b4bd200165f8/X.jpg";

const Footer = () => (
  <footer className='bg-black'>
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src={logo} alt="The New Royals" className="w-12 h-12 text-white p-2 rounded-full"/>
        <span className="ml-3 text-xl">The New Royals</span>
      </Link>
     
      <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <p className="text-white text-center md:text-right">© 2023 The New Royals. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
