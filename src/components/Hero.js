import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "IT Diploma Graduate | B.Tech Student | Aspiring Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced Background with Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1657972170499-3376d9eb8f65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzUyNzY1MzU0fDA&ixlib=rb-4.1.0&q=85')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/90 to-purple-100/90 dark:from-black/95 dark:via-purple-900/95 dark:to-gray-900/95 transition-all duration-700"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #14b8a6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="particle particle-1 top-1/4 left-1/4 animate-float"></div>
        <div className="particle particle-2 top-3/4 right-1/4 animate-float animation-delay-2000"></div>
        <div className="particle particle-3 top-1/2 right-1/3 animate-float animation-delay-4000"></div>
        <div className="particle particle-4 bottom-1/4 left-1/3 animate-float animation-delay-6000"></div>
        <div className="particle particle-5 top-1/3 left-2/3 animate-float animation-delay-3000"></div>
        
        {/* Code-like floating elements */}
        <div className="absolute top-1/5 right-1/5 text-teal-400/30 animate-float animation-delay-1000">
          <Code className="w-8 h-8" />
        </div>
        <div className="absolute bottom-1/5 left-1/5 text-cyan-400/30 animate-float animation-delay-3000">
          <Zap className="w-6 h-6" />
        </div>
        <div className="absolute top-2/5 left-1/6 text-blue-400/30 animate-float animation-delay-5000">
          <Sparkles className="w-7 h-7" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Enhanced Welcome Text - Removed to fix overlap */}

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight px-4">
            <span className="block text-gray-900 dark:text-white mb-2 animate-slide-in-left text-center transition-colors duration-700">
              Hi, I'm
            </span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-slide-in-right text-shadow-lg text-center">
              Your Name
            </span>
          </h1>
          
          {/* Typing Animation */}
          <div className="h-12 sm:h-16 md:h-20 mb-6 flex items-center justify-center px-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-purple-700 dark:text-cyan-300 text-center transition-colors duration-700">
              {text}
              {isTyping && <span className="animate-blink text-teal-400">|</span>}
            </h2>
          </div>
          
          {/* Description */}
          <div className="mb-10 max-w-4xl mx-auto px-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-300 leading-relaxed animate-fade-in mb-4 text-center transition-colors duration-700">
              Hi, I'm a passionate IT student who completed my Diploma in IT in 2025 and currently pursuing B.Tech. I love coding, problem-solving, and building innovative web applications. My journey from Diploma to B.Tech has been filled with continuous learning, hands-on projects, and a growing passion for technology.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-purple-600 dark:text-purple-300 animate-fade-in text-center transition-colors duration-700" style={{ animationDelay: '0.3s' }}>
              C++, Java, Spring Boot, MySQL, HTML, CSS, JavaScript, Postman, Swagger, GitHub, Google OAuth, AI IDE, AI Prompt Engineering
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 px-4">
            <Button 
              onClick={scrollToNext}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 dark:from-cyan-500 dark:to-purple-500 dark:hover:from-cyan-400 dark:hover:to-purple-400 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-0"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="group relative overflow-hidden bg-transparent border-2 border-purple-500/50 dark:border-cyan-400/50 text-purple-600 dark:text-cyan-400 hover:text-white dark:hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-purple-500 dark:hover:bg-cyan-400"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-purple-500 dark:bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-12 max-w-2xl mx-auto px-4">
            {[
              { number: "2025", label: "IT Diploma Completed" },
              { number: "2nd Year", label: "B.Tech Student" },
              { number: "100%", label: "Dedication to Learning" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-white/90 to-purple-100/90 dark:from-gray-800/80 dark:to-purple-900/80 border border-purple-200/50 dark:border-purple-500/30 backdrop-blur-sm hover:border-purple-400/70 dark:hover:border-cyan-400/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-cyan-400 mb-2 group-hover:text-pink-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-purple-500 dark:text-purple-300 group-hover:text-purple-700 dark:group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-1 h-16 bg-gradient-to-b from-teal-400/50 via-cyan-400/50 to-transparent rounded-full mb-2"></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;