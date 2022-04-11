import React, { useState } from "react";

const Header = () => {
  const [toggleNav, setTogglenav] = useState(true);
  const HamburgerMenu = () => {
    return (
      <div className="mobile-menu p-4 space-y-2 bg-black-600 rounded shadow md:hidden">
        <span className="block w-8 h-0.5 bg-gray-100"></span>
        <span className="block w-8 h-0.5 bg-gray-100"></span>
        <span className="block w-8 h-0.5 bg-gray-100"></span>
      </div>
    );
  };
  const CloseMenu = () => {
    return (
      <div className="mobile-menu p-4 text-2xl bg-black-600 m-auto md:hidden text-white">
        X
      </div>
    );
  };

  return (
    <header className="main-header sticky top-0 z-50">
      <div className="py-4 flex w-5/6 md:w-4/5 mx-auto">
        <div className="logo text-white font-medium text-xl my-auto">
          Stefanlinde<span>.</span>ee
        </div>
        <nav className="ml-auto hidden md:block">
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
        <div
          className="toggle-menu-wrapper ml-auto lg:hidden"
          onClick={() => setTogglenav(!toggleNav)}
        >
          {toggleNav ? (
            <HamburgerMenu />
          ) : (
            <>
              <CloseMenu />
              <nav className="mob-menu shadow-xl">
                <ul className="list-none space-x-6 font-light bg-white py-8 px-16 space-y-4">
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
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
