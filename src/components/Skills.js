import React from 'react';
import { Code, Database, Settings, Palette, Globe, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="h-8 w-8" />,
      skills: [
        { name: "C++", level: 85, color: "bg-blue-700" },
        { name: "Java", level: 90, color: "bg-red-500" },
        { name: "Spring Boot", level: 80, color: "bg-green-500" },
        { name: "MySQL", level: 80, color: "bg-blue-600" },
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-500" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="h-8 w-8" />,
      skills: [
        { name: "Postman", level: 85, color: "bg-orange-500" },
        { name: "Swagger", level: 80, color: "bg-green-400" },
        { name: "GitHub", level: 90, color: "bg-gray-800" },
        { name: "Google OAuth", level: 75, color: "bg-blue-400" },
        { name: "AI IDE", level: 70, color: "bg-purple-500" },
        { name: "AI Prompt Engineering", level: 70, color: "bg-pink-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I love working with to create amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl text-white mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group-hover:scale-105 transition-transform duration-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: "C++", icon: "💻" },
              { name: "Java", icon: "☕" },
              { name: "Spring Boot", icon: "🌱" },
              { name: "MySQL", icon: "🗃️" },
              { name: "HTML5", icon: "🌐" },
              { name: "CSS3", icon: "🎨" },
              { name: "JavaScript", icon: "✨" },
              { name: "Postman", icon: "📬" },
              { name: "Swagger", icon: "📝" },
              { name: "GitHub", icon: "🐙" },
              { name: "Google OAuth", icon: "🔑" },
              { name: "AI IDE", icon: "🤖" },
              { name: "AI Prompt Engineering", icon: "🧠" }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="flex flex-col items-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-teal-500 transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;