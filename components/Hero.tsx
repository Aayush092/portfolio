"use client";

import { motion } from "framer-motion";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Hero() {
    const titles = ["Full Stack Developer", "MEAN Stack Developer", "MERN Stack Developer"];
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (displayText.length < currentTitle.length) {
                        setDisplayText(currentTitle.slice(0, displayText.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    if (displayText.length > 0) {
                        setDisplayText(displayText.slice(0, -1));
                    } else {
                        setIsDeleting(false);
                        setTitleIndex((prev) => (prev + 1) % titles.length);
                    }
                }
            },
            isDeleting ? 50 : 100,
        );

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex]);

    return (
        <section className="min-h-screen flex items-center justify-center pt-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Aayush Shah</span>
                    </motion.h1>

                    <motion.h2
                        className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-6 h-12 md:h-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {displayText}
                        <span className="animate-pulse">|</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Building scalable web apps with modern technologies
                    </motion.p>

                    <motion.p className="text-gray-500 dark:text-gray-500 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                        📍 Ahmedabad, India
                    </motion.p>

                    <motion.div className="flex flex-wrap justify-center gap-4 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                        <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                            Contact Me
                        </a>
                        <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2">
                            <FiDownload /> Resume
                        </button>
                    </motion.div>

                    <motion.div className="flex justify-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                        <a href="mailto:aayushshah092@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            <FiMail className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/aayushshah2506"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        >
                            <FiLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                            <FiGithub className="w-6 h-6" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
