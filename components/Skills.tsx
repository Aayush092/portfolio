'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript'],
    },
    {
      title: 'Frontend',
      skills: ['Angular', 'Next.js', 'React'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'GitHub', 'GitLab', 'Jenkins', 'CI/CD', 'Postman'],
    },
    {
      title: 'Real-time & Integrations',
      skills: ['Socket.io', 'Agora SDK', 'CometChat', 'Third-party APIs'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
