'use client'

import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function MyTeam() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-green-600 dark:text-green-400 text-3xl font-bold mb-8">Our Team</h2>

        <div className="flex gap-6 flex-wrap md:flex-nowrap">
          {[
            {
              name: "Rahul",
              role: "Front End Developer",
              img: "/rahul.png",
            },
            {
              name: "Shishir Paudel",
              role: "Team Lead",
              img: "/shishir.png",
            },
            {
              name: "Aayush",
              role: "Devops Lead",
              img: "/ayush.png",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#ABCE60] via-[#ABCE60] to-[#60CE70] w-full md:w-[30%] rounded-lg overflow-hidden shadow-md transition-colors duration-300"
            >
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-80 object-cover grayscale"
                />
              </div>
              <div className="bg-gradient-to-br from-[#ABCE60] via-[#ABCE60] to-[#60CE70] rounded-b-lg border-t border-white/10 dark:border-white/20 text-white p-4">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm mb-3">{member.role}</p>
                <div className="flex gap-3">
                  <a href="#" className="hover:text-black dark:hover:text-gray-300 transition"><FaFacebookF /></a>
                  <a href="#" className="hover:text-black dark:hover:text-gray-300 transition"><FaTwitter /></a>
                  <a href="#" className="hover:text-black dark:hover:text-gray-300 transition"><FaInstagram /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-300 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-300 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
