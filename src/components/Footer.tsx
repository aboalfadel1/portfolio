
import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#607CCD] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold">Portfolio</div>
            <p className="text-sm mt-2 text-white/80">Web Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white/80 cursor-pointer transition-colors"
            >
              Home
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white/80 cursor-pointer transition-colors"
            >
              Projects
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white/80 cursor-pointer transition-colors"
            >
              About
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white/80 cursor-pointer transition-colors"
            >
              Contact
            </Link>
          </div>
          
          <div className="text-sm text-white/80">
            &copy; {currentYear} Mouayad Saad Eddin. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
