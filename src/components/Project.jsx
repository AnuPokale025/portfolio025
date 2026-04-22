import { motion } from "framer-motion";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

export default function Project() {
  const projects = [
    {
      name: "I Am Shop E-com",
      description:
        "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Stripe"],
      image: img1,
      github: "https://github.com/AnuPokale025/I_Am_Shop-E_com-.git",
      live: "https://i-am-shop-e-com.vercel.app",
    },
    // {
    //   name: "Task Manager App",
    //   description:
    //     "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    //   tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Tailwind CSS"],
    //   image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Task+Manager",
    //   github: "#",
    //   live: "#",
    // },
    // {
    //   name: "Social Media Dashboard",
    //   description:
    //     "An analytics dashboard for social media management with data visualization, scheduling posts, and performance tracking.",
    //   tech: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js", "JWT"],
    //   image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Social+Dashboard",
    //   github: "#",
    //   live: "#",
    // },
    // {
    //   name: "Blog Platform",
    //   description:
    //     "A modern blogging platform with rich text editor, comment system, user profiles, and SEO optimization.",
    //   tech: ["MongoDB", "Express.js", "React", "Node.js", "Markdown", "Cloudinary"],
    //   image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Blog+Platform",
    //   github: "#",
    //   live: "#",
    // },
    {
      name: "Patil's Properties",
      description:
        "A food delivery application clone with restaurant listings, menu browsing, cart management, and order tracking.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Google Maps API", "Redux"],
      image: img2,
      github: "https://github.com/AnuPokale025/Patil_Properties.git",
      live: "https://patil-properties.vercel.app",
    },
    {
      name: "Search Karo Website",
      description:
        "A job search and listing platform with advanced filtering, resume upload, and application tracking system.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "ElasticSearch", "AWS S3"],
      image: img3,
      github: "https://github.com/AnuPokale025/search_karo.git",
      live: "https://search-karo-phi.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-gray-900"
        >
          My Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Here are some of my recent MERN stack projects. Each project showcases different
          aspects of full-stack development.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-gray-700 hover:text-blue-600 font-medium text-sm flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.642.992.779-.221 1.618-.334 2.464-.339.846.005 1.685.118 2.464.339 1.635-1.314 2.634-.992 2.634-.992.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-700 hover:text-green-600 font-medium text-sm flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}