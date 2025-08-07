"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "Pixel-perfect interfaces, intuitive UX, and blazing-fast performance — tailored to your brand.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Deployment",
    desc: "We ship with confidence. From dev to prod, we deploy seamlessly using modern CI/CD workflows.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SEO Optimization",
    desc: "We craft with search in mind. Rank higher, load faster, and convert better with our SEO-first builds.",
    image:
      "https://developers.google.com/static/search/images/seo-starter-guide.png",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f9f9f9] to-[#ffffff] dark:from-[#0f0f0f] dark:to-[#1a1a1a] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Building Tomorrow’s Web,
          </span>{" "}
          Today.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-16"
        >
          From design to deployment, we’re the team behind robust, scalable, and discoverable digital experiences.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 * i, duration: 0.7 }}
              className="bg-white dark:bg-[#111] rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-800"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
