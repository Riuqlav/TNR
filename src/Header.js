import React from 'react';
import TNRNFT from "./TNRnoSubp/X.jpg";

const Header = () => (
  <header className="bg-black text-white">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src={TNRNFT} alt="The New Royals" className="w-12 h-12 text-white p-2 rounded-full"/>
        <span className="ml-3 text-xl">The New Royals</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {/* Navigation links can go here */}
      </nav>
    </div>
  </header>
);

export default Header;
