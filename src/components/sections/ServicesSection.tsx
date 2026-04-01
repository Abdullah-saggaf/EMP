"use client";

import { useTranslations } from "next-intl";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { motion } from "framer-motion";
import { Building2, LineChart, Utensils, Shield, Globe, Award } from "lucide-react";

export default function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    {
      name: t("realEstate.title"),
      description: t("realEstate.p1"),
      href: "/services",
      cta: "Explore Sector",
      className: "lg:col-span-2 lg:row-span-1",
      Icon: Building2,
      index: 0,
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute top-6 right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid1" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid1)" />
          </svg>
        </div>
      ),
    },
    {
      name: t("consulting.title"),
      description: t("consulting.p1"),
      href: "/services",
      cta: "View Advisory",
      className: "lg:col-span-1 lg:row-span-2",
      Icon: LineChart,
      index: 1,
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/8 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
          {/* Animated orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        </div>
      ),
    },
    {
      name: t("hospitality.title"),
      description: t("hospitality.p1"),
      href: "/services",
      cta: "Manage Assets",
      className: "lg:col-span-2 lg:row-span-1",
      Icon: Utensils,
      index: 2,
      background: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
          <div className="absolute bottom-6 right-6 w-24 h-24 bg-primary/8 rounded-full blur-2xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots1" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots1)" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              {t("sectionLabel")}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.05]">
            {t("headline")}
          </h2>
          <p className="text-white/40 text-lg font-medium leading-relaxed max-w-xl">
            {t("subtitle")}
          </p>
        </motion.div>

        <BentoGrid>
          {services.map((service) => (
            <BentoCard key={service.name} {...service} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
