"use client";

import Services from "@/components/Services";
import "../app/style.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import MyTeam from "@/components/MyTeam";
import { useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Projects from "@/components/Projects";
import TestimonialSlider from "@/components/Testimonial";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      id="home"
      className="bg-white text-black dark:bg-black dark:text-white"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <HeroComponent />
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        id="about"
      >
        <AboutUsComponent />
      </motion.div>
      {/* <OurTeam /> */}
      <OurServices />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        id="projects"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Projects fadeUp={fadeUp} />
      </motion.div>

      <div id="team">
        <MyTeam />
      </div>
      <div>
        <TestimonialSlider />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        id="contact"
      >
        <ContactUs />
      </motion.div>
    </div>
  );
}

const OurServices = () => {
  const [active, setActive] = useState(0);
  const SERVICES = [
    { title: "Product Design", desc: "UX, UI, Design Systems", id: 1 },
    { title: "Ideation & Strategy", desc: "Discovery, Roadmapping", id: 2 },
    {
      title: "Web and Mobile App Development",
      desc: "Next.js, React Native",
      id: 3,
    },
    { title: "Embedded Systems", desc: "Edge, Firmware, IoT", id: 4 },
  ];
  return (
    <section className="relative py-8 sm:py-10 lg:py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-[#3F3F3F] rounded-lg overflow-hidden">
        <img
          src="/doodle7.png"
          alt=""
          className="hidden lg:block absolute top-1/2 left-[40%] w-36 -translate-y-1/2 opacity-80 pointer-events-none select-none"
        />
        <img
          src="/doodle9.png"
          alt=""
          className="hidden lg:block absolute top-4 left-4 w-20 opacity-80 pointer-events-none select-none"
        />
        <img
          src="/doodle8.png"
          alt=""
          className="hidden lg:block absolute bottom-2 right-4 w-10 opacity-80 pointer-events-none select-none"
        />
        <img
          src="/doodle10.png"
          alt=""
          className="hidden lg:block absolute bottom-10 left-1/4 w-20 opacity-80 pointer-events-none select-none"
        />
        <img
          src="/doodle11.png"
          alt=""
          className="hidden lg:block absolute h-full left-32 opacity-80 pointer-events-none select-none"
        />

        <div className="relative z-10 flex flex-col gap-8 sm:gap-10 lg:gap-0 lg:flex-row lg:justify-between lg:items-center py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-10">
          {/* Left column */}
          <div className="w-full lg:w-2/3">
            <div className="text-white font-bold leading-snug text-2xl sm:text-3xl lg:text-4xl w-full lg:w-3/5">
              See what we can do for you
            </div>
          </div>

          {/* Right column */}
          <div className="w-full lg:w-1/2 space-y-2 sm:space-y-3">
            {SERVICES.map((s, index) => (
              <div key={s.id} className="w-full border-b border-[#636060]">
                <button
                  onClick={() => setActive(index)}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 w-full text-left text-base sm:text-lg lg:text-xl text-white hover:bg-gray-600 transition-colors"
                >
                  {s.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroComponent = () => {
  return (
    <>
      <section
        className="relative min-h-[60svh] sm:min-h-[80svh] h-[80vh] overflow-hidden md:h-[100vh] bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/bgimage2.jpg')" }}
      >
        <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-1/2 bg-black/60" />

        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <h1 className="text-[1.9rem] leading-tight sm:text-5xl md:text-6xl font-bold max-w-[22ch]">
              Crafting Code <span className="text-green-400">{"{ }"}</span> &
              <br />
              Creating Impact.
            </h1>
          </div>
        </div>

        {/* Desktop/tablet logos pinned at bottom */}
        <div className="hidden md:flex absolute bottom-0 left-0 right-0 items-center justify-center px-6">
          <div className="bg-white/95 dark:bg-zinc-900/95 text-black dark:text-white py-4 px-6 rounded-t-2xl w-full max-w-7xl z-20 shadow-lg">
            <div className="grid grid-cols-5 place-items-center gap-6">
              {logoSrcs.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Logo ${i + 1}`}
                  width={80}
                  height={80}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile logos (stacked below section so they don't steal height) */}
      <div className="md:hidden px-4 pt-4">
        <div className="bg-white/95 dark:bg-zinc-900/95 text-black dark:text-white rounded-2xl w-full max-w-7xl shadow-lg overflow-hidden">
          <div className="relative h-20">
            {" "}
            {/* fixed height for the strip */}
            <ul className="flex h-full animate-logo-marquee will-change-transform hover:[animation-play-state:paused] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              {/* Duplicate list for seamless loop */}
              {[...logoSrcs, ...logoSrcs].map((src, i) => (
                <li
                  key={`logo-${i}`}
                  className="basis-1/5 shrink-0 flex items-center gap-8 justify-center px-3"
                  aria-hidden={i >= logoSrcs.length ? true : undefined}
                >
                  <Image
                    src={src}
                    alt={`Logo ${(i % logoSrcs.length) + 1}`}
                    width={56}
                    height={56}
                    className="w-14 h-14 object-contain"
                    draggable={false}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* styled-jsx for the marquee (scoped to this component) */}
        <style jsx>{`
          @keyframes logo-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          /* duration = slower = smoother; tweak 25s → 35s to go slower */
          .animate-logo-marquee {
            animation: logo-marquee 25s linear infinite;
          }
          /* Respect reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .animate-logo-marquee {
              animation: none !important;
              transform: translateX(0) !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

const logoSrcs = [
  "/client2.png",
  "/title_logo.png",
  "/logolux.png",
  "/client1.png",
  "https://www.thecloroxcompany.com/wp-content/uploads/2022/08/TCC_Stacked_1200x1200.png",
];

const AboutUsComponent = () => {
  return (
    <div className="flex items-center justify-center">
      <section className="relative py-16 sm:py-20 max-w-7xl w-full bg-white dark:bg-black text-black dark:text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Images */}
            <div className="flex gap-3 sm:gap-4 justify-center">
              <Image
                src="/aboutus_left.png"
                alt="Team collaboration left"
                width={400}
                height={500}
                className="w-1/3 rounded-lg shadow-md object-cover"
                priority={false}
              />
              <Image
                src="/aboutus_middle.png"
                alt="Team collaboration middle"
                width={400}
                height={500}
                className="w-1/3 rounded-lg shadow-md object-cover"
              />
              <Image
                src="/aboutus_right.png"
                alt="Team collaboration right"
                width={400}
                height={500}
                className="w-1/3 rounded-lg shadow-md object-cover"
              />
            </div>

            <div className="relative lg:text-left">
              <Image
                src="/doodle3.png"
                alt=""
                width={220}
                height={220}
                aria-hidden="true"
                className="
                  pointer-events-none select-none
                  absolute
                  -top-10 sm:-top-12 md:-top-14
                  right-20 md:right-40
                  w-0 sm:w-0 lg:w-32
                  rotate-[-12deg]
                  opacity-90 dark:opacity-80
                "
              />

              <h2 className="text-green-600 text-2xl sm:text-3xl font-bold dark:text-white relative z-10 pt-10 sm:pt-12">
                About US
              </h2>
              <p className="mt-2 text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-300 max-w-prose">
                NepSoft builds custom software that powers critical operations.
                We partner with financial institutions, healthcare providers,
                technology companies, and public agencies to design, engineer,
                and scale secure digital systems. Through disciplined build
                practices and human-centered design, we ship products that are
                dependable, compliant, and effortless to use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactUs = () => {
  const [selectedService, setSelectedService] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  const services = [
    "Product Design",
    "Website Development",
    "Mobile App Development",
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service === selectedService ? null : service);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Message sent successfully!\n\nService: ${
        selectedService || "Not specified"
      }\nName: ${formData.name}\nEmail: ${formData.email}\nDetails: ${
        formData.details
      }`
    );

    // Reset form
    setSelectedService(null);
    setFormData({ name: "", email: "", details: "" });
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gray-100 dark:bg-black text-black dark:text-white">
      {/* Doodle: top-right (tablet/desktop) */}

      <div className="hidden lg:flex">
        <Image
          src="/haveaproject.png"
          alt=""
          aria-hidden="true"
          priority={false}
          width={900}
          height={900}
          className="
    pointer-events-none select-none
    absolute z-0
    right-0 
    top-10
    w-[40vw] md:w-[42vw] lg:w-[36vw]
    max-w-[780px] md:max-w-[640px] lg:max-w-[560px]
    min-w-[320px]
    opacity-90
  "
        />
        <Image
          src="/haveaproject2.png"
          alt=""
          aria-hidden="true"
          priority={false}
          width={900}
          height={900}
          className="
    pointer-events-none select-none
    absolute z-0
    right-0 
    top-[100px]   /* adjust this value so it’s right under the first one */
    w-[2vw] md:w-[42vw] lg:w-[36vw]
    max-w-[780px] md:max-w-[640px] lg:max-w-[560px]
    min-w-[320px]
    opacity-90
  "
        />

        <Image
          src="/doodle1.png"
          alt=""
          aria-hidden="true"
          priority={false}
          width={200}
          height={200}
          className="
      pointer-events-none select-none
      absolute z-0
      right-30 
      top-[200px] /* adjust to be right below the second one */
      w-[10vw] md:w-[12vw] lg:w-[5vw]
      max-w-[100px] md:max-w-[200px] lg:max-w-[100px]
      min-w-[150px]
      opacity-90
    "
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="flex flex-col lg:flex-row  justify-between gap-12">
          {/* Left side - Contact form */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-green-600 text-2xl sm:text-3xl font-bold dark:text-white">
                Contact US
              </h2>
              <h3 className="text-lg sm:text-xl">What can we do for you?</h3>
            </div>

            <div className="flex w-full gap-2 sm:gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceSelect(service)}
                  className={`px-3 sm:px-4 w-full py-2 border-b-2 transition-colors ${
                    selectedService === service
                      ? "border-green-600 text-green-600"
                      : "border-gray-300 hover:border-green-400 dark:border-gray-600"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:border-green-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-green-600"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:border-green-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-green-600"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="details" className="mb-1">
                  Project details
                </label>
                <textarea
                  id="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleInputChange}
                  className="w-full px-1 py-2 bg-transparent border-0 border-b-2 border-gray-300 rounded-none focus:border-green-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-green-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-5 sm:px-6 py-3 rounded-lg hover:bg-green-700 transition-colors mt-4 sm:mt-6 w-full sm:w-auto"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right side - Contact info */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="text-sm font-bold text-gray-500 mb-1 sm:mb-2 uppercase tracking-wide">
                Phone
              </h3>
              <p className="text-lg sm:text-xl">+1 (817) 501-9777</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-500 mb-1 sm:mb-2 uppercase tracking-wide">
                Email
              </h3>
              <p className="text-lg sm:text-xl">nepsoftusa@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
