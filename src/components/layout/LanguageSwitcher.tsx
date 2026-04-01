"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Locale } from "@/i18n/routing";

const localeLabels: Record<Locale, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇬🇧" },
  ar: { label: "العربية", flag: "🇦🇪" },
  de: { label: "Deutsch", flag: "🇩🇪" },
  pl: { label: "Polski", flag: "🇵🇱" },
  es: { label: "Español", flag: "🇪🇸" },
  tr: { label: "Türkçe", flag: "🇹🇷" },
};

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 text-sm"
        aria-label="Select language"
        id="language-switcher"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-white font-bold flex gap-2 items-center">
          <span>{localeLabels[locale]?.flag}</span>
        </span>
        <ChevronDown
          className={`w-3 h-3 text-white/50 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 end-0 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black min-w-[160px] z-50 backdrop-blur-xl"
          >
            {(Object.entries(localeLabels) as [Locale, typeof localeLabels.en][]).map(
              ([key, { label, flag }]) => (
                <button
                  key={key}
                  onClick={() => handleLocaleChange(key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 ${
                    key === locale
                      ? "bg-primary/10 text-primary"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-base">{flag}</span>
                  <span className="font-bold">{label}</span>
                  {key === locale && (
                    <span className="ms-auto w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
