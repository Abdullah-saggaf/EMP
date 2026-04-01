"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "@/components/ui/Button";

const navLinks = [
  { key: "home", href: "/" as const },
  { key: "properties", href: "/properties" as const },
  { key: "services", href: "/services" as const },
  { key: "courses", href: "/courses" as const },
  { key: "about", href: "/about" as const },
  { key: "contact", href: "/contact" as const },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 start-0 end-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl" : "bg-transparent py-8"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            id="navbar-logo"
          >
            <img src="/logo.png" alt="AMP Empire Logo" className="h-[64px] md:h-[72px] w-auto object-contain transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className={`relative py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300 group ${
                  isActive(href)
                    ? "text-primary"
                    : "text-white/60 hover:text-white"
                }`}
                id={`nav-${key}`}
              >
                {t.raw ? t.raw(key) : t(key)}
                <span
                  className={`absolute bottom-0 start-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    isActive(href)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right: Language + CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <div className="hidden lg:block">
              <Link href="/contact" className="px-6 py-2.5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary transition-colors duration-300">
                {t.raw ? t.raw("cta") : t("cta")}
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
               <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">
              {navLinks.map(({ key, href }, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={href}
                    className={`text-2xl font-bold uppercase tracking-widest transition-colors duration-300 ${
                      isActive(href)
                        ? "text-primary"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {t.raw ? t.raw(key) : t(key)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="mt-8"
              >
                <Link href="/contact" className="px-10 py-5 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-full">
                  {t.raw ? t.raw("cta") : t("cta")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
