import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/animations';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactStrip from '../components/ContactStrip';
import LazyImage from '../components/LazyImage';

const SERVICES = [
  {
    title: 'Design Consultation',
    description: 'Begin your design journey with our expert consultation service. We delve deep into your vision, analyze your spaces potential, and develop a strategic direction that aligns with your lifestyle and aspirations.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e',
    phases: ['Discovery', 'Analysis', 'Vision'],
  },
  {
    title: 'Spatial Planning',
    description: 'Transform your space with our innovative planning solutions. We craft harmonious layouts that maximize functionality while creating stunning visual narratives through thoughtful space utilization and flow optimization.',
    image: 'https://images.unsplash.com/photo-1486304873000-235643847519',
    phases: ['Layout', 'Flow', 'Optimization'],
  },
  {
    title: 'Full-Service Design',
    description: 'Experience the pinnacle of design service with our comprehensive solution. From initial concept to final styling, we orchestrate every detail to create spaces that are both visually striking and perfectly functional.',
    image: 'https://images.unsplash.com/photo-1618219740975-d40978bb7378',
    phases: ['Design', 'Documentation', 'Delivery'],
  },
  {
    title: 'FF&E Specification',
    description: 'Elevate your space with meticulously curated furniture, fixtures, and equipment. We source exclusive pieces that complement your design while ensuring durability, functionality, and aesthetic excellence.',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
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
        title="Luxury Design Services | Interior & Architectural Solutions"
        description="Experience unparalleled design services combining innovation with timeless elegance. From concept to completion, we transform spaces into extraordinary environments."
      />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0">
            <LazyImage
              src="https://images.unsplash.com/photo-1617806118233-18e1de247200"
              alt="Luxury interior design services"
              className="w-full h-full object-cover"
              aspectRatio="aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
          
          <div className="relative container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-brand-primary text-sm tracking-[0.2em] mb-6 block">OUR EXPERTISE</span>
              <h1 className="text-5xl md:text-7xl text-white font-light mb-8">
                Transforming Visions Into Reality
              </h1>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                We craft bespoke design solutions that blend innovative thinking with timeless elegance,
                creating spaces that inspire and endure.
              </p>
              <Link
                to="/contact"
                className="inline-block px-12 py-4 bg-brand-primary text-white hover:bg-brand-primary/90 transition-all duration-300 tracking-wider text-sm"
              >
                START YOUR PROJECT
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Service Showcase */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-40"
            >
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="group"
                >
                  <div className={`grid md:grid-cols-2 gap-16 items-center ${
                    index % 2 === 0 ? '' : 'md:grid-flow-dense'
                  }`}>
                    {/* Image */}
                    <div className="relative">
                      <div className="absolute -inset-4 border border-brand-primary/20 rounded-lg transform -rotate-2 transition-transform duration-500 group-hover:rotate-0" />
                      <div className="relative overflow-hidden rounded-lg">
                        <LazyImage
                          src={`${service.image}?format=webp`}
                          alt={`Illustration of ${service.title.toLowerCase()}`}
                          className="w-full transform transition-transform duration-700 group-hover:scale-105"
                          aspectRatio="aspect-[4/3]"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}>
                      <span className="text-brand-primary text-sm tracking-[0.2em] mb-6 block">
                        {`0${index + 1}`}
                      </span>
                      <h2 className="text-4xl font-light mb-6">{service.title}</h2>
                      <p className="text-brand-stone-600 leading-relaxed mb-12">
                        {service.description}
                      </p>

                      {/* Process Steps */}
                      <div className="space-y-8">
                        {service.phases.map((phase, i) => (
                          <div key={phase} className="relative">
                            <div className="flex items-center">
                              <motion.div
                                className="w-12 h-[1px] bg-brand-primary"
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                              />
                              <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="ml-4 text-lg"
                              >
                                {phase}
                              </motion.span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-32 bg-brand-stone-900 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center max-w-2xl mx-auto mb-24"
            >
              <span className="text-brand-primary text-sm tracking-[0.2em] mb-6 block">WORKING TOGETHER</span>
              <h2 className="text-4xl md:text-5xl font-light mb-6">Engagement Models</h2>
              <p className="text-brand-stone-300 leading-relaxed">
                Choose the collaboration approach that best suits your project needs and vision.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {ENGAGEMENT_MODELS.map((model, index) => (
                <motion.div
                  key={model.title}
                  variants={fadeUp}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent rounded-lg transform -rotate-1 transition-transform duration-300 group-hover:rotate-0" />
                  <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                    <span className="text-brand-primary text-sm tracking-wider mb-4 block">{`0${index + 1}`}</span>
                    <h3 className="text-2xl mb-4">{model.title}</h3>
                    <p className="text-brand-stone-300 mb-8">
                      {model.description}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {model.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="text-brand-primary">✦</span>
                          <span className="text-brand-stone-200">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-xl font-light mb-8 text-brand-primary">{model.price}</div>

                    <Link
                      to="/contact"
                      className="block text-center py-4 border border-white/20 hover:bg-white hover:text-brand-stone-900 transition-all duration-300 tracking-wider text-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-24">
                <span className="text-brand-primary text-sm tracking-[0.2em] mb-6 block">THE JOURNEY</span>
                <h2 className="text-4xl md:text-5xl font-light mb-6">Our Design Process</h2>
                <p className="text-brand-stone-600 max-w-2xl mx-auto">
                  A carefully curated journey from initial concept to final execution,
                  ensuring every detail aligns with your vision.
                </p>
              </div>

              <div className="space-y-24">
                {[
                  {
                    phase: 'Discovery',
                    description: 'Understanding your vision, requirements, and aspirations through detailed consultation.',
                    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3',
                  },
                  {
                    phase: 'Design Development',
                    description: 'Translating ideas into comprehensive design solutions with detailed specifications.',
                    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
                  },
                  {
                    phase: 'Implementation',
                    description: 'Bringing designs to life with master craftsmen and quality materials.',
                    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                  >
                    <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                      <div className="relative">
                        <div className="absolute -inset-4 border border-brand-primary/20 rounded-lg" />
                        <LazyImage
                          src={step.image}
                          alt={step.phase}
                          className="w-full rounded-lg"
                          aspectRatio="aspect-[16/9]"
                        />
                      </div>
                    </div>
                    <div className={index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}>
                      <span className="text-brand-primary text-sm tracking-wider mb-4 block">{`Phase ${index + 1}`}</span>
                      <h3 className="text-3xl font-light mb-4">{step.phase}</h3>
                      <p className="text-brand-stone-600 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <ContactStrip dark />
      </main>
    </>
  );
}