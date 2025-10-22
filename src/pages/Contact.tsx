import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { fadeIn } from '../lib/animations';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Vatsalya Interior Design</title>
        <meta
          name="description"
          content="Get in touch with us for your interior design needs."
        />
      </Helmet>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container py-32"
      >
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 p-6 rounded-lg"
              >
                <h2 className="text-xl font-bold text-green-800 mb-2">
                  Thank you for your message!
                </h2>
                <p className="text-green-700">
                  We'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-yellow focus:ring-brand-yellow"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-yellow focus:ring-brand-yellow"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-yellow focus:ring-brand-yellow"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-yellow text-brand-black py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Visit Us</h2>
              <address className="not-italic text-gray-600">
                123 Design Street<br />
                New York, NY 10001<br />
                United States
              </address>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>
              <p className="text-gray-600">
                Email: info@vatsalya.com<br />
                Phone: (555) 123-4567
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Business Hours</h2>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: By appointment<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
