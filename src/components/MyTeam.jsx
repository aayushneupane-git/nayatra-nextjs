'use client'

import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function MyTeam() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? 2 : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev === 2 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-green-600 text-3xl font-bold mb-8">Our Team</h2>

        <div className="flex gap-6">

          <div className="bg-[linear-gradient(53deg,rgba(171,206,96,1)_1%,rgba(171,206,96,1)_1%,rgba(96,206,112,1)_45%)] w-[40%]  rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <img
                src="/rahul.png"
                alt="Rahul"
                className="w-full h-80 object-cover grayscale"
              />
            </div>
            <div className="bg-[linear-gradient(53deg,rgba(171,206,96,1)_1%,rgba(171,206,96,1)_5%,rgba(96,206,112,1)_45%)]   rounded-b-lg border-t-[0.01px] overflow-hidden shadow-md text-white p-4">
              <h3 className="text-lg font-bold">Rahul</h3>
              <p className="text-sm mb-3">Front End Developer</p>
              <div className="flex gap-3">
                <a href="#" className="hover:text-black transition"><FaFacebookF /></a>
                <a href="#" className="hover:text-black transition"><FaTwitter /></a>
                <a href="#" className="hover:text-black transition"><FaInstagram /></a>
              </div>
            </div>
          </div>

          <div className=" bg-[linear-gradient(53deg,rgba(171,206,96,1)_1%,rgba(171,206,96,1)_1%,rgba(96,206,112,1)_45%)] w-[25%]  rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <img
                src="/shishir.png"
                alt="Shishir Paudel"
                className="w-full h-80 object-cover grayscale  overflow-hidden "
              />
            </div>
            <div className="  bg-[linear-gradient(53deg,rgba(171,206,96,1)_1%,rgba(171,206,96,1)_5%,rgba(96,206,112,1)_45%)] rounded-b-lg border-t-[0.01px] overflow-hidden shadow-md text-white p-4">
              <h3 className="text-lg font-bold">Shishir Paudel</h3>
              <p className="text-sm mb-3">Team Lead </p>
              <div className="flex gap-3">
                <a href="#" className="hover:text-black transition"><FaFacebookF /></a>
                <a href="#" className="hover:text-black transition"><FaTwitter /></a>
                <a href="#" className="hover:text-black transition"><FaInstagram /></a>
              </div>
            </div>
          </div>

          <div className="bg-[linear-gradient(53deg,rgba(171,206,96,1)_1%,rgba(171,206,96,1)_1%,rgba(96,206,112,1)_45%)] w-[25%] rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <img
                src="/ayush.png"
                alt="Aayush"
                className="w-full h-80 object-cover grayscale"
              />
            </div>
            <div className="bg-[linear-gradient(53deg,rgba(171,206,96,1)_1%,rgba(171,206,96,1)_5%,rgba(96,206,112,1)_45%)] rounded-b-lg border-t-[0.01px] overflow-hidden shadow-md text-white p-4">
              <h3 className="text-lg font-bold">Aayush</h3>
              <p className="text-sm mb-3">Devops Lead</p>
              <div className="flex gap-3">
                <a href="#" className="hover:text-black transition"><FaFacebookF /></a>
                <a href="#" className="hover:text-black transition"><FaTwitter /></a>
                <a href="#" className="hover:text-black transition"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-700 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
