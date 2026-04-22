import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Who Am I?
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a passionate <strong className="text-white">MERN Stack Developer</strong> with
              over 3 years of experience building scalable, high-performance web applications.
              I specialize in creating full-stack solutions using MongoDB, Express.js, React, and
              Node.js.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My journey in web development started with a curiosity about how websites work,
              and it quickly turned into a career passion. I love solving complex problems and
              turning ideas into reality through clean, efficient code.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-blue-400">3+</h4>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-green-400">50+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-yellow-400">30+</h4>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-purple-400">15+</h4>
                <p className="text-gray-400">Technologies</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              What I Do
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-500 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Frontend Development
                  </h4>
                  <p className="text-gray-400">
                    Building responsive and interactive user interfaces with React.js,
                    Redux, and modern CSS frameworks like Tailwind CSS.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Backend Development
                  </h4>
                  <p className="text-gray-400">
                    Creating robust server-side applications with Node.js and Express.js,
                    designing RESTful APIs, and implementing authentication systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Database Management
                  </h4>
                  <p className="text-gray-400">
                    Designing and optimizing MongoDB databases, implementing efficient
                    data models, and ensuring data integrity and security.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-500 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Full Stack Integration
                  </h4>
                  <p className="text-gray-400">
                    Seamlessly connecting frontend and backend systems, implementing
                    real-time features, and ensuring optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}