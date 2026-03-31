"use client";

import { useTranslations } from "next-intl";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { Building2, LineChart, Utensils } from "lucide-react";

export default function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    {
      name: t("realEstate.title"),
      description: t("realEstate.p1"),
      href: "/services#real-estate",
      cta: "Explore Sector",
      className: "lg:col-span-2 lg:row-span-1",
      Icon: Building2,
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
      ),
    },
    {
      name: t("consulting.title"),
      description: t("consulting.p1"),
      href: "/services#consulting",
      cta: "View Advisory",
      className: "lg:col-span-1 lg:row-span-2",
      Icon: LineChart,
      background: (
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent opacity-50" />
      ),
    },
    {
      name: t("hospitality.title"),
      description: t("hospitality.p1"),
      href: "/services#hospitality",
      cta: "Manage Assets",
      className: "lg:col-span-2 lg:row-span-1",
      Icon: Utensils,
      background: (
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50" />
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
            {t("sectionLabel")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
            {t("headline")}
          </h2>
          <p className="text-white/40 text-lg font-medium leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <BentoGrid>
          {services.map((service, idx) => (
            <BentoCard key={idx} {...service} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
