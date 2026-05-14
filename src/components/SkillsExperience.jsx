import { motion } from "framer-motion";

export default function SkillsExperience() {
  const skills = {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5 & CSS3", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Redux", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "RESTful APIs", level: 92 },
      { name: "JWT Authentication", level: 85 },
      { name: "Mongoose", level: 87 },
    ],
    database: [
      { name: "MongoDB", level: 90 },
      { name: "MongoDB Atlas", level: 88 },
      { name: "Database Design", level: 85 },
      { name: "MySQL", level: 82 },
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
      { name: "npm/yarn", level: 90 },
      { name: "Vite", level: 85 },
    ],
  };

  const experiences = [
    {
      title: "Software Developer Trainee",
      company: "EEE Technologies Pvt. Ltd. Nagpur",
      period: "2026 - Present",
      description:
        "Leading development of scalable web applications using MongoDB, Express.js, React, and Node.js. Architecting RESTful APIs and implementing complex state management solutions.",
      highlights: [
        "Developed e-commerce platform with 10k+ users",
        "Implemented payment gateway integrations",
        "Built full-stack application",
        "Improved application performance by 40%",
        "Mentored junior developers",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Congnifyz Technologies Pvt. Ltd. Nagpur",
      period: "2025 - 2025",
      description:
        "Developed and Designed websites on Daily tasks.",
      highlights: [
       
        "Optimized database queries for better performance",
      ],
    },
    {
      title: "Full Stack Java Developer Intern",
      company: "S K Bit Software Solutions Pvt. Ltd. Pune",
      period: "2024 - 2025",
      description:
        "Started career building web applications with React and Java. Gained hands-on experience with MySQL .",
      highlights: [
       
        "Learned full stack Java development",
        "Contributed to open-source projects",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills & Experience
        </motion.h2>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-blue-400">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Frontend Skills */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl"
            >
              <h4 className="text-xl font-semibold mb-6 text-green-400">
                Frontend Development
              </h4>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl"
            >
              <h4 className="text-xl font-semibold mb-6 text-yellow-400">
                Backend Development
              </h4>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Database Skills */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl"
            >
              <h4 className="text-xl font-semibold mb-6 text-purple-400">
                Database
              </h4>
              <div className="space-y-4">
                {skills.database.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl"
            >
              <h4 className="text-xl font-semibold mb-6 text-red-400">
                Tools & Technologies
              </h4>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-red-500 to-red-700 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-blue-400">
            Work Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-xl border-l-4 border-blue-500"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {exp.title}
                    </h4>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0 bg-gray-800 px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
