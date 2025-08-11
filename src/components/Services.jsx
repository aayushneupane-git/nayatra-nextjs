"use client";

import Image from "next/image";
import {
  FiTrendingUp,
  FiPenTool,
  FiBarChart2,
  FiPieChart,
} from "react-icons/fi";

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
    <section className="relative w-full">
      {/* Hero */}
      <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80"
          alt="Team presenting services"
          fill
          priority
          className="object-cover"
        />
        {/* teal overlay */}
        <div className="absolute inset-0 bg-teal-700/70" />
        {/* heading & sub */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-white text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 max-w-3xl text-white/90 text-lg sm:text-xl leading-snug">
            Lorem ipsum dolor sit amet, consec-{" "}
            <br className="hidden sm:block" />
            tur adipiscing elit
          </p>
        </div>
      </div>

      {/* White strip with icons & content (overlaps hero) */}
      <div className="-mt-16 sm:-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-t-2xl bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 px-6 sm:px-10 pt-16 pb-12">
              {SERVICES.map((s, i) => (
                <ServiceItem key={i} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom spacer matching screenshot */}
      <div className="h-6 bg-teal-700/70" />
    </section>
  );
}

function ServiceItem({ title, desc, Icon, accent }) {
  const isTeal = accent === "teal";

  return (
    <div className="flex flex-col items-center text-center">
      {/* icon badge */}
      <div
        className={[
          "w-28 h-28 rounded-full ring-8 ring-white shadow-md grid place-items-center",
          isTeal ? "bg-teal-600" : "bg-gray-800",
        ].join(" ")}
      >
        <div
          className={[
            "w-20 h-20 rounded-full grid place-items-center",
            isTeal ? "bg-white/10" : "bg-white/10",
          ].join(" ")}
        >
          <Icon className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* title */}
      <h3
        className={[
          "mt-6 font-extrabold text-xl",
          isTeal ? "text-teal-700" : "text-gray-900",
        ].join(" ")}
      >
        {title}
      </h3>

      {/* description */}
      <p className="mt-3 text-gray-600 leading-relaxed max-w-xs">{desc}</p>
    </div>
  );
}
