'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'News App',
      desc: 'Dynamic news management system with admin panel for content management. Optimized queries for scalability with category & tag-based architecture.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      title: 'Voice Chat App',
      desc: 'Live voice chat system with real-time communication. Debugged SDK-level connectivity issues and maintained production stability.',
      tech: ['Node.js', 'Agora SDK', 'Socket.io'],
    },
    {
      title: 'Dating & Matrimony App',
      desc: 'Full-featured dating platform with voice & video calling using CometChat and Instagram profile linking integration.',
      tech: ['Angular', 'Node.js', 'MongoDB', 'CometChat'],
    },
    {
      title: 'Wardrobe System',
      desc: 'Social wardrobe management with post creation, follow/unfollow system, and scalable relational models.',
      tech: ['Node.js', 'PostgreSQL', 'Sequelize'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {[
              'Optimized APIs using Redis caching',
              'Built real-time chat systems',
              'Improved DB performance for high data volume',
              'Production issue debugging & stability improvements',
            ].map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
