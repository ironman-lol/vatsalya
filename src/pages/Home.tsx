import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { fadeUp } from '../lib/animations';

export default function Home() {
  return (
    <>
      <SEO 
        title="Luxury Interior Design Studio"
        description="Discover the art of refined living through our bespoke interior design services. We craft timeless spaces that embody luxury, sophistication, and personal expression."
      />

      <main className="overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Hero
            title="Crafting Timeless Elegance Through Interior Design"
            subtitle="Where luxury meets functionality in carefully curated spaces that tell your unique story."
            image={{
              src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3',
              alt: 'Luxury interior design showcasing our signature aesthetic'
            }}
          />
        </motion.div>

        {/* Featured Projects */}
        <section className="py-32 bg-brand-stone-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary">FEATURED WORKS</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mt-6">Curated Spaces</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                    alt="Luxury penthouse design"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                <h3 className="font-heading text-2xl mb-2">Skyline Residence</h3>
                <p className="font-body text-brand-stone-600">Mumbai, India</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group mt-16 md:mt-32"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src="https://images.unsplash.com/photo-1600566752355-35792bedcfea"
                    alt="Heritage villa restoration"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                <h3 className="font-heading text-2xl mb-2">Heritage Villa</h3>
                <p className="font-body text-brand-stone-600">Goa, India</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-body text-sm tracking-[0.2em] text-brand-primary">OUR EXPERTISE</span>
                <h2 className="font-heading text-4xl md:text-5xl font-light mt-6 mb-8">Elevating Spaces Through Design</h2>
                <p className="font-body text-brand-stone-600 leading-relaxed mb-12">
                  Our atelier brings together the finest in design, craftsmanship, and materials to create
                  spaces that transcend the ordinary. Each project is a unique journey of transformation,
                  guided by your vision and our expertise.
                </p>
                <button className="font-body text-sm tracking-[0.2em] text-brand-primary hover:text-brand-secondary transition-colors">
                  DISCOVER OUR SERVICES →
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-8"
              >
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading text-xl mb-2">Residential Design</h3>
                    <p className="font-body text-sm text-brand-stone-600">Luxury homes and apartments</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Commercial Spaces</h3>
                    <p className="font-body text-sm text-brand-stone-600">Boutiques and offices</p>
                  </div>
                </div>
                <div className="space-y-8 mt-16">
                  <div>
                    <h3 className="font-heading text-xl mb-2">Hospitality</h3>
                    <p className="font-body text-sm text-brand-stone-600">Hotels and restaurants</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2">Consultation</h3>
                    <p className="font-body text-sm text-brand-stone-600">Expert guidance</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-brand-secondary text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <span className="font-body text-sm tracking-[0.2em] text-brand-primary">START YOUR JOURNEY</span>
              <h2 className="font-heading text-4xl md:text-5xl font-light mt-6 mb-8">
                Transform Your Space Into Something Extraordinary
              </h2>
              <p className="font-body text-brand-stone-300 mb-12">
                Let's collaborate to create a space that reflects your unique style and elevates your daily experience.
              </p>
              <button className="bg-white text-brand-secondary hover:bg-brand-primary hover:text-white px-12 py-4 font-body text-sm tracking-[0.2em] transition-colors">
                SCHEDULE A CONSULTATION
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
