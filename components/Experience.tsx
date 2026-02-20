'use client';

import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

export default function Experience() {
  const responsibilities = [
    'Built REST APIs using Node.js & Express',
    'Implemented real-time chat using Socket.io',
    'Optimized MongoDB queries and schema',
    'Used Redis & Node-Cache for performance',
    'Managed CI/CD pipelines with Jenkins',
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <motion.div
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FiBriefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">Full Stack Developer</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                Hyperlink Infosystem
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Jan 2024 – Present</p>
            </div>
          </div>

          <div className="space-y-3">
            {responsibilities.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                <p className="text-gray-700 dark:text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
