"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MissionSection() {
  const t = useTranslations("mission");

  const stats = [
    { value: "2018", label: t("stats.founded") },
    { value: "€2B+", label: t("stats.portfolio") },
    { value: "6", label: t("stats.languages") },
    { value: "3", label: t("stats.divisions") },
  ];

  return (
    <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/4 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10 justify-center"
        >
          <div className="w-8 h-px bg-primary" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
            {t("sectionLabel")}
          </span>
          <div className="w-8 h-px bg-primary" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-16 leading-[1.05] text-center max-w-5xl mx-auto"
        >
          {t.rich("headline", {
            highlight: (chunks) => <span className="text-primary italic">{chunks}</span>
          })}
        </motion.h2>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-24"
        >
          <p className="text-white/40 text-lg font-medium leading-relaxed">
            {t("body1")}
          </p>
          <p className="text-white/40 text-lg font-medium leading-relaxed">
            {t("body2")}
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-10 px-6 bg-black hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
