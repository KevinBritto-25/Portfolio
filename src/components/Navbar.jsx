import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { Kevin, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [collapsed, setCollapsed] = useState(false); // Collapsed state

  // Handle scroll event to collapse navbar
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setCollapsed(position > 50); // Collapse when scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle navbar visibility
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed left-0 top-0 z-20 transition-all duration-300 glass-effect
        ${collapsed ? 'w-12 h-12 glasss-effect' : 'w-full h-16 bg-primary glass-effect'} 
        ${collapsed ? 'flex justify-center items-center rounded-full glass-effect' : 'flex items-center glass-effect'} `}
      >
        {collapsed ? (
          <button
            onClick={handleCollapse}
            className="w-full h-full flex items-center justify-center text-white text-xl bg-transparent border-2 border-white rounded-full cursor-pointer glass-effect"
          >
            +
          </button>
        ) : (
          <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-4'>
            {/* Logo and Title */}
            <Link
              to="/"
              className='flex items-center gap-2'
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={Kevin}
                alt='Logo'
                className='object-contain w-9 h-9'
              />
              <p className="text-white font-bold cursor-pointer flex text-[18px]">
                Kevin &nbsp;
                <span>| Front End Developer</span>
              </p>
            </Link>

            {/* Desktop Navigation */}
            <ul className='list-none hidden sm:flex flex-row gap-10 '>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img
                src={toggle ? close : menu}
                alt='Menu'
                className='w-[28px] h-[28px] object-contain cursor-pointer'
                onClick={() => setToggle(!toggle)}
              />
            </div>

            {/* Mobile Navigation */}
            {toggle && (
              <div className='p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'>
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px] hover:text-white`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
