"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import WordPullUp from "@/components/ui/WordPullUp";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Layers */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>

        {/* Base gradient / Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)]" />

        {/* Geometric accent shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating primary orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/20 rounded-full blur-sm"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-20">
        {/* Brand label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-bold tracking-[0.4em] uppercase text-primary backdrop-blur-sm">
            {t("badge")}
          </span>
        </motion.div>

        {/* Main Tagline with Magic UI Word Pull Up */}
        <div className="h-auto min-h-[120px] md:min-h-[160px] flex items-center justify-center mb-6">
          <WordPullUp
            words={t.raw ? t.raw("tagline") : t("tagline")}
            className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white drop-shadow-2xl"
          />
        </div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-2xl text-white/50 font-medium tracking-wide max-w-3xl mx-auto mb-12"
        >
          {t.raw ? t.raw("subheadline") : t("subheadline")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            {t.raw ? t.raw("cta") : t("cta")}
          </Link>
          <Link
            href="/properties"
            className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {t("portfolioCta")}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => {
          document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/30">
          {t.raw ? t.raw("scrollDown") : t("scrollDown")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
