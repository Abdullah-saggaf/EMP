"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

const serviceIcons = [
  "zap",
  "shieldCheck",
  "handshake",
  "lock",
  "megaphone",
  "eye",
  "trendingUp",
  "building",
];

const serviceKeys = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal-950/50" />
      <div className="absolute top-1/2 start-0 w-[400px] h-[400px] bg-gradient-to-r from-gold-500/3 to-transparent rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label={t("sectionLabel")}
          title={t("headline")}
          subtitle={t("subtitle")}
        />

        {/* Bento Grid */}
        <div className="bento-grid mt-12">
          {serviceKeys.map((key, index) => (
            <ServiceCard
              key={key}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.description`)}
              iconName={serviceIcons[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
