// src/components/ContactStrip.tsx
import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface ContactStripProps {
  dark?: boolean;
  className?: string;
}

export default function ContactStrip({ dark = false, className = '' }: ContactStripProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  
  return (
    <motion.section
      className={`py-16 ${dark ? 'bg-black text-white' : 'bg-neutral-100'} ${className}`}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-light mb-2">Ready to transform your space?</h3>
            <p className="text-lg opacity-80">Let's discuss your vision</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="mailto:studio@vatsalya.com"
              className="text-lg hover:opacity-80 transition-opacity"
            >
              studio@vatsalya.com
            </a>
            <span className="hidden sm:inline opacity-50">|</span>
            <a
              href="tel:+919632076549"
              className="text-lg hover:opacity-80 transition-opacity"
            >
              +91 96320 76549
            </a>
          </div>

          <button
            className={`px-8 py-3 ${
              dark
                ? 'bg-white text-black hover:bg-neutral-100'
                : 'bg-black text-white hover:bg-neutral-900'
            } transition-colors`}
            onClick={() => {
              // TODO: Implement contact form drawer
              console.log('Open contact form');
            }}
          >
            Start a Project
          </button>
        </div>
      </div>
    </motion.section>
  );
}