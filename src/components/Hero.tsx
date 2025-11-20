"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden"
    >
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2  px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            {t("available_for_work")}
          </motion.div>

          <motion.h1
            className="text-xl md:text-6xl text-gray-900 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t("salutation")}
            <br />
            <span className="bg-clip-text font-bold ">Emelda Kuete</span>
          </motion.h1>

          <motion.h2
            className="mt-6 text-2xl md:text-3xl font-semibold text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("software_developer_ai_specialist")}
          </motion.h2>

          <motion.p
            className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t("I build modern apps with")} <strong>React</strong>,{" "}
            <strong>Next.js</strong> {t("and")} <strong>Python</strong>,{" "}
            {t("by_integrating_intelligent_solutions")}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#projects"
                className="px-8 py-4 bg-black text-white rounded-xl font-medium shadow-lg shadow-gray-500/30 hover:shadow-xl hover:shadow-gray-500/40 transition-all"
              >
                {t("see_my_projects")}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://drive.google.com/file/d/1UK5AFN_cqMhzX9nhRCu4PtdUqt_KZwUb/view?usp=sharing"
                className="px-8 py-4 border-2 border-gray-300 rounded-xl font-medium hover:bg-white hover:border-gray-400 transition-all backdrop-blur-sm "
                target="_blank"
              >
                {t("download_cv")}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="relative">
            {/* Cercle décoratif animé en arrière-plan */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <motion.div
              className="relative"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <div className="relative w-72 md:w-96 h-72 md:h-96">
                <Image
                  src="/images/hero.jpg"
                  alt="Laura Dev Hero"
                  fill // 🔥 L’image prend toute la div (w-72/h-72)
                  className="object-contain rounded-3xl shadow-2xl border-4 border-white"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-3xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
