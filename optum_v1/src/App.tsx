import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import GalleryPage from './pages/GalleryPage';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppChatButton from './components/WhatsAppChatButton';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Footer />
        <WhatsAppChatButton />
      </div>
    </Router>
  );
}
