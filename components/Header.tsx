import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Dental Care', path: '/dental' },
  { name: 'Hair Restoration', path: '/hair' },
  { name: 'Orthopedics', path: '/orthopedics' },
  { name: 'Patient Stories', path: '/patient-stories' },
  { name: 'Care Fund', path: '/care-fund' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  const isTransparentOnDark = isHomePage && !isScrolled && !isMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
  };

  const NavLinkComponent: React.FC<{ link: {name: string, path: string}, mobile?: boolean }> = ({ link, mobile = false }) => (
    <NavLink
      to={link.path}
      onClick={mobile ? closeAllMenus : undefined}
      className={({ isActive }) => {
        if (mobile) {
          return `text-3xl font-medium uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-dark-text' : 'text-dark-grey hover:text-dark-text'}`;
        }

        const baseClasses = 'text-sm font-medium tracking-wide transition-all duration-300 px-4 py-2 rounded-full';
        
        if (isActive) {
          return `${baseClasses} bg-light-grey text-dark-text`;
        }
        
        if (isTransparentOnDark) {
          return `${baseClasses} text-light-grey hover:text-pure-white hover:bg-white/10`;
        }

        const inactiveHoverBg = isScrolled || isMenuOpen ? 'hover:bg-light-grey' : 'hover:bg-light-grey/70';
        return `${baseClasses} text-dark-grey hover:text-dark-text ${inactiveHoverBg}`;
      }}
    >
      {link.name}
    </NavLink>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? 'bg-pure-white/95 backdrop-blur-lg shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 h-24 flex justify-between items-center">
          {/* Logo */}
          <div>
            <NavLink to="/" onClick={closeAllMenus} className="text-2xl font-serif-elegant z-50">
              <span className={`font-bold transition-colors duration-300 ${isTransparentOnDark ? 'text-pure-white' : 'text-dark-text'}`}>MJB</span> <span className={`font-medium transition-colors duration-300 ${isTransparentOnDark ? 'text-medium-grey' : 'text-dark-grey'}`}>Care</span>
            </NavLink>
          </div>
          
          {/* Desktop Navigation & CTA */}
          <div className="hidden lg:flex items-center space-x-10">
            <nav className="flex items-center space-x-2">
               {navLinks.map((link) => (
                  <NavLinkComponent key={link.name} link={link} />
              ))}
            </nav>

            <div>
                <NavLink
                    to="/book-consultation"
                    className={`group inline-flex items-center justify-center font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 ${
                        isTransparentOnDark 
                        ? 'bg-transparent border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-dark-text' 
                        : 'bg-dark-text text-pure-white hover:bg-opacity-80 hover:shadow-lg hover:shadow-dark-grey/30'
                    }`}
                >
                    <span>Book Consultation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5" />
                    </svg>
                </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none w-8 h-8 flex flex-col justify-around items-center">
                <span className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${isTransparentOnDark ? 'bg-pure-white' : 'bg-dark-text'} ${isMenuOpen ? 'rotate-45 translate-y-[5px] !bg-dark-text' : ''}`}></span>
                <span className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${isTransparentOnDark ? 'bg-pure-white' : 'bg-dark-text'} ${isMenuOpen ? 'opacity-0 !bg-dark-text' : ''}`}></span>
                <span className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${isTransparentOnDark ? 'bg-pure-white' : 'bg-dark-text'} ${isMenuOpen ? '-rotate-45 -translate-y-[5px] !bg-dark-text' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-pure-white transition-opacity duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="container mx-auto h-full flex flex-col justify-center items-center">
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link, index) => (
                  <div key={link.name} className="overflow-hidden text-center">
                      <div style={{ transitionDelay: `${150 + index * 75}ms` }} className={`transform transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                        <NavLinkComponent link={link} mobile={true} />
                      </div>
                  </div>
              ))}
            </nav>
            <div style={{ transitionDelay: `${150 + navLinks.length * 75}ms` }} className={`transform transition-all duration-500 mt-12 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                <NavLink
                    to="/book-consultation"
                    onClick={closeAllMenus}
                    className="group inline-flex items-center justify-center bg-dark-text text-pure-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-opacity-80 hover:shadow-lg hover:shadow-dark-grey/30 text-lg transform hover:-translate-y-0.5"
                >
                    <span>Book Consultation</span>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5" />
                    </svg>
                </NavLink>
            </div>
          </div>
      </div>
    </>
  );
};

export default Header;