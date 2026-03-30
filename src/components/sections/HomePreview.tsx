"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  Building2,
  Briefcase,
  GraduationCap,
  Users,
  ArrowRight,
} from "lucide-react";

const previewCards = [
  {
    key: "about",
    href: "/about" as const,
    icon: Users,
    gradientFrom: "from-gold-500/10",
    gradientTo: "to-gold-600/5",
  },
  {
    key: "properties",
    href: "/properties" as const,
    icon: Building2,
    gradientFrom: "from-gold-600/10",
    gradientTo: "to-gold-500/5",
  },
  {
    key: "services",
    href: "/services" as const,
    icon: Briefcase,
    gradientFrom: "from-gold-500/10",
    gradientTo: "to-gold-400/5",
  },
  {
    key: "courses",
    href: "/courses" as const,
    icon: GraduationCap,
    gradientFrom: "from-gold-400/10",
    gradientTo: "to-gold-500/5",
  },
];

export default function HomePreview() {
  const t = useTranslations("homePreview");
  const locale = useLocale();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal-950/50" />
      <div className="absolute top-1/2 start-0 w-[500px] h-[500px] bg-gradient-to-r from-gold-500/3 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 end-0 w-[400px] h-[400px] bg-gradient-to-l from-gold-500/3 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-heading font-semibold tracking-[0.3em] uppercase text-gold-500 mb-4">
            — {t("sectionLabel")} —
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream-100 mb-4">
            {t("headline")}
          </h2>
          <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="gold-line max-w-24 mx-auto mt-6" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewCards.map(
            ({ key, href, icon: Icon, gradientFrom, gradientTo }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={href}
                  className="group flex flex-col h-full bg-charcoal-800/40 backdrop-blur-sm rounded-2xl border border-charcoal-700/30 hover:border-gold-500/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Top accent gradient */}
                  <div
                    className={`h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} group-hover:h-1.5 transition-all duration-500`}
                  />

                  <div className="p-8 flex flex-col flex-1">
                    {/* Icon + Title Row */}
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 flex items-center justify-center group-hover:border-gold-500/40 group-hover:from-gold-500/15 transition-all duration-500 flex-shrink-0">
                        <Icon className="w-6 h-6 text-gold-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-bold text-cream-100 mb-1 group-hover:text-gold-400 transition-colors duration-300">
                          {t(`cards.${key}.title`)}
                        </h3>
                        <p className="text-sm text-charcoal-400 leading-relaxed">
                          {t(`cards.${key}.description`)}
                        </p>
                      </div>
                    </div>

                    {/* Link Arrow */}
                    <div className="mt-auto flex items-center gap-2 text-gold-500 text-sm font-heading font-medium pt-4 border-t border-charcoal-700/30">
                      <span className="group-hover:tracking-wider transition-all duration-300">
                        {t(`cards.${key}.cta`)}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
