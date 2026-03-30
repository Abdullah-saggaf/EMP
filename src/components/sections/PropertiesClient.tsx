"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import PropertyCard from "@/components/ui/PropertyCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Property } from "@/lib/types";

interface PropertiesClientProps {
  properties: Property[];
}

export default function PropertiesClient({ properties }: PropertiesClientProps) {
  const t = useTranslations("properties");

  return (
    <section id="properties" className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 end-0 w-[500px] h-[500px] bg-gradient-to-tl from-gold-500/3 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label={t("sectionLabel")}
          title={t("headline")}
          subtitle={t("subtitle")}
        />

        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {properties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))}
          </div>
        ) : (
          /* Elegant placeholder when no feed configured */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative bg-charcoal-800/40 backdrop-blur-sm rounded-2xl border border-charcoal-700/30 overflow-hidden group hover:border-gold-500/20 transition-all duration-500"
              >
                {/* Placeholder Image Area */}
                <div className="h-64 bg-gradient-to-br from-charcoal-700/50 to-charcoal-800/50 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-charcoal-600/50" />
                </div>

                {/* Placeholder Content */}
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-3 w-20 bg-charcoal-700/50 rounded-full" />
                    <div className="h-3 w-16 bg-charcoal-700/50 rounded-full" />
                  </div>
                  <div className="h-5 w-3/4 bg-charcoal-700/30 rounded-full" />
                  <div className="gold-line" />
                  <div className="flex gap-4">
                    <div className="h-3 w-14 bg-charcoal-700/40 rounded-full" />
                    <div className="h-3 w-14 bg-charcoal-700/40 rounded-full" />
                    <div className="h-3 w-14 bg-charcoal-700/40 rounded-full" />
                  </div>
                </div>

                {/* Coming Soon Badge */}
                <div className="absolute top-4 start-4 bg-charcoal-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold-500/20">
                  <span className="text-gold-500/60 font-heading font-semibold text-xs tracking-wider uppercase">
                    {t("comingSoon")}
                  </span>
                </div>
              </div>
            ))}

            {/* Message overlay */}
            <div className="md:col-span-3 text-center mt-4">
              <p className="text-charcoal-400 text-sm">
                {t("noProperties")}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
