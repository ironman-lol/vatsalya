import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';
import { fadeUp } from '../lib/animations';
import DesignSteps from '../components/DesignSteps';

export default function Home() {
  return (
    <>
      <SEO 
        title="Vatsalya | Luxury Interior Design & Architecture"
        description="Experience the epitome of luxury interior design. We transform spaces into timeless works of art, where every detail tells a story of sophistication and elegance."
      />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <LazyImage
              src="https://images.unsplash.com/photo-1632829882891-5047ccc421bc"
              alt="Luxury interior design"
              className="w-full h-full object-cover"
              aspectRatio="aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative h-full flex items-center justify-center text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-4xl px-6"
            >
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
                The Art of Refined Living
              </h1>
              <p className="text-lg md:text-xl font-light opacity-90 mb-12 max-w-2xl mx-auto">
                Where luxury meets functionality, and every space tells a unique story of sophistication.
              </p>
              <Link
                to="/contact"
                className="inline-block px-12 py-4 border border-white hover:bg-white hover:text-black transition-colors duration-300 tracking-[0.2em] text-sm"
              >
                BEGIN YOUR JOURNEY
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-3">
              <span className="font-body text-xs tracking-[0.2em] text-white">EXPLORE</span>
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
                className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"
              />
            </div>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-4xl mx-auto text-center mb-24"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary">OUR PHILOSOPHY</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mt-6 mb-8">
                Creating Timeless Elegance Through Thoughtful Design
              </h2>
              <p className="text-lg text-brand-stone-600 leading-relaxed">
                We believe in the power of design to transform not just spaces, but lives. Our approach combines timeless aesthetics with modern functionality, creating environments that inspire and endure.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                {
                  title: 'Bespoke Design',
                  description: 'Every project is unique, tailored to reflect your individual style and needs. Our design process begins with understanding your vision and lifestyle.',
                  image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221'
                },
                {
                  title: 'Artisan Craftsmanship',
                  description: 'We partner with master artisans and craftspeople who bring decades of expertise to create bespoke furnishings and details.',
                  image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace'
                },
                {
                  title: 'Sustainable Luxury',
                  description: 'Our designs embrace sustainable practices and materials without compromising on luxury and elegance. We integrate eco-friendly solutions with timeless sophistication.',
                  image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="relative mb-8 overflow-hidden">
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      className="w-full transform group-hover:scale-105 transition-transform duration-700 rounded-lg"
                      aspectRatio="aspect-square"
                    />
                  </div>
                  <h3 className="font-heading text-2xl mb-4">{item.title}</h3>
                  <p className="text-brand-stone-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Steps */}
        <DesignSteps />

        {/* Featured Project */}
        <section className="py-32 bg-brand-stone-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-body text-sm tracking-[0.2em] text-brand-primary">FEATURED PROJECT</span>
                <h2 className="font-heading text-4xl md:text-5xl font-light mt-6 mb-8">The Azure Penthouse</h2>
                <p className="text-brand-stone-600 leading-relaxed mb-6">
                  A masterpiece of modern luxury living, this penthouse combines breathtaking views with sophisticated interiors. Natural materials and thoughtful details create a harmonious space that elevates daily life.
                </p>
                <ul className="text-brand-stone-600 leading-relaxed mb-12 space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                    6,500 sq. ft. of curated living space
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                    Custom Italian marble and hardwood finishes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                    Smart home integration with bespoke lighting
                  </li>
                </ul>
                <div className="space-x-4">
                  <Link
                    to="/portfolio"
                    className="inline-block px-8 py-3 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300 tracking-[0.2em] text-sm"
                  >
                    VIEW PROJECT
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-block px-8 py-3 bg-brand-stone-100 text-brand-stone-800 hover:bg-brand-stone-200 transition-colors duration-300 tracking-[0.2em] text-sm"
                  >
                    INQUIRE
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -inset-4 border border-brand-primary/20" />
                  <LazyImage
                    src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3"
                    alt="Azure Penthouse interior"
                    className="w-full"
                    aspectRatio="aspect-[4/3]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Design Approach */}
        <section className="py-32 bg-brand-stone-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary">OUR PROCESS</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mt-6">The Art of Creation</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'We begin with understanding your vision, lifestyle, and aspirations through in-depth consultations.',
                  details: ['Personal Style Analysis', 'Space Assessment', 'Functional Requirements']
                },
                {
                  step: '02',
                  title: 'Concept',
                  description: 'Our team develops unique design concepts that align with your vision while pushing creative boundaries.',
                  details: ['Mood Boards', 'Material Selection', 'Color Palettes']
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'We refine every detail of the design through an iterative process of feedback and improvement.',
                  details: ['3D Visualization', 'Material Sampling', 'Detail Drawings']
                },
                {
                  step: '04',
                  title: 'Realization',
                  description: 'Expert craftsmen and trusted partners bring the design to life with meticulous attention to detail.',
                  details: ['Quality Control', 'Installation', 'Final Styling']
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="text-6xl font-light text-brand-primary/10 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-heading mb-4">{phase.title}</h3>
                  <p className="text-brand-stone-600 mb-6">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.details.map((detail, i) => (
                      <li key={i} className="text-sm text-brand-stone-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-brand-primary/60 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-24"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary">OUR EXPERTISE</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mt-6">
                Comprehensive Design Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: 'Residential',
                  description: 'Luxury homes, penthouses, and villas designed to reflect your personal style and elevate your daily living experience.',
                  features: ['Space Planning', 'Custom Furniture', 'Material Selection']
                },
                { 
                  title: 'Commercial',
                  description: 'High-end retail spaces, corporate offices, and showrooms that make a lasting impression on clients and employees.',
                  features: ['Brand Integration', 'Workspace Planning', 'Lighting Design']
                },
                { 
                  title: 'Hospitality',
                  description: 'Hotels, restaurants, and boutique resorts that create memorable experiences through thoughtful design and attention to detail.',
                  features: ['Guest Experience', 'Ambiance Design', 'FF&E Selection']
                },
                { 
                  title: 'Consultation',
                  description: 'Expert guidance on design direction, material selection, and project planning for discerning clients.',
                  features: ['Design Strategy', 'Project Planning', 'Vendor Coordination']
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 hover:bg-brand-stone-50 transition-colors duration-300 group"
                >
                  <h3 className="font-heading text-xl mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                  <p className="text-brand-stone-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-brand-stone-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-brand-primary/60 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-brand-stone-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary">TESTIMONIALS</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mt-6">Client Experiences</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  quote: "Vatsalya transformed our home into something beyond our imagination. Their attention to detail and understanding of our needs was exceptional.",
                  author: "Priya Mehta",
                  title: "Residential Client",
                  project: "Mumbai Penthouse"
                },
                {
                  quote: "Working with the team was a seamless experience. They brought innovation and practicality together in our office design, creating a space that inspires creativity.",
                  author: "Rajesh Kumar",
                  title: "CEO",
                  project: "Tech Startup Headquarters"
                },
                {
                  quote: "The level of craftsmanship and dedication to excellence is unmatched. Every corner of our restaurant reflects their thoughtful design approach.",
                  author: "Sarah Williams",
                  title: "Restaurant Owner",
                  project: "Fine Dining Experience"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-lg shadow-sm"
                >
                  <div className="mb-6 text-2xl text-brand-primary">"</div>
                  <p className="text-brand-stone-600 mb-8 italic">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-brand-stone-100 pt-6">
                    <p className="font-heading text-lg mb-1">{testimonial.author}</p>
                    <p className="text-sm text-brand-stone-500">{testimonial.title}</p>
                    <p className="text-sm text-brand-primary mt-1">{testimonial.project}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-32">
          <div className="absolute inset-0">
            <LazyImage
              src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3"
              alt="Luxury interior"
              className="w-full h-full object-cover"
              aspectRatio="aspect-[21/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
          </div>

          <div className="relative container mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary mb-6 block">BEGIN YOUR JOURNEY</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-8">
                Transform Your Space Into a Masterpiece
              </h2>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Let's collaborate to create spaces that inspire, comfort, and endure. Our team of expert designers
                is ready to bring your vision to life.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <Link
                  to="/contact"
                  className="inline-block px-12 py-4 bg-white text-black hover:bg-brand-primary hover:text-white transition-colors duration-300 tracking-[0.2em] text-sm w-full md:w-auto"
                >
                  SCHEDULE A CONSULTATION
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-block px-12 py-4 border border-white hover:bg-white hover:text-black transition-colors duration-300 tracking-[0.2em] text-sm w-full md:w-auto"
                >
                  VIEW OUR PORTFOLIO
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
