import React from 'react';
import { motion } from 'framer-motion';
import { stagger } from '../lib/animations';

const steps = [
  {
    number: 1,
    title: 'Meet Designer',
    description: 'Initial consultation to understand your vision, requirements, and style preferences. We discuss your dreams and aspirations for your space.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    number: 2,
    title: 'Design Planning',
    description: 'Our expert team creates detailed 3D visualizations and mood boards. We select materials, colors, and finishes that match your style perfectly.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    )
  },
  {
    number: 3,
    title: 'Execution Begins',
    description: 'Watch your vision come to life as our skilled craftsmen begin the transformation. We coordinate every aspect, from demolition to installation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    number: 4,
    title: 'Quality Check',
    description: 'Our quality assurance team ensures every detail meets our high standards. We conduct thorough inspections and make final adjustments.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: 5,
    title: 'Final Reveal',
    description: "Experience the magic of your transformed space. We'll walk you through your new interior and ensure everything is perfect.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
];

const DesignSteps: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-4xl md:text-5xl font-heading font-light mb-6"
          >
            Your Dream Home Journey
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transform your space into a masterpiece in five simple steps. We guide you through every phase of the design process.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary/0 via-brand-primary/20 to-brand-primary/0"
            style={{ transformOrigin: "left" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Step Number */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.2 + 0.3 }}
                  className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-semibold z-20"
                >
                  {step.number}
                </motion.div>

                {/* Card */}
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-12 h-12 text-brand-primary mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-brand-primary/5 rounded-bl-full transform transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-brand-primary/5 rounded-tr-full transform transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Connection Dots */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 space-x-1">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className="w-1.5 h-1.5 rounded-full bg-brand-primary/40"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.7 }}
                      className="w-1.5 h-1.5 rounded-full bg-brand-primary/60"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.8 }}
                      className="w-1.5 h-1.5 rounded-full bg-brand-primary/40"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => window.location.href = '/contact'}
            className="inline-flex items-center px-8 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-all duration-300 group transform hover:-translate-y-0.5"
          >
            Start Your Journey
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignSteps;