import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { label: "Home", href: "/", isAnchor: false },
      { label: "Daftar Surah", href: "#surah-list", isAnchor: true },
      { label: "Tentang", href: "#about", isAnchor: true },
      { label: "Tafsir", href: "/tafsir/1", isAnchor: false },
    ],
    []
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  const renderLink = (link: (typeof navLinks)[number], className: string) =>
    link.isAnchor ? (
      <a
        key={link.href}
        href={link.href}
        className={className}
        onClick={closeMenu}
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.href}
        to={link.href}
        className={className}
        onClick={closeMenu}
      >
        {link.label}
      </Link>
    );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-white/20 bg-white/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(15,118,110,0.15)]">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <motion.div whileHover={{ scale: 1.02 }} className="shrink-0">
              <Link
                to="/"
                className="text-2xl font-semibold tracking-tight text-slate-900"
              >
                My<span className="text-emerald-600">Quran</span>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                renderLink(
                  link,
                  "text-sm font-semibold tracking-wide text-slate-600 hover:text-emerald-600 transition-colors"
                )
              )}
              <Link
                to="/quran"
                className="inline-flex items-center rounded-full bg-linear-to-r from-emerald-600 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 transition-transform hover:-translate-y-0.5"
              >
                Jelajahi Surah
              </Link>
            </div>

            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-full border border-emerald-100 bg-white/80 p-2 text-emerald-700 shadow-inner shadow-white/40"
                aria-label="Toggle navigation"
              >
                {isOpen ? (
                  <FaTimes className="h-5 w-5" />
                ) : (
                  <FaBars className="h-5 w-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <MobileNavbar isOpen={isOpen} links={navLinks} onNavigate={closeMenu} />
    </motion.nav>
  );
};
