'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Partani Eye Care</h1>
              <p className="text-sm text-blue-500 hidden md:block">Vision Excellence Center</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <Link href="#home" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
              Services
            </Link>
            <Link href="#doctors" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
              Doctors
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/camp-booking?type=appointment" className="btn-primary">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="#home" 
                className="text-gray-700 hover:text-blue-500 transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-blue-500 transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#services" 
                className="text-gray-700 hover:text-blue-500 transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#doctors" 
                className="text-gray-700 hover:text-blue-500 transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Doctors
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-blue-500 transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/camp-booking?type=appointment" 
                className="btn-primary mt-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
