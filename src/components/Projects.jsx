"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const PROJECTS = [
  {
    title: "Ohio State Pizzas",
    company: "Ohio State Pizzas",
    website: "https://ohiostatepizzas.com/",
    url: "https://ohiostatepizzas.com/",
    image: "/work1.png",
  },
  {
    title: "Lux Travellerzz",
    company: "Lux Travellerzz",
    website: "https://luxtravelerzz.com/",
    url: "https://luxtravelerzz.com/",
    image: "/work2.png",
  },
  {
    title: "Linh Hung Premium Fashions",
    company: "Linh Hung",
    website: "Linh Hung ",
    url: "https://linhhung.com/",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=70",
  },
];

const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPTEgaGVpZ2h0PTEgZmlsbD0nI2U5ZWFlYScvPjwvc3ZnPg==";

export default function Projects() {
  return (
    <section className="relative isolate py-12 sm:py-16 w-full">
      {/* Full-width background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-2.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-90"
        />
      </div>

      {/* Content constrained inside max-w */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="pb-8 text-white">
          <h2 className="text-green-600 text-2xl sm:text-3xl font-bold dark:text-white relative z-10">
            Our Projects
          </h2>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PROJECTS.map((p, i) => (
            <div key={p.title} className="group">
              <Link
                href={p.url}
                prefetch={false}
                className="flex overflow-hidden rounded-[1.5rem] md:h-64 bg-white/5 ring-1 ring-black/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-white/80"
              >
                <figure className="relative w-full aspect-[5/4]">
                  {/* Image */}
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    priority={i === 0}
                    placeholder="blur"
                    blurDataURL={BLUR}
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03] will-change-transform"
                  />

                  {/* Top gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                  {/* Title chip */}
                  <figcaption className="absolute left-4 top-4 select-none">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow">
                      {p.title}
                    </span>
                  </figcaption>

                  {/* Bottom info */}
                  <div
                    className="
                      absolute left-4 right-4 bottom-4
                      opacity-100 translate-y-0
                      lg:opacity-0 lg:translate-y-2
                      lg:transition-all lg:duration-300
                      lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                    "
                  >
                    <div className="rounded-xl bg-white/95 backdrop-blur-md ring-1 ring-black/10">
                      <div className="p-4 text-gray-900">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-base font-semibold leading-tight">
                              {p.company}
                            </h3>
                            <p className="text-xs text-gray-600">{p.website}</p>
                          </div>
                          <span className="inline-flex rounded-full px-2.5 py-1 text-xs bg-gray-900 text-white/90">
                            View
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
