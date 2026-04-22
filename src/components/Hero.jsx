import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-center"
      >
        Hi, I'm Aniket
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-xl md:text-2xl text-blue-400 text-center"
      >
        MERN Stack Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-2 text-gray-300 text-center max-w-2xl"
      >
        Building scalable web applications with MongoDB, Express.js, React, and Node.js
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-center font-medium"
        >
          View Projects
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg text-center font-medium transition-colors"
        >
          Get In Touch
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
      >
        <span className="bg-gray-800 px-4 py-2 rounded-full">MongoDB</span>
        <span className="bg-gray-800 px-4 py-2 rounded-full">Express.js</span>
        <span className="bg-gray-800 px-4 py-2 rounded-full">React</span>
        <span className="bg-gray-800 px-4 py-2 rounded-full">Node.js</span>
        <span className="bg-gray-800 px-4 py-2 rounded-full">JavaScript</span>
        <span className="bg-gray-800 px-4 py-2 rounded-full">REST APIs</span>
      </motion.div>

    </section>
  );
}