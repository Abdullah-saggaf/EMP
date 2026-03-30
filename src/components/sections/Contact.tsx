"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Contact() {
  const t = useTranslations("contact");

  const contactItems = [
    {
      icon: Mail,
      value: t("email"),
      href: `mailto:${t("email")}`,
    },
    {
      icon: Phone,
      value: t("phone"),
      href: `tel:${t("phone").replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      value: t("location"),
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-950 to-charcoal-900" />
      <div className="absolute top-0 start-1/2 w-[800px] h-[400px] bg-gradient-to-b from-gold-500/5 to-transparent rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-heading font-semibold tracking-[0.3em] uppercase text-gold-500 mb-4">
            — {t("sectionLabel")} —
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream-100 mb-6">
            {t("headline")}
          </h2>
          <p className="text-charcoal-400 text-lg mb-8">
            {t("subtitle")}
          </p>
          <div className="gold-line max-w-24 mx-auto mb-10" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="flex flex-col items-center gap-4 bg-charcoal-800/40 backdrop-blur-sm rounded-2xl p-8 border border-charcoal-700/30 hover:border-gold-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 flex items-center justify-center group-hover:border-gold-500/40 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <span className="text-cream-200 font-medium group-hover:text-gold-400 transition-colors">
                    {item.value}
                  </span>
                </a>
              ) : (
                <div className="flex flex-col items-center gap-4 bg-charcoal-800/40 backdrop-blur-sm rounded-2xl p-8 border border-charcoal-700/30">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <span className="text-cream-200 font-medium">{item.value}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* NIP */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-charcoal-500 text-sm mb-8"
        >
          {t("nip")}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button href={`mailto:${t("email")}`} size="lg">
            {t("contactUs")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
