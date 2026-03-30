"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Handshake,
  Phone,
  ShieldAlert,
  Trophy,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const topicIcons = [
  { key: "sales", Icon: Trophy },
  { key: "negotiations", Icon: Handshake },
  { key: "coldCalling", Icon: Phone },
  { key: "objections", Icon: ShieldAlert },
  { key: "closingSales", Icon: GraduationCap },
];

export default function Courses() {
  const t = useTranslations("courses");

  return (
    <section id="courses" className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold-500/4 to-transparent rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(201,168,76,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label={t("sectionLabel")}
          title={t("headline")}
          subtitle={t("subtitle")}
        />

        {/* Topics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 mb-12">
          {topicIcons.map(({ key, Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center gap-3 bg-charcoal-800/40 backdrop-blur-sm rounded-2xl p-6 border border-charcoal-700/30 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 flex items-center justify-center group-hover:border-gold-500/40 transition-all duration-300">
                <Icon className="w-6 h-6 text-gold-500" />
              </div>
              <span className="text-sm font-heading font-semibold text-cream-100 text-center">
                {t(`topics.${key}`)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Course Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-10 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream-100 mb-2">
              {t("masterClass")}
            </h3>
            <p className="text-charcoal-400 text-sm">{t("masterClassSub")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              t("duration"),
              t("format"),
              t("languages"),
              t("startDate"),
              t("basePrice"),
              t("subscriberPrice"),
              t("coaching"),
              t("installments"),
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-sm text-charcoal-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/contact" size="md">
              {t("cta")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
