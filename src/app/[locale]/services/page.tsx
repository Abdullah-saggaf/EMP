"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Building2, LineChart, Utensils, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ServicesPage() {
  const t = useTranslations("services");
  const tPage = useTranslations("servicesPage");
  const [activeTab, setActiveTab] = useState("real-estate");

  const sectors = [
    {
      id: "real-estate",
      title: t("realEstate.title"),
      icon: Building2,
      points: [t("realEstate.p1"), t("realEstate.p2")],
      accent: "from-primary/15 via-primary/5",
      accentLight: "bg-primary/10 border-primary/20",
      iconColor: "text-primary",
    },
    {
      id: "consulting",
      title: t("consulting.title"),
      icon: LineChart,
      points: [t("consulting.p1"), t("consulting.p2")],
      accent: "from-blue-500/15 via-blue-500/5",
      accentLight: "bg-blue-500/10 border-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      id: "hospitality",
      title: t("hospitality.title"),
      icon: Utensils,
      points: [t("hospitality.p1"), t("hospitality.p2")],
      accent: "from-emerald-500/15 via-emerald-500/5",
      accentLight: "bg-emerald-500/10 border-emerald-500/20",
      iconColor: "text-emerald-400",
    },
  ];

  const activeSector = sectors.find((s) => s.id === activeTab)!;

  return (
    <main className="min-h-screen bg-black pt-32 pb-32 overflow-x-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/4 rounded-full blur-[200px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[180px] -ml-32" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Page Header */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              {t("sectionLabel")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.95]">
            {tPage("heroWord1")}<br />
            <span className="text-primary italic">{tPage("heroWord2")}</span>
          </h1>
          <p className="text-white/40 text-xl font-medium leading-relaxed max-w-xl">
            {t("subtitle")}
          </p>
        </motion.header>

        {/* Tab Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {sectors.map((sector, i) => (
            <motion.button
              key={sector.id}
              onClick={() => setActiveTab(sector.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-3 px-7 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                activeTab === sector.id
                  ? "bg-white text-black border-white shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                  : "bg-white/5 text-white/50 border-white/10 hover:border-white/20 hover:text-white/70"
              }`}
            >
              <sector.icon className={`w-4 h-4 ${activeTab === sector.id ? "text-black" : sector.iconColor}`} />
              {sector.title.split(" ")[0]}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Sector Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`relative bg-gradient-to-br ${activeSector.accent} to-transparent p-10 md:p-16 rounded-[3rem] border border-white/8 overflow-hidden`}
          >
            {/* Inner grid dot pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="sdots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#sdots)" />
            </svg>

            <div className="relative z-10 max-w-4xl">
              {/* Title row */}
              <div className="flex items-center gap-5 mb-12">
                <div className={`w-16 h-16 rounded-2xl ${activeSector.accentLight} border flex items-center justify-center`}>
                  <activeSector.icon className={`w-8 h-8 ${activeSector.iconColor}`} />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                  {activeSector.title}
                </h2>
              </div>

              {/* Points */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {activeSector.points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/8 flex gap-4 group hover:border-white/20 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                    <p className="text-white/60 text-base font-medium leading-relaxed">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)]"
              >
                {tPage("ctas.request")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All sectors overview strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => { setActiveTab(sector.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="group relative bg-white/[0.02] border border-white/8 rounded-3xl p-8 cursor-pointer hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${sector.accentLight} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <sector.icon className={`w-6 h-6 ${sector.iconColor}`} />
              </div>
              <h3 className="font-black text-white text-lg tracking-tight mb-2 group-hover:text-primary transition-colors">
                {sector.title}
              </h3>
              <p className="text-white/40 text-sm font-medium leading-relaxed">
                {sector.points[0]}
              </p>
              <div className="flex items-center gap-2 mt-6 text-xs font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-primary transition-colors">
                {tPage("ctas.exploreLink")} <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
