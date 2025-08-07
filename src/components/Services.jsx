"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const services = [
  {
    title: "Web Development",
    description:
      "Pixel-perfect websites with scalable backend, custom-built for your brand and goals.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    badges: ["Frontend", "Backend", "Full Stack"],
  },
  {
    title: "App Development",
    description:
      "We craft cross-platform mobile apps that run smoothly on iOS and Android devices.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    badges: ["iOS", "Android", "Cross-Platform"],
  },
  {
    title: "UI / UX Design",
    description:
      "Intuitive and engaging designs that deliver seamless user experiences across platforms.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    badges: ["Wireframing", "Prototyping"],
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your visibility with technical SEO, content strategies, and performance enhancements.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    badges: ["Analytics", "Content Strategy"],
  },
  {
    title: "DevOps",
    description:
      "Accelerate deployment with automated CI/CD pipelines and cloud-native infrastructure.",
    image:
      "https://testgrid.io/blog/wp-content/uploads/2024/09/devops-testing.jpg",
    badges: ["CI/CD", "AWS", "Automation"],
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20 px-6">
       <div className="w-full flex justify-center mb-10">
        <div className="md:w-[70%] text-center">
          <h2 className="text-4xl font-bold text-green-600">Our Services</h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Mobile: stacked layout */}
        <div className="block md:hidden space-y-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} i={i} />
          ))}
        </div>

        {/* Desktop: Swiper carousel */}
        <div className="hidden md:block">
          <Swiper spaceBetween={30} slidesPerView={3}>
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <ServiceCard service={service} i={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

// Card Component
function ServiceCard({ service, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.2, duration: 0.7 }}
      className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer group bg-white dark:bg-gray-800"
    >
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-90 object-cover"
        loading="lazy"
      />

      {/* Badges */}
      <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-20">
        {service.badges.map((badge, idx) => (
          <span
            key={idx}
            className="bg-gray-100 bg-opacity-70 text-black text-xs font-semibold rounded-md px-3 py-1 select-none"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Gradient overlay */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-40
          bg-gradient-to-t
          from-black/80 via-black/30 to-transparent
          dark:from-black/60 dark:via-black/20 dark:to-transparent
          z-10
        "
      />

      {/* Text + Arrow */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
        <p className="text-white font-semibold text-sm sm:text-base line-clamp-2">
          {service.title}
        </p>
        <button
          aria-label="Learn more"
          className="p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-40 transition"
        >
          <FiArrowRight color="black" size={20} />
        </button>
      </div>
    </motion.div>
  );
}
