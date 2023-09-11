import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Insights from './pages/insights/Insights';
import Contact from './pages/contact/Contact';
import WebDevelopment from './pages/webdevelopment/WebDevelopment';
import UIUXDesign from './pages/uiuxdesign/UIUXDesign';
import TwoDAnimation from './pages/twodanimation/TwoDAnimation';
import SEODigitalMarketing from './pages/seodigitalmarketing/SEODigitalMarketing';
import AppDevelopment from './pages/appdevelopment/AppDevelopment';
import VisualIdentity from './pages/visualidentity/VisualIdentity';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/2d-animation" element={<TwoDAnimation />} />
        <Route path="/seo-digital-marketing" element={<SEODigitalMarketing />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/visual-identity" element={<VisualIdentity />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
