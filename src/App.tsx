import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load other pages
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/portfolio"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Portfolio />
                </Suspense>
              }
            />
            <Route
              path="/services"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Contact />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="911234567890" />
      </Router>
    </HelmetProvider>
  );
}
