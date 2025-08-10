"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const menuItems = [
    { name: "About", href: "#" },
    { name: "Project", href: "#" },
    { name: "Service", href: "#" },
    { name: "Client", href: "#" },
    { name: "Team", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 
    bg-white dark:bg-gray-900 rounded-xl shadow-md z-50 transition-colors duration-300
    w-full max-w-7xl">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-900 dark:text-white">
            <Link href="/"><span className="text-green-600">Nep</span>Soft</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right section: Search + Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200">
              <FiSearch size={20} />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
          <div className="space-y-2 px-4 py-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
