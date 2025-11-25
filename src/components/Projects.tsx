"use client";

import { motion } from "framer-motion";
import { Brain, ExternalLink, Globe, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const t = useTranslations("Projects");
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);

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

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section className="relative py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="relative inline-block text-2xl md:text-3xl lg:text-4xl font-bold opacity-90 mb-10">
            {t("projects")}
            <span className="absolute left-0 -bottom-4 w-16 h-[5px] bg-primary"></span>
          </h2>

          <p className="max-w-2xl opacity-80">{t("projects_description")}</p>
        </motion.div>
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-3 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "text-white bg-primary shadow-lg"
                  : " hover:bg-gray-50 shadow-md"
              }`}
            >
              {activeTab === tab.id && (
                <div className="absolute inset-0 font-bold bg-primary rounded-xl" />
              )}
              <span className="relative z-10 flex items-center gap-2 text-sm">
                {tab.icon}
                {tab.label}
              </span>
            </button>
          ))}
        </div>
        <div
          key={activeTab}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative  rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/20"
            >
              <div className="relative  overflow-hidden rounded-bl-4xl ">
                <div className=" relative overflow-hidden rounded-t-lg h-48 rounded-bl-4xl">
                  <div className="overflow-hidden">
                    <span className="w-full h-full ">
                      <Image
                        src={project.image}
                        width={600}
                        height={600}
                        alt={project.title}
                        className="transition-all duration-500 scale-100 blur-0 w-full h-48 object-cover"
                      />
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-20">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="bg-background text-foreground p-2 rounded-full hover:bg-card transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository for Py Scrap - Amazon Web Scraper"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-github"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 flex flex-col  ">
                <h3 className="text-xl font-bold   group-hover:text-blue-600 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className=" text-sm leading-relaxed  line-clamp-2 opacity-80">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, key) => (
                    <span
                      key={key}
                      className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1   text-primary opacity-80 text-xs font-medium rounded-lg">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex flex-row gap-2">
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Py Scrap - Amazon Web Scraper on GitHub"
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border  border-gray-200 bg-primary/10  hover:bg-primary/20 hover:font-bold h-9 rounded-md px-3 flex gap-2 items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </div>
                  {project.demo && (
                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Py Scrap - Amazon Web Scraper on GitHub"
                        className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-gray-200 bg-primary/10  hover:bg-primary/20 hover:font-bold h-9 rounded-md px-3 flex gap-2 items-center"
                      >
                        <ExternalLink className="w-5 h-5" />

                        <span>Demo</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {displayedProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t("no_projects") || "Aucun projet dans cette catégorie"}
            </h3>
            <p className="text-gray-600">
              {t("no_projects_desc") ||
                "De nouveaux projets arrivent bientôt !"}
            </p>
          </div>
        )}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-gray-300 bg-background hover:bg-accent hover:bg-primary/10  h-10 px-4 py-2 group"
          >
            <span> {showAll ? t("show-less") : t("show-more")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-code ml-2 group-hover:translate-x-1 transition-transform"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </button>
        </div>{" "}
      </div>
    </section>
  );
};

export default Projects;
