"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden "
    >
      <div className="flex flex-col lg:flex-row items-center justify-between  mx-auto gap-10 mt-30 md:mt-0 px-6 md:px-0 pb-6">
        <div className="flex flex-col max-w-xl space-y-6 text-center lg:text-left">
          <span className="text-sm md:text-base font-medium text-primary opacity-90 transform-none">
            {t("salutation")}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-100 transform-none">
            Emelda
            <span className="text-primary ml-3">FOMENA</span>
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-100 transform-none">
            {t("software_developer_ai_specialist")}
          </p>
          <p className="opacity-100 transform-none ">
            {t("I build modern apps with")} <strong>React</strong>,{" "}
            <strong>Next.js</strong> {t("and")} <strong>Python</strong>,{" "}
            {t("by_integrating_intelligent_solutions")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 relative z-10 opacity-100 transform-none">
            <div className="flex flex-row gap-4 items-center flex-wrap">
              <div className="flex flex-row items-center gap-4">
                <a href="#contact" aria-label="Go to contact section">
                  <button className="inline-flex  items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.4)] h-10 px-4 min-w-[120px] py-3 text-base">
                    {t("contact_me")}
                  </button>
                </a>
              </div>
              <div>
                <a href="#projects" aria-label="Go to projects section">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background h-10 px-4 min-w-[120px] py-3 text-base hover:bg-primary/70 hover:text-white">
                    {t("see_my_projects")}
                  </button>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 ml-0 lg:ml-4 mt-4 lg:mt-0">
              <a
                href="https://github.com/Migrice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
              <a
                href="https://www.linkedin.com/in/emelda-fomena-kuete-00644b247/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="mailto:efomenakuete@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors p-2"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl blur-[1px]"
            animate={{ rotate: [0, 5.43, -5, 5.43, 0] }} // rotation oscillante
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative bg-white border-[3px] border-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-gray-500">developer.js</div>
            </div>

            <div className="space-y-2 font-mono text-sm">
              <div className="text-gray-500">// Software Engineer</div>
              <div>
                <span className="text-pink-600">const</span>{" "}
                <span className="text-blue-600">developer</span>{" "}
                <span className="text-gray-500">=</span>{" "}
                <span className="text-orange-500">{`{`}</span>
              </div>

              <div className="pl-6">
                <span className="text-purple-600">name</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-green-600">'Emelda Fomena'</span>
                <span className="text-gray-500">,</span>
              </div>

              <div className="pl-6">
                <span className="text-purple-600">skills</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-orange-500">[</span>
                <span className="text-green-600">'Python'</span>
                <span className="text-gray-500">,</span>{" "}
                <span className="text-green-600">'Next JS'</span>
                <span className="text-gray-500">,</span>{" "}
                <span className="text-green-600">'Docker'</span>
                <span className="text-orange-500">]</span>
                <span className="text-gray-500">,</span>
              </div>

              <div className="pl-6">
                <span className="text-purple-600">focuses</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-orange-500">[</span>
                <span className="text-green-600">'Full-Stack'</span>
                <span className="text-gray-500">,</span>{" "}
                <span className="text-green-600">'AI'</span>
                <span className="text-orange-500">]</span>
                <span className="text-gray-500">,</span>
              </div>

              <div className="pl-6">
                <span className="text-purple-600">learning</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-green-600">'Always'</span>
              </div>

              <div>
                <span className="text-orange-500">{`}`}</span>
                <span className="text-gray-500">;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
