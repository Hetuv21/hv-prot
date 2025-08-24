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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 theme-transition ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-purple-200/30 dark:border-cyan-200/30' 
        : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 dark:from-cyan-400 dark:to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                  <Sparkles className="w-3 h-3 text-white m-0.5" />
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:to-purple-600 dark:group-hover:from-cyan-300 dark:group-hover:to-purple-300 transition-all duration-300">
                HetPortfolio
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
                  className="relative text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-cyan-400 px-4 py-2 text-sm font-medium transition-all duration-300 group rounded-lg hover:bg-purple-50/60 dark:hover:bg-cyan-900/20 hover:shadow-md"
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
                className="group relative p-3 rounded-xl bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-cyan-900/30 dark:to-purple-900/30 hover:from-purple-200/70 hover:to-pink-200/70 dark:hover:from-cyan-800/50 dark:hover:to-purple-800/50 transition-all duration-300 transform hover:scale-110 border border-purple-200/50 dark:border-cyan-200/50 hover:border-purple-300/70 dark:hover:border-cyan-300/70 backdrop-blur-sm hover:shadow-lg"
              >
                <div className="relative">
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5 text-purple-600 dark:text-cyan-400 transition-all duration-300 group-hover:text-purple-700 dark:group-hover:text-cyan-300" />
                  ) : (
                    <Sun className="w-5 h-5 text-amber-500 dark:text-yellow-400 transition-all duration-300 group-hover:text-amber-600 dark:group-hover:text-yellow-300" />
                  )}
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-200/30 to-pink-200/30 dark:from-cyan-200/20 dark:to-purple-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800/90 dark:bg-gray-200/90 text-white dark:text-gray-800 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm">
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
              className={`md:hidden p-2 rounded-full border-2 border-transparent transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-cyan-400
                ${isMobileMenuOpen ? 'bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 text-white scale-110 ring-2 ring-purple-400 dark:ring-cyan-400 shadow-2xl' : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:bg-purple-50/60 dark:hover:bg-cyan-900/20'}`}
              aria-label="Toggle menu"
              style={{ boxShadow: isMobileMenuOpen ? '0 4px 32px 0 rgba(136, 58, 255, 0.25)' : undefined }}
            >
              <span className="sr-only">Open main menu</span>
              <span className="flex items-center justify-center transition-transform duration-500">
                {isMobileMenuOpen ? (
                  <X size={28} className="transition-transform duration-500 rotate-180 drop-shadow-lg" />
                ) : (
                  <Menu size={28} className="transition-transform duration-500" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-full z-40 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          style={{ backdropFilter: isMobileMenuOpen ? 'blur(16px) saturate(180%)' : 'none', background: isMobileMenuOpen ? 'rgba(30, 27, 38, 0.55)' : 'transparent' }}
        >
          <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-purple-200/50 dark:border-cyan-200/50 shadow-2xl transition-all duration-700 ${isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            style={{ boxShadow: isMobileMenuOpen ? '0 8px 40px 0 rgba(136, 58, 255, 0.18)' : undefined }}
          >
            {/* Mobile Menu Header with Back Button */}
            <div className="flex items-center justify-between p-4 border-b border-purple-200/30 dark:border-cyan-200/30">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Menu</h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-cyan-900/30 dark:to-purple-900/30 hover:from-purple-200 hover:to-pink-200 dark:hover:from-cyan-800/50 dark:hover:to-purple-800/50 transition-all duration-300 transform hover:scale-110"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-purple-600 dark:text-cyan-400" />
              </button>
            </div>
            
            <div className="flex flex-col gap-2 py-4 px-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center gap-3 px-5 py-4 rounded-xl text-lg font-semibold text-gray-700 dark:text-gray-200 bg-gradient-to-r from-purple-50/0 to-pink-50/0 dark:from-cyan-900/0 dark:to-purple-900/0 hover:from-purple-50/50 hover:to-pink-50/50 dark:hover:from-cyan-900/30 dark:hover:to-purple-900/30 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-cyan-400"
                  style={{
                    animation: isMobileMenuOpen ? `fadeInUp 0.4s ${0.1 + index * 0.07}s both` : 'none',
                  }}
                >
                  <span className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 dark:from-cyan-400 dark:to-purple-400 shadow-md group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></span>
                  <span className="group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;