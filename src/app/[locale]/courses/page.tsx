"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { GraduationCap, ShieldCheck, PhoneCall, Zap, ArrowRight, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function CoursesPage() {
  const t = useTranslations("courses");
  const tPage = useTranslations("coursesPage");

  const modules = [
    {
      id: "sales",
      icon: GraduationCap,
      title: t("modules.sales.title"),
      description: t("modules.sales.description"),
      number: "01",
    },
    {
      id: "negotiations",
      icon: Zap,
      title: t("modules.negotiations.title"),
      description: t("modules.negotiations.description"),
      number: "02",
    },
    {
      id: "cold-calling",
      icon: PhoneCall,
      title: t("modules.coldCalling.title"),
      description: t("modules.coldCalling.description"),
      number: "03",
    },
    {
      id: "objections",
      icon: ShieldCheck,
      title: t("modules.objections.title"),
      description: t("modules.objections.description"),
      number: "04",
    },
  ];

  const highlights = [
    tPage("highlights.h1"),
    tPage("highlights.h2"),
    tPage("highlights.h3"),
    tPage("highlights.h4"),
    tPage("highlights.h5"),
    tPage("highlights.h6"),
  ];

  return (
    <main className="min-h-screen bg-black pt-32 pb-32 overflow-x-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] -mr-32 -mt-32" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Page Hero */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-5xl mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              {t("sectionLabel")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.95]">
            {tPage("heroWord1")}<br />
            <span className="text-primary italic">{tPage("heroWord2")}</span>{" "}
            <span className="text-white/20">{tPage("heroWord3")}</span>
          </h1>
          <p className="text-white/40 text-xl font-medium leading-relaxed max-w-xl">
            {t("subtitle")}
          </p>
        </motion.header>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {modules.map((module, i) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative group bg-white/[0.02] border border-white/8 p-10 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(212,175,55,0.15)]"
            >
              <BorderBeam size={300} duration={14} delay={i * 3} />

              <div className="relative z-10">
                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-6xl font-black text-white/5 leading-none select-none">
                    {module.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <module.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tighter mb-3 group-hover:text-primary transition-colors duration-300">
                  {module.title}
                </h3>
                <p className="text-white/40 text-base font-medium leading-relaxed">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enrollment CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-[3rem] overflow-hidden"
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.1)_0%,transparent_60%)]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cgrid)" />
          </svg>

          <div className="relative z-10 p-12 md:p-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                    {tPage("enroll.sectionLabel")}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-[1.05]">
                  {tPage("enroll.headline")}
                </h2>
                <p className="text-white/40 text-lg font-medium leading-relaxed mb-10">
                  {tPage("enroll.subtitle")}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_50px_rgba(212,175,55,0.35)]"
                >
                  {tPage("enroll.cta")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right — Highlights */}
              <div className="grid grid-cols-1 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-3 bg-black/30 rounded-xl px-5 py-4 border border-white/8"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-white/70 text-sm font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
