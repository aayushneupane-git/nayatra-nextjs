"use client";

import { useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function MyTeam() {
  const scrollerRef = useRef();

  const members = [
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
      role: "DevOps Lead",
      img: "/ayush.png",
    },
  ];

  const scrollByCard = (dir) => {
    const container = scrollerRef.current;
    if (!container) return;
    const card = container.querySelector("[data-card]");
    const delta = card ? card.offsetWidth + 16 : 280; // card width + gap fallback
    container.scrollBy({
      left: dir === "left" ? -delta : delta,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-green-600 text-2xl sm:text-3xl font-bold">
            Our Team
          </h2>

          {/* Mobile/Tablet controls (hidden on lg+) */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => scrollByCard("left")}
              className="w-10 h-10 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center hover:opacity-80 transition"
              aria-label="Previous"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scrollByCard("right")}
              className="w-10 h-10 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center hover:opacity-80 transition"
              aria-label="Next"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/*
          Mobile/Tablet: horizontal scroll with snap
          Desktop (lg+): 3-column grid, no scroll
        */}
        <div className="lg:hidden -mx-4 px-4">
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin"
          >
            {members.map((m, idx) => (
              <TeamCard
                key={idx}
                member={m}
                className="min-w-[85%] xs:min-w-[70%] sm:min-w-[55%]"
                data-card
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, idx) => (
            <TeamCard key={idx} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, className = "", ...rest }) {
  return (
    <div
      {...rest}
      className={`rounded-lg overflow-hidden shadow-md bg-[linear-gradient(53deg,rgba(171,206,96,1)_1%,rgba(171,206,96,1)_1%,rgba(96,206,112,1)_45%)] ${className}`}
    >
      <div className="relative">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-72 sm:h-80 object-cover grayscale"
          loading="lazy"
        />
      </div>
      <div className="bg-[linear-gradient(53deg,rgba(171,206,96,1)_1%,rgba(171,206,96,1)_5%,rgba(96,206,112,1)_45%)] text-white p-4 border-t border-white/20">
        <h3 className="text-lg font-bold">{member.name}</h3>
        <p className="text-sm mb-3 opacity-90">{member.role}</p>
        <div className="flex gap-3">
          <a
            href="#"
            className="hover:text-black transition"
            aria-label={`${member.name} on Facebook`}
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-black transition"
            aria-label={`${member.name} on Twitter`}
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-black transition"
            aria-label={`${member.name} on Instagram`}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
