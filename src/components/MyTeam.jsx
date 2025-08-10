"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function MyTeam() {
  const scrollerRef = useRef(null);

  // Normalized values so all images align
  const members = [
    {
      name: "Rahul",
      role: "Front End Developer",
      img: "/rahul.png",
      scale: 1.2, x: 0, y: 0,
      bgW: 0.78, bgH: 0.56, bgX: 0, bgY: 0,
    },
    {
      name: "Shishir Paudel",
      role: "Team Lead",
      img: "/shishir.png",
      scale: 1.2, x: 0, y: 0,
      bgW: 0.74, bgH: 0.54, bgX: 0, bgY: 0,
    },
    {
      name: "Aayush",
      role: "DevOps Lead",
      img: "/ayush.png",
      scale: 1.2, x: 0, y: 0,
      bgW: 0.76, bgH: 0.56, bgX: 0, bgY: 0,
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
      {/* Page doodle on the right (not the per-card ones) */}
      <Image
        src="/doodle2.png"
        alt=""
        width={420}
        height={420}
        aria-hidden="true"
        className="pointer-events-none select-none hidden md:block absolute right-6 top-1/2 -translate-y-1/2 w-[18vw] max-w-[260px] min-w-[160px] opacity-90"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-green-600 text-3xl font-bold">Our Team</h2>

          {/* Mobile arrows */}
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

        {/* Mobile horizontal scroll */}
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
    name, role, img,
    scale = 1.12, x = 0, y = 0,
    bgW = 0.76, bgH = 0.56, bgX = 0, bgY = 0,
  } = member;

  const CARD_H = 400;
  const FOOTER_H = 96;
  const GUTTER = 16;
  const PANEL_AREA = CARD_H - (FOOTER_H + GUTTER * 2);

  const panelHeightPx = Math.max(180, Math.round(PANEL_AREA * bgH));
  const panelTopPx = 8 + bgY;

  const doodles = ["/doodle4.png", "/doodle5.png", "/doodle6.png"];
  const doodleSrc = doodles[index % doodles.length];

  return (
    <article
      {...rest}
      className={`relative rounded-[22px] shadow-lg overflow-hidden bg-white dark:bg-zinc-900 ${className}`}
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
        <div
          style={{
            WebkitMaskImage: `url("data:image/svg+xml;utf8,
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
                <defs>
                  <linearGradient id='fade' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0' stop-color='white'/>
                    <stop offset='1' stop-color='black'/>
                  </linearGradient>
                </defs>
                <rect width='100' height='70' fill='white'/>
                <path d='M0,70 5,65 10,70 15,65 20,70 25,65 30,70 35,65 40,70 45,65 50,70 55,65 60,70 65,65 70,70 75,65 80,70 85,65 90,70 95,65 100,70 100,100 0,100 Z'
                      fill='url(%23fade)'/>
              </svg>")`,
            maskImage: `url("data:image/svg+xml;utf8,
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
                <defs>
                  <linearGradient id='fade' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0' stop-color='white'/>
                    <stop offset='1' stop-color='black'/>
                  </linearGradient>
                </defs>
                <rect width='100' height='70' fill='white'/>
                <path d='M0,70 5,65 10,70 15,65 20,70 25,65 30,70 35,65 40,70 45,65 50,70 55,65 60,70 65,65 70,70 75,65 80,70 85,65 90,70 95,65 100,70 100,100 0,100 Z'
                      fill='url(%23fade)'/>
              </svg>")`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
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
      </div>

      {/* Footer */}
      <div className="absolute left-4 right-4 bottom-4">
        <div className="rounded-xl bg-gradient-to-b from-[#15A34A] to-[#16A34A] text-white p-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm opacity-90">{role}</p>
          </div>
          <div className="flex items-center gap-4 text-white/95 text-lg">
            <a href="#" aria-label={`${name} on Facebook`} className="hover:opacity-80"><FaFacebookF /></a>
            <a href="#" aria-label={`${name} on Twitter`} className="hover:opacity-80"><FaTwitter /></a>
            <a href="#" aria-label={`${name} on Instagram`} className="hover:opacity-80"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </article>
  );
}
