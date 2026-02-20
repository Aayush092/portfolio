'use client';

import { motion } from 'framer-motion';
import { FiZap, FiActivity, FiLayers } from 'react-icons/fi';

export default function About() {
  const highlights = [
    { icon: <FiZap />, title: 'Backend Performance', desc: 'Optimization using Redis & caching' },
    { icon: <FiActivity />, title: 'Real-time Systems', desc: 'Socket.io & live communication' },
    { icon: <FiLayers />, title: 'Scalable Architecture', desc: 'MEAN stack & modern patterns' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Full Stack Developer with <span className="font-semibold text-blue-600 dark:text-blue-400">2+ years of experience</span> building scalable MEAN stack applications. Skilled in REST APIs, real-time systems, and performance optimization using Redis.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently expanding expertise in Next.js and modern frontend architecture to deliver exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 dark:text-blue-400 text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
