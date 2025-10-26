import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-stone-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block" aria-label="Vatsalya - Home">
              <img src={logo} alt="Vatsalya Logo" className="h-12 w-12" />
            </Link>
            <p className="font-body text-brand-stone-300 mt-6 max-w-md">
              Crafting timeless spaces that blend luxury with functionality. 
              We transform your vision into extraordinary living environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4 font-body text-brand-stone-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl mb-6">Contact</h3>
            <ul className="space-y-4 font-body text-brand-stone-300">
              <li>
                <a href="mailto:info@vatsalya.com" className="hover:text-white transition-colors">
                  info@vatsalya.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 987 654 3210
                </a>
              </li>
              <li>
                Bengaluru, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-brand-stone-700 text-center md:text-left md:flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm text-brand-stone-400">
            © {currentYear} Vatsalya. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6 text-brand-stone-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}