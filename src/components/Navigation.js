import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Menu, X, Sparkles, Code } from 'lucide-react';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-black/98 backdrop-blur-md shadow-xl border-b border-purple-400/30 dark:border-cyan-400/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Code className="w-5 h-5 text-gray-900" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 dark:from-cyan-400 dark:to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-3 h-3 text-white m-0.5" />
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-blue-500 dark:group-hover:from-cyan-300 dark:group-hover:to-purple-300 transition-all duration-300">
                DevPortfolio
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-cyan-400 px-4 py-2 text-sm font-medium transition-all duration-300 group rounded-lg hover:bg-purple-400/10 dark:hover:bg-cyan-400/10"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-400 dark:to-purple-400 transition-all duration-300 group-hover:w-8 rounded-full"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Enhanced Theme Toggle */}
            <div className="relative">
              <button
                onClick={toggleTheme}
                className="group relative p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-cyan-500/10 dark:to-purple-500/10 hover:from-purple-500/20 hover:to-pink-500/20 dark:hover:from-cyan-500/20 dark:hover:to-purple-500/20 transition-all duration-300 transform hover:scale-110 border border-purple-400/20 dark:border-cyan-400/20 hover:border-purple-400/40 dark:hover:border-cyan-400/40 backdrop-blur-sm"
              >
                <div className="relative">
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5 text-purple-500 transition-all duration-300 group-hover:text-pink-500" />
                  ) : (
                    <Sun className="w-5 h-5 text-cyan-400 transition-all duration-300 group-hover:text-purple-400" />
                  )}
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-cyan-400/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-purple-400 dark:text-gray-800 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </div>
              </button>
              
              {/* Background particles for theme toggle */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1 left-1 w-1 h-1 bg-teal-400/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse animation-delay-1000"></div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-cyan-400 hover:bg-purple-400/10 dark:hover:bg-cyan-400/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="transition-transform duration-300 rotate-180" />
              ) : (
                <Menu size={24} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-lg mt-2 border border-purple-400/30 dark:border-cyan-400/30 shadow-xl transition-colors duration-700">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-cyan-400 hover:bg-purple-400/10 dark:hover:bg-cyan-400/10 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;