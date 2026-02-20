'use client';

import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
            © 2024 Aayush Shah. Built with Next.js & Tailwind CSS
          </p>

          <div className="flex gap-6">
            <a
              href="mailto:aayushshah092@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/aayushshah2506"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center justify-center gap-1">
            Made with <FiHeart className="text-red-500" /> by Aayush Shah
          </p>
        </div>
      </div>
    </footer>
  );
}
