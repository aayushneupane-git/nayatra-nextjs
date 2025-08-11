import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Ohio State Pizzas",
    company: "QBuild Studio",
    website: "qbuild.studio",
    url: "https://qbuild.studio/projects/cube",
    image:
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Lux Travellerzz",
    company: "Aperture Labs",
    website: "aperturelabs.jp",
    url: "https://aperturelabs.jp/library/skyline",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Linh Hung Premium Fashions",
    company: "Nordic Works",
    website: "nordicworks.dk",
    url: "https://nordicworks.dk/projects/harbor-museum",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Projects({ fadeUp }) {
  return (
    <motion.section
      className="relative isolate py-12 sm:py-16 max-w-7xl w-full mx-auto"
      aria-label="Projects Showcase"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-2.jpg')" }}
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <header className="  pb-8  text-white">
          <h2 className="text-green-600 text-2xl sm:text-3xl font-bold dark:text-white relative z-10 ">
            Our Work
          </h2>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 px-2 sm:px-4">
          {PROJECTS.map((p, i) => (
            <li
              key={i}
              className={
                (i % 5 === 0 ? "sm:row-span-2" : "") + " group relative"
              }
            >
              <a
                href={p.url}
                className="block overflow-hidden rounded-[1.5rem] bg-white/5 ring-1 ring-black/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)] focus:outline-none focus:ring-2 focus:ring-white/80"
              >
                <figure className="relative aspect-[4/3] sm:aspect-[5/4] h-full w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    draggable={false}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90" />

                  <figcaption className="absolute left-4 top-4 select-none">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow-md">
                      {p.title}
                    </span>
                  </figcaption>

                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="rounded-xl bg-white/95 backdrop-blur-md p-4 text-gray-900 shadow-xl ring-1 ring-black/10">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-semibold leading-tight">
                            {p.company}
                          </h3>
                          <p className="text-xs text-gray-600">{p.website}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex rounded-full px-2.5 py-1 text-xs bg-gray-900 text-white/90">
                            View
                          </span>
                          <span className="inline-flex rounded-full px-2.5 py-1 text-xs bg-green-600 text-white">
                            Open
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
