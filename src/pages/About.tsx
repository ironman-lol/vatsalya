import { motion } from 'framer-motion';
import { fadeUp, stagger, timelineNode } from '../lib/animations';
import LazyImage from '../components/LazyImage';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

import SEO from '../components/SEO';
import ContactStrip from '../components/ContactStrip';

const TIMELINE_ITEMS = [
  {
    year: 2020,
    title: 'Studio Founded',
    description: 'Established in Mumbai with a vision to create thoughtful, innovative spaces.',
  },
  {
    year: 2022,
    title: 'Notable Recognition',
    description: 'Received the Young Architect of the Year award for the Skyline Penthouse project.',
  },
  {
    year: 2023,
    title: 'Expansion',
    description: 'Opened our second studio in Bangalore, expanding our presence in South India.',
  },
];

const TEAM_MEMBERS = [
  {
    name: 'Priya Sharma',
    role: 'Principal Architect',
    bio: 'With over 15 years of experience, Priya leads our design direction with a focus on sustainable luxury.',
    image: '/assets/team/priya.jpg',
    social: {
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Rahul Patel',
    role: 'Senior Interior Designer',
    bio: 'Rahul brings a unique perspective to spatial design, blending functionality with artistic expression.',
    image: '/assets/team/rahul.jpg',
    social: {
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Aisha Khan',
    role: 'Project Manager',
    bio: 'Aisha ensures seamless execution of projects through meticulous planning and coordination.',
    image: '/assets/team/aisha.jpg',
    social: {
      linkedin: '#',
    },
  },
];

const PROCESS_STEPS = [
  {
    title: 'Discovery',
    description: 'Understanding your vision, requirements, and constraints through detailed consultation.',
  },
  {
    title: 'Concept',
    description: 'Developing initial design concepts and spatial strategies aligned with your goals.',
  },
  {
    title: 'Development',
    description: 'Refining designs through iterative feedback and detailed technical documentation.',
  },
  {
    title: 'Delivery',
    description: 'Coordinating with contractors and vendors to bring the vision to life.',
  },
];

const ACCOLADES = [
  {
    name: 'Design Excellence Award',
    logo: '/assets/accolades/award1.png',
    url: '#',
  },
  {
    name: 'Sustainability Innovation',
    logo: '/assets/accolades/award2.png',
    url: '#',
  },
  {
    name: 'Featured in Architectural Digest',
    logo: '/assets/accolades/ad.png',
    url: '#',
  },
];

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about our studio's journey, meet our team, and discover our design process."
      />

      <main>
        {/* Hero with Manifesto */}
        <section className="min-h-screen flex items-center py-24">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              animate="visible"
              variants={fadeUp}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
                We create spaces that inspire, elevate, and endure.
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-600 mb-12">
                Our studio is founded on the belief that thoughtful design has the power to transform how we live, work, and interact with our environment.
              </p>

              <blockquote className="text-2xl md:text-3xl italic mb-8">
                "Architecture is not about space but about time."
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-neutral-100">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl text-center mb-16"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Our Journey
            </motion.h2>

            <div className="max-w-3xl mx-auto">
              {TIMELINE_ITEMS.map((item) => (
                <motion.div
                  key={item.year}
                  className="relative pl-8 pb-16 last:pb-0"
                  initial={prefersReducedMotion ? "visible" : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  {/* Timeline line */}
                  <motion.div
                    className="absolute left-0 top-0 h-full w-px bg-black"
                    variants={timelineNode}
                    initial={prefersReducedMotion ? "visible" : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true }}
                  />

                  {/* Timeline node */}
                  <div className="absolute left-0 top-0 w-2 h-2 bg-black rounded-full -translate-x-[3px]" />

                  <div>
                    <span className="text-sm uppercase tracking-wider text-neutral-500">
                      {item.year}
                    </span>
                    <h3 className="text-xl mb-2">{item.title}</h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl text-center mb-16"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Our Team
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {TEAM_MEMBERS.map((member) => (
                <motion.div
                  key={member.name}
                  className="group"
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                    <LazyImage
                      src={`${member.image}?format=webp`}
                      alt={`Portrait of ${member.name}`}
                      className="w-full h-full"
                      aspectRatio="aspect-[3/4]"
                    />

                    {/* Social links overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="text-white hover:text-yellow-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          className="text-white hover:text-yellow-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s Instagram profile`}
                        >
                          Instagram
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-neutral-600 mb-2">{member.role}</p>
                  <p className="text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-24 bg-neutral-100">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl text-center mb-16"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Our Process
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="group relative"
                  initial={prefersReducedMotion ? "visible" : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index}
                >
                  <div className="text-6xl font-light text-neutral-200 mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>

                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-neutral-300 -z-10">
                      <motion.div
                        className="h-full bg-yellow-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Press */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl text-center mb-16"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Awards & Recognition
            </motion.h2>

            <motion.div
              className="flex flex-wrap justify-center gap-12"
              initial={prefersReducedMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {ACCOLADES.map((accolade) => (
                <motion.a
                  key={accolade.name}
                  href={accolade.url}
                  className="block w-40 opacity-50 hover:opacity-100 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <LazyImage
                    src={accolade.logo}
                    alt={accolade.name}
                    className="w-full"
                    aspectRatio="aspect-[3/2]"
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        <ContactStrip dark />
      </main>
    </>
  );
}
