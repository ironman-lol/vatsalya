import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { fadeIn } from '../lib/animations';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Vatsalya - Modern Interior Design Solutions</title>
        <meta
          name="description"
          content="Transform your space with innovative interior design solutions. We create timeless interiors that inspire and elevate your everyday living experience."
        />
      </Helmet>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Hero />
      </motion.div>
    </>
  );
}
