import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { fadeIn } from '../lib/animations';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Minimalist Home',
    description: 'A sleek, minimalist interior design for a modern urban home.',
    category: 'residential',
    imageUrl: '/assets/portfolio/project1-main.jpg',
    client: 'Johnson Family',
    completionDate: '2025-08',
    tags: ['Interior Design', 'Space Planning', 'Furniture Selection', '3D Rendering', 'Smart Home Integration']
  }
];

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio - Vatsalya Interior Design</title>
        <meta
          name="description"
          content="Explore our collection of modern interior design projects."
        />
      </Helmet>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container py-32"
      >
        <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.client}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
