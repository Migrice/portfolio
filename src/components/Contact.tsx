"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Contact = () => {
  const t = useTranslations("Contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("res", res);

    if (!res.ok) {
      setIsLoading(false);
      alert(t("error_sending_message"));
      return;
    }

    setIsSubmitted(true);
    setIsLoading(false);

    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "efomenakuete@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("phone"),
      value: "+237 6 98 11 12 41",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("location"),
      value: "Yaoundé, Cameroun",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Migrice",
      color: "hover:bg-gray-900",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/emelda-fomena-kuete-00644b247/",
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <section className="relative py-14" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="relative inline-block text-2xl md:text-3xl lg:text-4xl font-bold opacity-90 mb-10">
            {t("contact_me")}
            <span className="absolute left-0 -bottom-4 w-16 h-[5px] bg-primary"></span>
          </h2>

          <p className="max-w-2xl opacity-80">{t("contact_description")}</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 mt-10">
          {/* Informations de contact */}
          <div className="md:col-span-2 space-y-2">
            <h2 className="font-bold text-xl mb-4">{t("contact-info")}</h2>
            <p className="opacity-80 max-w-2xl mb-4">
              {t("contact-info-desc")}
            </p>
            {contactInfo.map((info) => (
              <a key={info.title} className="block  p-2">
                <div className="flex items-start gap-2">
                  <div
                    className={`w-10 h-10 bg-primary/10  rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold  mb-1">{info.title}</h4>
                    <p className="opacity-80 text-sm">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            <div className=" p-2 ">
              <h4 className="font-bold text-gray-900 mb-4">{t("follow_me")}</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:text-white transition-colors ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className=" p-8 rounded-3xl  space-y-6 bg-white dark:bg-[#020817] dark:border dark:border-primary/20"
            >
              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t("message_sent")}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {t("message_sent_desc")}
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm opacity-80 font-medium mb-2">
                        {t("name")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-primary/20 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm opacity-80  font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300  dark:border-primary/20 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm opacity-80  font-medium mb-2">
                      {t("subject")}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-primary/20  rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm opacity-80  font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 text-sm opacity-80  py-3 border border-gray-300 dark:border-primary/20 rounded-xl focus:ring-2 focus:ring-gray-300 focus:border-transparent outline-none transition-all resize-none"
                      placeholder={t("message_placeholder")}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-4 bg-primary text-white rounded-xl font-medium shadow-lg shadow-gray-500/30 hover:shadow-xl hover:shadow-gray-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {t("sending")}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t("send_message")}
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
