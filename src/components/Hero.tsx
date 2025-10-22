import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks';
import { fadeIn, staggerContainer } from '../lib/animations';
import Button from './Button';
import MosaicLogo from './MosaicLogo';

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-brand-white to-brand-yellow/10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.15]" data-parallax>
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#FFC720,transparent)]" />
          <div className="h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
      </div>

      <motion.div
        style={{ opacity }}
        className="relative container pt-32 pb-20 md:min-h-screen md:flex md:items-center"
      >
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-bold leading-tight md:text-6xl font-heading"
            >
              Transform Your Space with Innovative Design
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg text-brand-black/80 md:text-xl"
            >
              Creating timeless interiors that inspire and elevate your everyday
              living experience.
            </motion.p>
            <motion.div variants={fadeIn} className="flex gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="secondary" size="lg">
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Mosaic Logo */}
          <motion.div
            style={{ y: prefersReducedMotion ? 0 : y }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 transition-transform group">
                <MosaicLogo
                  size={500}
                  className="w-full h-full transform -rotate-12 scale-90"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-brand-black/60">Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-6 h-10 border-2 border-brand-black/20 rounded-full p-1"
          >
            <div className="w-full h-2 bg-brand-yellow rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
