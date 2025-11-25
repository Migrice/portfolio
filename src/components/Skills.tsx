"use client";
import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Database,
  Layout,
  LucideIcon,
  Server,
  Smartphone,
  Workflow,
  Wrench,
} from "lucide-react";
import { useTranslations } from "next-intl";

type SkillByCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

const Skills = () => {
  const t = useTranslations("Skills");

  const data: SkillByCategory[] = [
    {
      name: t("Programming Languages"),
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "C", "HTML"],
    },
    {
      name: t("Frontend Tools"),
      icon: Layout,
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Next-intl",
      ],
    },
    {
      name: t("Backend"),
      icon: Server,
      skills: [
        "Django",
        "Django Rest Framework",
        "FastAPI",
        "GraphQL",
        "RabbitMQ",
      ],
    },
    {
      name: t("Mobile"),
      icon: Smartphone,
      skills: ["Expo", "React Native", "NativeWind"],
    },
    {
      name: t("Databases"),
      icon: Database,
      skills: [
        "PostgreSQL",
        "SQLite",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "Railway",
        "Supabase",
      ],
    },
    {
      name: t("Artificial Intelligence"),
      icon: Brain,
      skills: [
        "Pytorch",
        "Numpy",
        "Pandas",
        "NLP",
        "LangChain",
        "Rasa",
        "Machine Learning",
      ],
    },
    {
      name: t("CI/CD"),
      icon: Workflow,
      skills: ["Docker", "Docker Compose", "Jenkins"],
    },
    {
      name: t("Tools"),
      icon: Wrench,
      skills: ["Git", "Linux", "VS Code"],
    },
  ];
  return (
    <section className="relative py-14" id="skills">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="relative inline-block text-2xl md:text-3xl lg:text-4xl font-bold opacity-90 mb-10">
            {t("my_skills")}
            <span className="absolute left-0 -bottom-4 w-16 h-[5px] bg-primary"></span>
          </h2>

          <p className="max-w-2xl opacity-80">{t("skills_description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {data.map((cat, key) => (
            <div
              key={key}
              className="group relative  rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-[#020817] dark:border dark:border-primary/20"
            >
              <div className="relative  overflow-hidden rounded-bl-4xl ">
                <div className="p-4 space-y-4 flex flex-col  ">
                  <div className="flex flex-row gap-2 items-center ">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <cat.icon className="w-6 h-6 text-primary" />
                    </div>

                    <h2 className="font-semibold">{cat.name}</h2>
                  </div>

                  <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start md:items-start">
                    {cat.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="border border-primary/10 px-3 py-1 focus:outline-none focus:ring-2  focus:ring-offset-2 bg-primary/10 rounded-full text-sm opacity-70"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
