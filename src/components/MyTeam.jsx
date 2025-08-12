"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function MyTeam() {
  const scrollerRef = useRef(null);

  const members = [
    {
      name: "Shishir Paudel",
      role: "Team Lead",
      img: "/shishir.png",
      linkedin: "https://www.linkedin.com/in/shishir-paudel-58811b209/", // change to real profile
      twitter: "https://twitter.com/shishirpaudel", // change to real profile
      scale: 1.2,
      bgW: 0.74,
      bgH: 0.54,
    },
    {
      name: "Rahul",
      role: "Full Stack Developer",
      img: "/rahul.png",
      linkedin: "https://www.linkedin.com/in/rashres", // change
      twitter: "https://twitter.com/rahul", // change
      scale: 1.2,
      bgW: 0.78,
      bgH: 0.56,
    },
    {
      name: "Aayush",
      role: "DevOps Lead",
      img: "/ayush.png",
      linkedin: "https://www.linkedin.com/in/aaneupane", // change
      twitter: "https://twitter.com/aayush", // change
      scale: 1.2,
      bgW: 0.76,
      bgH: 0.56,
    },
  ];

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const delta = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" });
  };

  return (
    <section className="relative py-12 bg-white dark:bg-black">
      <Image
        src="/doodle2.png"
        alt=""
        width={420}
        height={420}
        aria-hidden="true"
        className="pointer-events-none select-none hidden md:block absolute right-6 top-1/2 -translate-y-1/2 w-[18vw] max-w-[260px] min-w-[160px] opacity-90"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-green-600 text-3xl font-bold">Our Team</h2>

          <div className="flex gap-3 md:hidden">
            <button
              onClick={() => scrollByCard("left")}
              className="w-11 h-11 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition"
              aria-label="Previous"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scrollByCard("right")}
              className="w-11 h-11 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition"
              aria-label="Next"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Mobile scroll */}
        <div className="md:hidden -mx-4 px-4">
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin"
          >
            {members.map((m, i) => (
              <TeamCard
                key={i}
                member={m}
                index={i}
                className="min-w-[85%] xs:min-w-[70%] sm:min-w-[55%]"
                data-card
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <TeamCard key={i} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index = 0, className = "", ...rest }) {
  const {
    name,
    role,
    img,
    linkedin,
    twitter,
    scale = 1.12,
    x = 0,
    y = 0,
    bgW = 0.76,
    bgH = 0.56,
    bgX = 0,
    bgY = 0,
  } = member;

  const CARD_H = 400;
  const FOOTER_H = 96;
  const GUTTER = 16;
  const PANEL_AREA = CARD_H - (FOOTER_H + GUTTER * 2);
  const panelHeightPx = Math.max(180, Math.round(PANEL_AREA * bgH));
  const panelTopPx = 8 + bgY;

  const doodles = ["/doodle5.png", "/doodle4.png", "/doodle6.png"];
  const doodleSrc = doodles[index % doodles.length];

  return (
    <article
      {...rest}
      className={`relative rounded-[22px] overflow-hidden bg-white dark:bg-zinc-900 ${className}`}
      style={{ height: CARD_H }}
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-[22px] bg-[#15A34A]"
        style={{
          width: `${bgW * 100}%`,
          height: `${panelHeightPx}px`,
          top: `${panelTopPx}px`,
          borderRadius: 18,
        }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 bg-[#15A34A]"
        style={{
          width: `${bgW * 100}%`,
          height: 24,
          top: `${panelTopPx + panelHeightPx - 12}px`,
          filter: "blur(6px)",
          opacity: 0.8,
        }}
      />

      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src={doodleSrc}
          alt=""
          width={120}
          height={120}
          aria-hidden="true"
          className="absolute left-[8%] top-6 w-20 h-auto"
        />
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 z-10"
        style={{ bottom: FOOTER_H }}
      >
        <Image
          src={img}
          alt={name}
          width={520}
          height={520}
          className="grayscale object-contain"
          style={{
            transform: `translate(${x}px, ${y}px) scale(${scale})`,
            transformOrigin: "center bottom",
            display: "block",
          }}
          draggable={false}
        />
      </div>

      {/* Footer */}
      <div className="absolute left-4 right-4 bottom-4">
        <div className="rounded-xl bg-gradient-to-b from-[#15A34A] to-[#16A34A] text-white p-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm opacity-90">{role}</p>
          </div>
          <div className="flex items-center gap-4 text-white/95 text-lg">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on LinkedIn`}
                className="hover:opacity-80"
              >
                <FaLinkedinIn />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on Twitter`}
                className="hover:opacity-80"
              >
                {/* <BsTwitterX /> */}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
