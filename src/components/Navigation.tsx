import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MosaicLogo from './MosaicLogo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <MosaicLogo className="h-12 w-12" />
            <span className="font-display text-xl tracking-wide">VATSALYA</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              to="/portfolio"
              className="font-body text-sm tracking-widest hover:text-brand-primary transition-colors"
            >
              PORTFOLIO
            </Link>
            <Link
              to="/services"
              className="font-body text-sm tracking-widest hover:text-brand-primary transition-colors"
            >
              SERVICES
            </Link>
            <Link
              to="/about"
              className="font-body text-sm tracking-widest hover:text-brand-primary transition-colors"
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="font-body text-sm tracking-widest bg-brand-secondary text-white px-6 py-3 hover:bg-brand-primary transition-colors"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-px bg-current transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-px bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-px bg-current transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-brand-stone-200"
          >
            <div className="container mx-auto px-6 py-8 space-y-6">
              <Link
                to="/portfolio"
                className="block font-body text-sm tracking-widest hover:text-brand-primary transition-colors"
              >
                PORTFOLIO
              </Link>
              <Link
                to="/services"
                className="block font-body text-sm tracking-widest hover:text-brand-primary transition-colors"
              >
                SERVICES
              </Link>
              <Link
                to="/about"
                className="block font-body text-sm tracking-widest hover:text-brand-primary transition-colors"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                className="block font-body text-sm tracking-widest bg-brand-secondary text-white px-6 py-3 hover:bg-brand-primary transition-colors w-full text-center"
              >
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}