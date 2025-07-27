import React from 'react';
import { Code, Coffee, Heart, Zap, Users, Trophy, Award, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "2025", label: "IT Diploma Completed", icon: <Trophy className="h-6 w-6" /> },
    { number: "2nd Year", label: "B.Tech Student", icon: <Code className="h-6 w-6" /> },
    { number: "∞", label: "Passion for Learning", icon: <Coffee className="h-6 w-6" /> },
    { number: "100%", label: "Dedication", icon: <Heart className="h-6 w-6" /> }
  ];

  const highlights = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Curious & Creative",
      description: "Driven by curiosity and a love for building real-world solutions."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative",
      description: "Enjoys teamwork, open communication, and learning from others."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passionate Coder",
      description: "Believes in writing clean, maintainable code that solves real problems."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Growth Mindset",
      description: "Committed to learning and improving every day."
    }
  ];

  const milestones = [
    { year: "2022", event: "Started IT Diploma journey" },
    { year: "2025", event: "Completed IT Diploma successfully" },
    { year: "2025", event: "Started B.Tech (2nd year currently)" },
    { year: "Present", event: "Building projects & gaining experience" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in-up">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Photo & Info */}
          <div className="relative animate-slide-in-left">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-2xl opacity-20 animate-pulse animation-delay-2000"></div>
              
              {/* Photo container */}
              <div className="relative bg-gradient-to-br from-teal-500 to-cyan-500 p-1 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden">
                  <div className="relative">
                    <img 
                      src="https://ui-avatars.com/api/?name=Student+Developer&background=14b8a6&color=fff&size=256"
                      alt="Your Name"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Your Name
                    </h3>
                    <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">
                      IT Graduate | B.Tech Student | Developer
                    </p>
                    <div className="flex justify-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">2025</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Diploma</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">2nd Yr</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">B.Tech</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 hover:border-teal-400/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-teal-500 mb-2 flex justify-center animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Hello! I'm a passionate student
              </h3>
              <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  I'm a passionate IT student who completed my Diploma in IT in 2025 and currently pursuing my B.Tech (2nd year). My journey has been driven by curiosity, continuous learning, and a strong desire to build innovative web applications.
                </p>
                <p className="leading-relaxed">
                  As a student, I believe in hands-on learning and practical application of knowledge. I strive to write clean, efficient code while constantly exploring new technologies and frameworks that can help me grow as a developer.
                </p>
                <p className="leading-relaxed">
                  When I'm not studying or coding, I'm exploring the latest tech trends, working on personal projects, or contributing to open-source communities to gain real-world experience.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                What I Bring to the Table
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 hover:border-teal-400/50"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="text-teal-500 mt-1 animate-pulse">
                      {highlight.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-white mb-1">
                        {highlight.title}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey Timeline */}
            <div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                My Journey
              </h4>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl border-l-4 border-teal-400 transform hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-teal-500">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-teal-600 dark:text-teal-400">
                        {milestone.year}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Philosophy */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-500 shadow-xl">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <Code className="h-6 w-6 mr-2" />
                My Development Philosophy
              </h4>
              <p className="text-white/90 leading-relaxed">
                "Clean code is not just about how it looks, but how it works and grows." I strive to write code that is elegant, efficient, and easy to understand, always aiming to make a real impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;