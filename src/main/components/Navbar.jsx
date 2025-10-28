import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hide, setHide] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme, themeMode } = useTheme();

  // active section detection
  const sections = ["home", "about", "projects", "contact"];
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      // setHide(y > lastY && y > 100);
      lastY = y;

      const offset = window.innerHeight / 3;
      const sectionElements = sections
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      for (const el of sectionElements) {
        if (
          window.scrollY + offset >= el.offsetTop &&
          window.scrollY + offset < el.offsetTop + el.offsetHeight
        ) {
          setActive(el.id);
          break;
        }
      }

    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 ${hide ? "-translate-y-full" : "translate-y-0"} backdrop-blur-md`}
      aria-label="Main Navigation"
    >
      {/* Gradient glow behind navbar */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-full rounded-b-2xl bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 opacity-20 blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo with animated gradient */}
        <div className="flex items-center gap-4">
          <h1
            className={`text-lg md:text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-[length:200%] animate-gradient-x bg-gradient-to-r ${theme.primary}`}
          >
            RAHUL BINU
          </h1>
          {/* small gold dot accent */}
          {/* <span className={`${theme.accent} hidden md:inline-block text-sm font-semibold`}>•</span> */}
        </div>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {sections.map((label) => {
            const id = label.toLowerCase();
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`} className={`transition-all duration-300 ${isActive
                    ? "underline decoration-2 underline-offset-4 drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]"
                    : theme.navLink
                    }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
          >
            {themeMode === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            className="md:hidden p-2 rounded-md bg-white/10 hover:bg-white/20"
            onClick={() => setIsOpen((s) => !s)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden relative bg-black/30 backdrop-blur-md border-t border-emerald-700/10">
          <ul className="flex flex-col gap-4 py-6 px-6">
            {["Home", "About", "Projects", "Contact"].map((label) => (
              <li key={label}>
                <a href={`#${label.toLowerCase()}`} className="block py-2" onClick={() => setIsOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
