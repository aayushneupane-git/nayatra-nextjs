"use client";

import {
  FiTrendingUp,
  FiPenTool,
  FiBarChart2,
  FiPieChart,
} from "react-icons/fi";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    title: "Service Name",
    desc: "Dolor sit amet, consectetur adipiscing elit, sed diam nonumy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    Icon: FiTrendingUp,
    accent: "teal", // teal circle like the 1st/3rd in the mock
  },
  {
    title: "Service Name",
    desc: "Dolor sit amet, consectetur adipiscing elit, sed diam nonumy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    Icon: FiPenTool,
    accent: "dark", // dark circle like the 2nd/4th in the mock
  },
  {
    title: "Service Name",
    desc: "Dolor sit amet, consectetur adipiscing elit, sed diam nonumy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    Icon: FiBarChart2,
    accent: "teal",
  },
  {
    title: "Service Name",
    desc: "Dolor sit amet, consectetur adipiscing elit, sed diam nonumy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    Icon: FiPieChart,
    accent: "dark",
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl rounded-xl mb-5 mx-2 md:mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
      {/* Left Side */}
      <div className="relative w-full py-10  md:py-24 bg-green-600 md:w-1/2 flex flex-col justify-center items-center">
        <div className="relative text-3xl md:text-5xl px-6 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight z-20 text-center">
          <span className="block">What Our</span>
          <span className="block">Clients</span>
          <span className="block">Are Saying!</span>
        </div>

        
      </div>

      {/* Right Side */}
      <div className="bg-gray-100 md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 text-center">
        <AnimatePresence mode="wait">
     
        </AnimatePresence>
      </div>
    </section>
  );
}
