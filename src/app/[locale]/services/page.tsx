"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Building2, LineChart, Utensils, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const t = useTranslations("services");
  const [activeTab, setActiveTab] = useState("real-estate");

  const sectors = [
    {
      id: "real-estate",
      title: t("realEstate.title"),
      icon: Building2,
      points: [t("realEstate.p1"), t("realEstate.p2")],
      color: "from-primary/20",
    },
    {
      id: "consulting",
      title: t("consulting.title"),
      icon: LineChart,
      points: [t("consulting.p1"), t("consulting.p2")],
      color: "from-blue-500/20",
    },
    {
      id: "hospitality",
      title: t("hospitality.title"),
      icon: Utensils,
      points: [t("hospitality.p1"), t("hospitality.p2")],
      color: "from-emerald-500/20",
    },
  ];

  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 block">
            {t("sectionLabel")}
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
            Professional Sectors
          </h1>
          <p className="text-white/40 text-xl font-medium leading-relaxed">
            {t("subtitle")}
          </p>
        </header>

        {/* Custom Premium Tabs */}
        <div className="flex flex-wrap gap-4 mb-20">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveTab(sector.id)}
              className={`flex items-center gap-3 px-8 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-500 relative border ${
                activeTab === sector.id
                  ? "bg-white text-black border-white scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  : "bg-white/5 text-white/50 border-white/10 hover:border-white/20"
              }`}
            >
              <sector.icon className={`w-5 h-5 ${activeTab === sector.id ? "text-black" : "text-primary"}`} />
              {sector.id.replace("-", " ")}
            </button>
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`bg-gradient-to-br ${sectors.find(s => s.id === activeTab)?.color} to-black p-10 md:p-20 rounded-[3rem] border border-white/10`}
            >
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    {(() => {
                      const Icon = sectors.find(s => s.id === activeTab)?.icon || Building2;
                      return <Icon className="w-8 h-8 text-primary" />;
                    })()}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
                    {sectors.find(s => s.id === activeTab)?.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {sectors.find(s => s.id === activeTab)?.points.map((point, i) => (
                    <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 flex gap-4 group">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 transition-transform group-hover:scale-125" />
                      <p className="text-white/60 text-lg font-medium leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
