import React, { useMemo, useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import "./skillsAnimation.css";

interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "Design" | "Tools";
}

interface ColorConfig {
  primary: string;
  secondary: string;
  accent: string;
}

interface SkillsDisplayProps {
  skills?: Skill[];
  title?: string;
  description?: string;
}

const SkillsDisplay = ({
  skills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Express", level: 75, category: "Backend" },
    { name: "MongoDB", level: 70, category: "Backend" },
    { name: "Figma", level: 85, category: "Design" },
    { name: "Adobe XD", level: 75, category: "Design" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Docker", level: 65, category: "Tools" },
    { name: "AWS", level: 60, category: "Tools" },
  ],
  title = "Keahlian Teknis",
  description = "Berikut adalah daftar keahlian teknis yang saya kuasai dalam pengembangan aplikasi dan desain.",
}: SkillsDisplayProps) => {
  const categories = [...new Set(skills.map((skill) => skill.category))]; 
  
  // Color configurations for each category with enhanced color palette
  const categoryColors = useMemo(() => ({
    Frontend: { primary: "#4f46e5", secondary: "#8b5cf6", accent: "#3b82f6", gradient: ["#4338ca", "#6366f1", "#818cf8", "#4f46e5"] },
    Backend: { primary: "#10b981", secondary: "#059669", accent: "#34d399", gradient: ["#047857", "#10b981", "#34d399", "#059669"] },
    Design: { primary: "#f43f5e", secondary: "#e11d48", accent: "#fb7185", gradient: ["#be123c", "#f43f5e", "#fb7185", "#e11d48"] },
    Tools: { primary: "#f59e0b", secondary: "#d97706", accent: "#fbbf24", gradient: ["#b45309", "#f59e0b", "#fbbf24", "#d97706"] },
  }), []);
  
  // Generate random particles for background animation with enhanced visual effects
  const generateParticles = (count: number, category: string, level: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (level / 20) + 1, // Size based on skill level
      speed: Math.random() * 3 + 2, // Random speed for more natural movement
      delay: Math.random() * 2, // Random delay for staggered animation
      color: categoryColors[category].gradient[Math.floor(Math.random() * 4)],
      opacity: 0.5 + Math.random() * 0.5, // Random opacity for depth effect
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-[#1e1e1e] text-white p-6 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-blue-400">{title}</h2>
        <p className="text-gray-400 mb-8">{description}</p>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category} className="mb-6">
              <h3 className="text-xl font-medium mb-4 text-yellow-400 border-b border-gray-700 pb-2">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative bg-[#252526] p-4 rounded-md shadow-md overflow-hidden skill-card"
                      whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
                    >
                      {/* Animated background based on skill level with enhanced effects */}
                      <motion.div 
                        className="absolute inset-0 z-0 overflow-hidden gradient-animation"
                        initial={{ opacity: 0.2 }}
                        animate={{ 
                          opacity: [0.2, 0.3, 0.2],
                          borderRadius: [
                            "40% 60% 60% 40% / 60% 30% 70% 40%",
                            "30% 60% 70% 40% / 50% 60% 30% 60%",
                            "40% 60% 60% 40% / 60% 30% 70% 40%"
                          ]
                        }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity, 
                          repeatType: "loop",
                          ease: "easeInOut" 
                        }}
                        style={{ 
                          width: `${skill.level}%`,
                          right: 0,
                          left: 'auto',
                          background: `linear-gradient(45deg, ${categoryColors[category].gradient.join(', ')})`
                        }}
                      >
                        {/* Animated particles */}
                        <AnimatePresence>
                          {generateParticles(Math.floor(skill.level / 10), category, skill.level).map((particle) => (
                            <motion.div
                              key={particle.id}
                              className="absolute rounded-full particle"
                              initial={{ 
                                x: `${particle.x}%`, 
                                y: `${particle.y}%`, 
                                opacity: 0 
                              }}
                              animate={{ 
                                x: [`${particle.x}%`, `${(particle.x + 20) % 100}%`],
                                y: [`${particle.y}%`, `${(particle.y + 20) % 100}%`],
                                opacity: [0.3, 0.7, 0.3]
                              }}
                              transition={{ 
                                duration: particle.speed,
                                delay: particle.delay,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                              }}
                              style={{ 
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                backgroundColor: particle.color,
                                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                                opacity: particle.opacity
                              }}
                            />
                          ))}
                        </AnimatePresence>
                      </motion.div>
                      <div className="flex justify-between items-center mb-2 relative z-10">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-gray-700 relative z-10"
                      />
                      {/* Animated progress indicator */}
                      <motion.div 
                        className="h-2 absolute bottom-4 left-4 right-4 rounded-full overflow-hidden z-5 opacity-30 gradient-animation"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        style={{
                          background: `linear-gradient(to right, ${categoryColors[category].gradient.join(', ')})`
                        }}
                      />
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[#252526] rounded-lg border border-gray-700">
          <h3 className="text-xl font-medium mb-4 text-green-400">
            Pengembangan Berkelanjutan
          </h3>
          <p className="text-gray-300">
            Saya selalu berusaha untuk meningkatkan keahlian yang sudah ada dan
            mempelajari teknologi baru. Saat ini sedang fokus memperdalam
            pengetahuan tentang:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
            <li>Arsitektur Microservices</li>
            <li>Pengembangan Aplikasi Mobile dengan React Native</li>
            <li>Cloud Computing dan DevOps</li>
            <li>UI/UX Design Principles</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsDisplay;
