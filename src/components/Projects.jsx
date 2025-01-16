import React from "react";
import { motion } from "framer-motion";
import Famefing from "../assets/famefing.jpg";
import pia from "../assets/pia.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Famefing.com",
      description:
        "I have created the company's website Famefing.com where I interned for 3 months. I made this using React.js. It is a single-page and fully responsive website.",
      link: "https://Hamid2312.github.io/myfamefing/",
      image: Famefing,
    },
    {
      title: "Piac.com.pk",
      description:
        "A professional website I created as a dummy project. Each component has been crafted using professional methods.",
      link: "https://mypia-hamid2312s-projects.vercel.app/",
      image: pia,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-[#000000] py-16">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-[#00FBF4] text-4xl sm:text-5xl font-bold mb-4 hover:text-white hover:shadow-lg hover:shadow-[#00FBF4] transition duration-300"
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white font-light mb-8"
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Here are a few professional projects I've worked on. Each project
            showcases my skills in web development.
          </motion.p>
        </motion.div>

        {/* Projects Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#00000080] p-6 rounded-xl shadow-xl border-4 border-[#00FBF4] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              variants={cardVariants}
              whileInView={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-md mb-4">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                />
              </div>
              {/* Content */}
              <motion.h3
                className="text-2xl text-[#00FBF4] font-bold mb-4 ml-2 hover:underline"
                whileInView={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                viewport={{ once: true }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </motion.h3>
              <p className="text-white font-light mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00FBF4] font-semibold hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
