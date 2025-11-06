import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import pages
import HomePage from './routes/HomePage';
import ProjectDetailPage from './routes/ProjectDetailPage';
import BlogPage from './routes/BlogPage';
import BlogPostPage from './routes/BlogPostPage';
import NotFoundPage from './routes/NotFoundPage';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page transition animation
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <Navbar />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <HomePage />
                  </motion.div>
                }
              />
              <Route
                path="/projects/:slug"
                element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <ProjectDetailPage />
                  </motion.div>
                }
              />
              <Route
                path="/blog"
                element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <BlogPage />
                  </motion.div>
                }
              />
              <Route
                path="/blog/:slug"
                element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <BlogPostPage />
                  </motion.div>
                }
              />
              <Route
                path="*"
                element={
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <NotFoundPage />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;