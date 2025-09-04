"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "About", id: "about" },
    { name: "Project", id: "projects" },
    { name: "Service", id: "services" },
    { name: "Team", id: "team" },
    { name: "Clients", id: "clients" },
  ];

  const smoothScroll = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const nav = document.getElementById("site-nav");
    const navHeight = nav?.offsetHeight || 0;
    const topGap = 8; // top-2
    const offset = navHeight + topGap;

    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  const handleNav = (id, e) => {
    if (e) e.preventDefault();

    const run = () => {
      if (pathname === "/") {
        // same page: prevent default + smooth scroll
        smoothScroll(id);
        history.replaceState(null, "", `/#${id}`);
      } else {
        // different page: disable Next's default scroll, then smooth scroll manually
        router.push(`/#${id}`, { scroll: false });
        // wait a frame so the new page lays out, then scroll
        requestAnimationFrame(() => {
          // small extra delay helps in some browsers
          setTimeout(() => smoothScroll(id), 50);
        });
      }
    };

    if (isOpen) {
      setIsOpen(false); // close drawer first
      setTimeout(run, 300); // match your drawer transition duration
    } else {
      run();
    }
  };

  return (
    <nav
      id="site-nav"
      className="fixed top-2 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 bg-white dark:bg-gray-900 rounded-xl shadow-md transition-colors duration-300"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            <Link href="/">
              <img className=" w-20 h-6 md:w-23 md:h-8" src="/mainlogo.png" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNav(item.id, e)}
                className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              onClick={(e) => handleNav("contact", e)}
              className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              Contact Us
            </Link>

            {/* Burger → X */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden relative w-9 h-9 rounded-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
            >
              <span className="sr-only">Open main menu</span>
              <span
                className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? "bg-black/40 opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Right drawer */}
      <aside
        id="mobile-drawer"
        className={`md:hidden fixed top-0 right-0 z-50 h-screen w-80 max-w-[85%] bg-white dark:bg-gray-900 shadow-xl border-l border-black/10 dark:border-white/10 transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-black/10 dark:border-white/10">
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            <Link href="/">
              <img className=" w-20 h-6 md:w-23 md:h-8" src="/mainlogo.png" />
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="relative w-9 h-9 rounded-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors"
            aria-label="Close menu"
          >
            <span className="absolute block h-0.5 w-6 bg-current rotate-45" />
            <span className="absolute block h-0.5 w-6 bg-current -rotate-45" />
          </button>
        </div>

        <nav className="px-4 py-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  onClick={(e) => handleNav(item.id, e)}
                  className="block rounded-lg px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-600 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                onClick={(e) => handleNav("contact", e)}
                className="block rounded-lg px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </nav>
  );
}
