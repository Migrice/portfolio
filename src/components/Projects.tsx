"use client";

import { motion } from "framer-motion";
import { Brain, ExternalLink, Github, Globe, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export const Projects = () => {
  const t = useTranslations("Projects");
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Beloh",
      description: t("project_1_desc"),
      image: "/images/beloh.png",
      tags: [
        "Next JS",
        "Primereact",
        "Tailwind css",
        "Python",
        "Django",
        "Django Rest Framework",
      ],
      github: "https://github.com",
      demo: "https://www.beloh.tech/",
      category: "web",
      featured: true,
    },

    {
      id: 2,
      title: "LogExplorer",
      description: t("project_2_desc"),
      image: "/images/logExplorer.png",
      tags: [
        "GraphLQL",
        "MongoDB",
        "ElasticSearch",
        "RabbitMQ",
        "FastApi",
        "Jenkins",
      ],
      github: "https://github.com",
      demo: "https://www.beloh.tech/",
      category: "web",
      featured: true,
    },
    {
      id: 3,
      title: "SenWiseTool",
      description: t("project_3_desc"),
      image: "/images/senwisetool.png",
      tags: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
      github: "https://github.com",
      demo: "https://senwisetool.com/",
      category: "web",
      featured: false,
    },
    {
      id: 4,
      title: "Analyse de sentiment",
      description: t("project_4_desc"),
      image: "/images/sa.jpg",
      tags: ["Python", "Pytorch", "React", "FastAPI"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "ai",
      featured: true,
    },
    {
      id: 5,
      title: "SmartSpend",
      description: t("project_5_desc"),
      image: "/images/smartspend.jpg",
      tags: ["React Native", "Expo", "Expo Sqlite"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "mobile",
      featured: false,
    },

    {
      id: 8,
      title: "Nzhinufarm",
      description: t("project_8_desc"),
      image: "/images/nzhinufarm.png",
      tags: ["Python", "FastApi", "NextJs", "Tailwind"],
      github: "https://github.com",
      demo: "#",
      category: "web",
      featured: false,
    },
  ];

  const tabs = [
    { id: "all", label: t("all"), icon: null },
    {
      id: "web",
      label: t("web"),
      icon: <Globe className="w-4 h-4" />,
    },
    {
      id: "mobile",
      label: t("mobile"),
      icon: <Smartphone className="w-4 h-4" />,
    },
    { id: "ai", label: t("ai"), icon: <Brain className="w-4 h-4" /> },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden"
    >
      {/* Décorations */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("my_projects")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("projects_description")}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "text-white shadow-lg"
                  : "text-gray-700 bg-white hover:bg-gray-50 shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab.icon}
                {tab.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grille de projets avec animation */}
        <motion.div
          key={activeTab}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -20 }}
          // transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              // initial={{ opacity: 0, scale: 0.9 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ delay: index * 0.1, duration: 0.5 }}
              // whileHover={{ y: -8 }}
              layout
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-bl-4xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600} // mets une valeur cohérente (peu importe, Next optimise)
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Liens au survol */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500  ">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5 text-gray-900" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6  ">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t("no_projects") || "Aucun projet dans cette catégorie"}
            </h3>
            <p className="text-gray-600">
              {t("no_projects_desc") ||
                "De nouveaux projets arrivent bientôt !"}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
