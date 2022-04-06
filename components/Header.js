import React from "react";

const Header = () => {
  return (
    <header className="main-header sticky top-0 z-50">
      <div className="py-4 flex  w-4/5 mx-auto px-4">
        <div className="logo text-white font-medium text-xl">
          Ste<span>.</span>fans
        </div>
        <nav className="ml-auto">
          <ul className="list-none text-white flex space-x-6 font-light">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
