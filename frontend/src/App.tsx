import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingBlobs from './components/FloatingBlobs';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <ScrollToTop />
      <div className="relative overflow-hidden min-h-screen flex flex-col">
        <FloatingBlobs />
        <div className="relative z-10 font-sans selection:bg-primary-light/50 selection:text-pastel-text dark:selection:bg-primary-dark/80 dark:selection:text-white flex-1 flex flex-col">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
