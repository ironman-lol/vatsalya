import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

import { useState } from 'react';
import { projects } from '../data/portfolio';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore our diverse collection of architectural and interior design projects."
      />

      <main>
        <Hero
          title="Our Portfolio"
          subtitle="A curated selection of our most impactful projects"
          className="min-h-[50vh]"
        />

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 ${
                  selectedCategory === 'all'
                    ? 'bg-black text-white'
                    : 'bg-white hover:bg-black hover:text-white'
                } transition-colors`}
              >
                All Projects
              </button>
              {['residential', 'commercial', 'renovation', 'interiors'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 capitalize ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-white hover:bg-black hover:text-white'
                  } transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden"
                >
                  <div className="relative aspect-[4/3]">
                    <picture>
                      <source
                        srcSet={`${project.hero.url}?format=webp`}
                        type="image/webp"
                      />
                      <img
                        src={project.hero.url}
                        alt={project.hero.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </picture>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
