"use client";

import { motion } from "framer-motion";
import { Code2, Download, FileText, Rocket, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ProfileImage from "./ProfileImage";

const About = () => {
  const t = useTranslations("About");

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: t("clean_code"),
      description: t("clean_code_desc"),
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t("modern_design"),
      description: t("modern_design_desc"),
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: t("performance"),
      description: t("performance_desc"),
    },
  ];

  return (
    <section className="relative py-14" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="relative inline-block text-2xl md:text-3xl lg:text-4xl font-bold opacity-90 mb-10">
            {t("about_me")}
            <span className="absolute left-0 -bottom-2 w-16 h-[5px] bg-primary"></span>
          </h2>{" "}
        </motion.div>

        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-8 space-y-6">
            <h3 className="flex flex-row items-center gap-2 text-sm font-semibold mb-2">
              <FileText size={22} color="#2662d9" />
              <span>Bio</span>
            </h3>

            <p className="opacity-80 ">{t("about_description_1")}</p>
            <p className="opacity-80">{t("about_description_2")}</p>

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg  shadow-sm relative overflow-hidden transition-all duration-300 h-full border-[1px] border-white/10 backdrop-blur-sm bg-card/50 "
                >
                  <div className="relative z-8">
                    <div className="p-6 space-y-4">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                      <h4 className="font-medium ">{feature.title}</h4>
                      <p className="opacity-80 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-5">
            <ProfileImage />
            <div className="text-center lg:text-left opacity-100 transform-none">
              <h3 className="text-2xl font-bold">Emelda Fomena</h3>
              <p className="mt-1 opacity-80 text-sm">
                {t("software_developer_ai_specialist")}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start md:items-start">
              <div className="border border-primary/10 px-3 py-1 focus:outline-none focus:ring-2  focus:ring-offset-2 bg-primary/10 rounded-full text-sm opacity-70">
                Python
              </div>
              <div className="border border-primary/10 px-3 py-1 focus:outline-none focus:ring-2  focus:ring-offset-2 bg-primary/10 rounded-full text-sm opacity-70">
                Next JS
              </div>
              <div className="border border-primary/10 px-3 py-1 focus:outline-none focus:ring-2  focus:ring-offset-2 bg-primary/10 rounded-full text-sm opacity-70">
                Django
              </div>
              <div className="border border-primary/10 px-3 py-1 focus:outline-none focus:ring-2  focus:ring-offset-2 bg-primary/10 rounded-full text-sm opacity-70">
                FastApi
              </div>
              <div className="border border-primary/10 px-3 py-1 focus:outline-none focus:ring-2  focus:ring-offset-2 bg-primary/10 rounded-full text-sm opacity-70">
                React Native
              </div>
            </div>

            <div className="flex flex-row items-center">
              <Link
                href="https://drive.google.com/file/d/1UK5AFN_cqMhzX9nhRCu4PtdUqt_KZwUb/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-white dark:text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(38,98,217,0.3)] hover:shadow-[0_0_25px_rgba(38,98,217,0.4)] h-9 rounded-md px-4"
              >
                <Download size={18} />
                <span className="ml-1">{t("download_cv")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
