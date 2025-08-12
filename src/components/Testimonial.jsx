"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import taylor from "../../public/Taylor.jpeg";
import kavish from "../../public/kavish.png";
import ohiostate from "../../public/ohiostate.png";

const testimonials = [
  {
    id: 1,
    name: "Taylor N.",
    role: "CEO, Linh Hung Fashion",
    avatar: taylor,
    text: "I really loved the website. It’s beautifully designed, easy to navigate, delivered on time, and packed with thoughtful details that make the whole experience amazing. ",
  },
  {
    id: 2,
    name: "Kavish S.",
    role: "CTO, Vaccinity AI",
    avatar: kavish,
    text: "A great team to work with. Easy to communicate with, highly responsive, and dedicated to bringing our vision to life exactly as we imagined. ",
  },
  {
    id: 3,
    name: "Ohio State Pizzas",
    role: "Product Manager",
    avatar: ohiostate,
    text: "From concept to launch, the site was delivered with exceptional attention to detail, a seamless user experience, and a polished design that perfectly represents our brand. ",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-7xl rounded-xl mb-5 mx-2 md:mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
      {/* Left Side */}
      <div className="relative w-full py-10  md:py-24 bg-green-600 md:w-1/2 flex flex-col justify-center items-center">
        <div className="relative text-3xl md:text-5xl px-6 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight z-20 text-center">
          <span className="block">What Our</span>
          <span className="block">Clients</span>
          <span className="block">Are Saying!</span>
        </div>

        <div className="flex mt-6 space-x-4">
          <button
            className="cursor-pointer rounded-full bg-gray-100 text-gray-500 hover:text-indigo-500 font-bold w-12 h-12 focus:outline-none"
            onClick={prevSlide}
          >
            &#8592;
          </button>
          <button
            className="cursor-pointer rounded-full bg-gray-100 text-gray-500 hover:text-indigo-500 font-bold w-12 h-12 focus:outline-none"
            onClick={nextSlide}
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-gray-100 md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex} // ensures animation runs when index changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-gray-600 serif italic text-lg md:text-xl">
              {testimonials[activeIndex].text}
            </p>

            <div className="flex flex-col items-center mt-6">
              <Image
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <h2 className="mt-3 text-lg font-bold text-gray-700">
                {testimonials[activeIndex].name}
              </h2>
              <small className="text-gray-500">{testimonials[activeIndex].role}</small>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex mt-6 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-3 w-3 rounded-full ${
                i === activeIndex ? "bg-indigo-600" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
