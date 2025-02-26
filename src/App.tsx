import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold text-indigo-600">PistolasDev</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-500 hover:text-indigo-600 transition-colors">Home</Link>
                <Link to="/about" className="text-gray-500 hover:text-indigo-600 transition-colors">About</Link>
                <Link to="/projects" className="text-gray-500 hover:text-indigo-600 transition-colors">Projects</Link>
                <Link to="/contact" className="text-gray-500 hover:text-indigo-600 transition-colors">Contact</Link>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button className="text-gray-500 hover:text-indigo-600 focus:outline-none">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-white mt-12">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://github.com/KPISTOLAS" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/konstantinos-pistolas-aa7a12265/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:kpistolas.b@gmail.com" className="text-gray-500 hover:text-gray-900">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-center text-gray-500 text-sm">
              &copy; 2024 Pistolas Konstantinos. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;