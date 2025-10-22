// src/components/ProjectModal.tsx
import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import type { Project } from '../data/portfolio';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  isOpen: boolean;
}

export default function ProjectModal({ project, onClose, isOpen }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Handle left/right arrow keys for gallery navigation
      if (e.key === 'ArrowLeft') {
        // TODO: Previous image
      }
      if (e.key === 'ArrowRight') {
        // TODO: Next image
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      focusRef.current?.focus();
      
      // Save current scroll position and prevent body scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        
        // Restore scroll position
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
        onClick={onClose}
        ref={modalRef}
      >
        <button
          ref={focusRef}
          className="sr-only"
          onClick={onClose}
          aria-label="Close modal"
        >
          Close
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto min-h-screen px-6 py-12 grid md:grid-cols-2 gap-12 items-center"
          onClick={e => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Image Gallery */}
          <div className="relative">
            <picture>
              <source
                srcSet={`${project.hero.url}?format=webp`}
                type="image/webp"
              />
              <img
                src={project.hero.url}
                alt={project.hero.alt}
                className="w-full"
                loading="eager"
                decoding="async"
              />
            </picture>

            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                className="p-2 bg-black text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                className="p-2 bg-black text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <button
              onClick={onClose}
              className="mb-8 text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
              aria-label="Close modal"
            >
              ← Close
            </button>

            <h2 id="modal-title" className="text-4xl font-light mb-2">
              {project.title}
            </h2>

            <p className="text-neutral-400 mb-6">
              {project.location}, {project.year}
            </p>

            <div className="mb-8 space-y-4">
              <p className="text-lg">{project.description}</p>
              
              <div>
                <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-2">
                  Services
                </h3>
                <ul className="list-disc list-inside">
                  {project.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            {project.pdfBrochure && (
              <a
                href={project.pdfBrochure}
                className="inline-block px-6 py-3 bg-white text-black hover:bg-neutral-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Project Brief
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}