// src/pages/Services.tsx
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/animations';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ContactStrip from '../components/ContactStrip';

const SERVICES = [
  {
    title: 'Design Consultation',
    description: 'Begin your design journey with our expert consultation service. We delve deep into your vision, analyze your spaces potential, and develop a strategic direction that aligns with your lifestyle and aspirations.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
    phases: ['Discovery', 'Analysis', 'Vision'],
  },
  {
    title: 'Spatial Planning',
    description: 'Transform your space with our innovative planning solutions. We craft harmonious layouts that maximize functionality while creating stunning visual narratives through thoughtful space utilization and flow optimization.',
    image: 'https://images.unsplash.com/photo-1574691250077-03a929faece5',
    phases: ['Layout', 'Flow', 'Optimization'],
  },
  {
    title: 'Full-Service Design',
    description: 'Experience the pinnacle of design service with our comprehensive solution. From initial concept to final styling, we orchestrate every detail to create spaces that are both visually striking and perfectly functional.',
    image: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908',
    phases: ['Design', 'Documentation', 'Delivery'],
  },
  {
    title: 'FF&E Specification',
    description: 'Elevate your space with meticulously curated furniture, fixtures, and equipment. We source exclusive pieces that complement your design while ensuring durability, functionality, and aesthetic excellence.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    phases: ['Selection', 'Sourcing', 'Installation'],
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: 'Consultation',
    description: 'Expert guidance and strategic planning to help you make informed decisions about your space.',
    features: [
      'Site analysis',
      'Conceptual direction',
      'Budget planning',
      'Material recommendations',
    ],
    price: 'Starting at ₹50,000',
  },
  {
    title: 'Design Only',
    description: 'Comprehensive design services with detailed documentation for your contractor.',
    features: [
      'Space planning',
      'Design development',
      'Material specifications',
      'Construction documents',
    ],
    price: 'Starting at ₹2,00,000',
  },
  {
    title: 'Full Service',
    description: 'Complete end-to-end design and project management solution.',
    features: [
      'All Design Only services',
      'Project management',
      'Vendor coordination',
      'Site supervision',
    ],
    price: 'Custom quote',
  },
];

export default function Services() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <SEO 
        title="Our Services"
        description="Comprehensive architectural and interior design services including consultation, spatial planning, and full-service design solutions."
      />

      <main>
        <Hero
          title="Services"
          subtitle="Comprehensive design solutions tailored to your vision"
          className="min-h-[50vh]"
        />

        {/* Service Blocks */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-32"
            >
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? '' : 'md:grid-flow-dense'
                  }`}
                  variants={fadeUp}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3]">
                    <picture>
                      <source
                        srcSet={`${service.image}?format=webp`}
                        type="image/webp"
                      />
                      <img
                        src={service.image}
                        alt={`Illustration of ${service.title.toLowerCase()}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}>
                    <h2 className="text-3xl mb-6">{service.title}</h2>
                    <p className="text-neutral-600 mb-8">
                      {service.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        {service.phases.map((phase, i) => (
                          <span
                            key={phase}
                            className={i === 0 ? 'text-left' : i === service.phases.length - 1 ? 'text-right' : 'text-center'}
                          >
                            {phase}
                          </span>
                        ))}
                      </div>
                      <div className="h-1 bg-neutral-200">
                        <motion.div
                          className="h-full bg-yellow-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-24 bg-neutral-100">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl text-center mb-16"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Engagement Models
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {ENGAGEMENT_MODELS.map((model) => (
                <motion.div
                  key={model.title}
                  className="bg-white p-8 group hover:bg-black hover:text-white transition-colors"
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-2xl mb-4">{model.title}</h3>
                  <p className="text-neutral-600 group-hover:text-neutral-300 mb-6 transition-colors">
                    {model.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="text-yellow-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-xl font-light mb-6">{model.price}</div>

                  <button
                    onClick={() => {
                      // TODO: Implement contact drawer
                      console.log('Open contact drawer');
                    }}
                    className="w-full py-3 border border-current hover:bg-current hover:text-black transition-colors"
                    aria-controls="contact-drawer"
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <ContactStrip dark />
      </main>
    </>
  );
}