"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import Button from "@/components/ui/Button";

export default function About() {
  const t = useTranslations("about");

  const counters = [
    { end: 50, label: t("partnersLabel") },
    { end: 200, label: t("jobsLabel") },
    { end: 15, label: t("coursesLabel") },
    { end: 500, label: t("clientsLabel") },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 start-0 w-[400px] h-[400px] bg-gradient-to-br from-gold-500/3 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label={t("sectionLabel")}
          title={t("headline")}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-lg text-cream-200 leading-relaxed font-light">
              {t("body")}
            </p>
            <p className="text-base text-charcoal-400 leading-relaxed">
              {t("bodyExtended")}
            </p>
            <p className="text-base text-charcoal-400 leading-relaxed">
              {t("history")}
            </p>
            <p className="text-base text-charcoal-400 leading-relaxed">
              {t("historyDetail")}
            </p>

            {/* Vision */}
            <div className="border-s-2 border-gold-500/30 ps-6 mt-8">
              <p className="text-base text-cream-200/80 italic leading-relaxed">
                {t("vision")}
              </p>
            </div>

            <p className="text-base text-charcoal-400 leading-relaxed">
              {t("visionValues")}
            </p>
            <p className="text-base text-charcoal-400 leading-relaxed">
              {t("howWeWork")}
            </p>
            <p className="text-base text-charcoal-400 leading-relaxed">
              {t("markets")}
            </p>
            <p className="text-base text-charcoal-400 leading-relaxed">
              {t("partners")}
            </p>
          </motion.div>

          {/* Right: Counters + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Counters Grid */}
            <div className="grid grid-cols-2 gap-4">
              {counters.map((counter, i) => (
                <div
                  key={i}
                  className="bg-charcoal-800/50 backdrop-blur-sm rounded-2xl border border-charcoal-700/40 hover:border-gold-500/20 transition-all duration-300"
                >
                  <Counter
                    end={counter.end}
                    label={counter.label}
                  />
                </div>
              ))}
            </div>

            {/* Premium card with brand statement */}
            <div className="glass rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold text-cream-100 mb-4">
                AMP EMPIRE
              </h3>
              <p className="text-sm text-charcoal-400 leading-relaxed mb-6">
                {t("bodyExtended")}
              </p>
              <Button href="/about" variant="outline" size="sm">
                {t("learnMore")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
