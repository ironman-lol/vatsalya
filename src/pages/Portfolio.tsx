import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/animations';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';
import { useState } from 'react';
import { projects } from '../data/portfolio';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'living-room', label: 'Living Room' },
    { id: 'modular-kitchen', label: 'Modular Kitchen' },
    { id: 'bedroom', label: 'Bedroom' }
  ];

  return (
    <>
      <SEO
        title="Portfolio | Luxury Interior Design Projects"
        description="Explore our curated collection of luxury interior design and architectural projects. From residential to commercial spaces, discover our commitment to excellence."
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <LazyImage
              src="https://images.unsplash.com/photo-1632829882891-5047ccc421bc"
              alt="Luxury interior design portfolio"
              className="w-full h-full object-cover"
              aspectRatio="aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 text-white text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-5xl md:text-7xl font-light mb-6">Our Portfolio</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto font-light opacity-90">
                A curated collection of spaces that showcase our commitment to excellence in design and craftsmanship
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-16 bg-brand-stone-50">
          <div className="container mx-auto px-6">
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-3 text-sm tracking-wider transition-all duration-300 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-brand-primary text-white'
                      : 'bg-white hover:bg-brand-stone-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  variants={fadeUp}
                  className="group"
                >
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <LazyImage
                      src={`${project.hero.url}?format=webp`}
                      alt={project.hero.alt}
                      className="w-full transition-transform duration-700 group-hover:scale-105"
                      aspectRatio="aspect-[4/3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <p className="text-white/90 text-sm tracking-wider mb-2">{project.services.join(' · ')}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading mb-2 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-brand-stone-600">{project.location}</p>
                    <p className="text-brand-stone-400">{project.year}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-brand-stone-900 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
            >
              {[
                { number: '150+', label: 'Projects Completed' },
                { number: '12', label: 'Years of Excellence' },
                { number: '18', label: 'Design Awards' },
                { number: '94%', label: 'Client Satisfaction' }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-light mb-2">{stat.number}</div>
                  <div className="text-brand-stone-400 text-sm tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-light mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-brand-stone-600 mb-12">
                Let's collaborate to create a space that reflects your vision and exceeds your expectations.
              </p>
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-brand-primary text-white hover:bg-brand-primary/90 transition-colors tracking-wider text-sm"
              >
                SCHEDULE A CONSULTATION
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
