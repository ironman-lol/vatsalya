import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks';
import { fadeUp, heroMask } from '../lib/animations';

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
  };
  children?: React.ReactNode;
  className?: string;
  imagePosition?: 'left' | 'right';
}

export default function Hero({
  title,
  subtitle,
  image,
  children,
  className = '',
  imagePosition = 'right',
}: HeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 150]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-brand-stone-50"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#9A8A78,transparent)]" />
          <div className="h-full bg-[linear-gradient(to_right,#2C3338_1px,transparent_1px),linear-gradient(to_bottom,#2C3338_1px,transparent_1px)] bg-[size:8rem_8rem]" />
        </div>
      </div>

      <motion.div
        style={{ opacity }}
        className={`relative container pt-40 pb-20 ${className}`}
      >
        <div className="grid items-center grid-cols-1 gap-16 lg:gap-24 md:grid-cols-2">
          <motion.div
            className={`${imagePosition === 'right' ? 'md:order-1' : 'md:order-2'} relative z-10`}
            variants={fadeUp}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
          >
            <motion.span 
              className="block font-body text-sm tracking-[0.2em] text-brand-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              LUXURY INTERIOR DESIGN
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-light leading-[1.2] mb-8">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-brand-stone-600 font-light max-w-xl">
                {subtitle}
              </p>
            )}
            {children && (
              <motion.div variants={fadeUp} className="mt-12">
                {children}
              </motion.div>
            )}
          </motion.div>

          {image && (
            <motion.div
              className={`relative ${
                imagePosition === 'right' ? 'md:order-2' : 'md:order-1'
              }`}
              variants={heroMask}
              initial={prefersReducedMotion ? "visible" : "hidden"}
              animate="visible"
            >
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-brand-primary/20 z-0" />
                <div className="relative z-10">
                  <picture>
                    <source
                      srcSet={`${image.src}?format=webp`}
                      type="image/webp"
                    />
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full aspect-[3/4] object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-3">
          <span className="font-body text-xs tracking-[0.2em] text-brand-stone-500">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            className="w-[1px] h-16 bg-gradient-to-b from-brand-primary/50 to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
}
