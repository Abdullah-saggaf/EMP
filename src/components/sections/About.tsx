"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";
import { Building2, Target, Globe, Users, Award, ArrowRight, MapPin, Calendar } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function About() {
  const t = useTranslations("aboutPage");
  const tStats = useTranslations("about"); // keeping old counters translation

  const pillars = [
    {
      icon: Building2,
      title: t("pillars.p1.title"),
      text: t("pillars.p1.text"),
    },
    {
      icon: Target,
      title: t("pillars.p2.title"),
      text: t("pillars.p2.text"),
    },
    {
      icon: Globe,
      title: t("pillars.p3.title"),
      text: t("pillars.p3.text"),
    },
    {
      icon: Users,
      title: t("pillars.p4.title"),
      text: t("pillars.p4.text"),
    },
  ];

  const timeline = [
    { year: "2018", event: t("timeline.event1") },
    { year: "2020", event: t("timeline.event2") },
    { year: "2022", event: t("timeline.event3") },
    { year: "2024", event: t("timeline.event4") },
    { year: "2026", event: t("timeline.event5") },
  ];

  const counters = [
    { end: 50, suffix: "+", label: tStats("partnersLabel") },
    { end: 200, suffix: "+", label: tStats("jobsLabel") },
    { end: 15, suffix: "", label: tStats("coursesLabel") },
    { end: 500, suffix: "+", label: tStats("clientsLabel") },
  ];

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[200px] -ml-48 -mt-48" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[180px] -mr-32" />
      </div>

      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                {tStats("sectionLabel")}
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-end">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.95]">
                {t("heroWord1")}<br />
                <span className="text-primary italic">{t("heroWord2")}</span>
              </h1>
              <p className="text-white/40 text-xl font-medium leading-relaxed pb-2 max-w-md">
                {tStats("body")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="relative border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 overflow-hidden"
          >
            {counters.map((counter, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-14 px-6 bg-black hover:bg-white/[0.02] transition-colors group gap-2"
              >
                <div className="flex items-baseline gap-1">
                  <Counter end={counter.end} className="text-5xl font-black text-white tracking-tighter" />
                  <span className="text-3xl font-black text-primary">{counter.suffix}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 group-hover:text-white/50 transition-colors text-center">
                  {counter.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PILLARS ─── */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-16"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              {t("pillars.sectionLabel")}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative bg-white/[0.02] border border-white/8 rounded-3xl p-10 hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-black text-white text-xl tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed">
                  {pillar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISION STATEMENT ─── */}
      <section className="py-16 px-6 border-y border-white/5">
        <div className="container mx-auto max-w-7xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex gap-8 items-start"
          >
            <div className="w-1 self-stretch bg-primary rounded-full flex-shrink-0" />
            <div>
              <p className="text-2xl md:text-4xl font-black text-white/80 italic tracking-tight leading-snug mb-6 max-w-4xl">
                &ldquo;{tStats("bodyExtended")}&rdquo;
              </p>
              <cite className="text-[10px] font-black uppercase tracking-[0.4em] text-primary not-italic">
                {t("quote.author")}
              </cite>
            </div>
          </motion.blockquote>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-16"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              {t("timeline.sectionLabel")}
            </span>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/8" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-[22px] h-[22px] rounded-full bg-black border-2 border-primary/40 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pb-8">
                    <span className="text-xs font-black text-primary uppercase tracking-widest whitespace-nowrap">
                      {item.year}
                    </span>
                    <span className="text-white/60 font-medium text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                      {item.event}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEGAL INFO ─── */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="bg-white/[0.02] border border-white/8 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-12 items-start"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                  {t("legal.sectionLabel")}
                </span>
              </div>
              <h2 className="font-black text-white text-3xl tracking-tight mb-4">
                {t("legal.company")}<br />
              </h2>
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3 text-sm font-medium text-white/50">
                  <MapPin className="w-4 h-4 text-primary/60 flex-shrink-0 mt-0.5" />
                  {t("legal.address")}
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-white/50">
                  <Calendar className="w-4 h-4 text-primary/60 flex-shrink-0" />
                  {t("legal.registry")}
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.25)]"
              >
                {t("legal.cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
