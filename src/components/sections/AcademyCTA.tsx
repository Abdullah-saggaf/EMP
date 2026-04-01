"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { GraduationCap, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AcademyCTA({ locale }: { locale: string }) {
  const t = useTranslations("academyCta");
  
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[200px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[150px] -ml-24 -mb-24" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          {/* Card */}
          <div className="bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden group hover:border-primary/30 transition-all duration-700">
            {/* Inner glow on hover */}
            <div className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08)_0%,transparent_60%)]" />

            <div className="relative z-10">
              {/* Icon badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 mb-10 group-hover:bg-primary/20 transition-colors duration-300"
              >
                <GraduationCap className="w-10 h-10 text-primary" />
              </motion.div>

              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                  {t("sectionLabel")}
                </span>
                <div className="w-8 h-px bg-primary" />
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.05]">
                {t.rich("headline", {
                  highlight: (chunks) => <span className="text-primary italic">{chunks}</span>
                })}
              </h2>

              <p className="text-white/40 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-14 leading-relaxed">
                {t("subtitle")}
              </p>

              {/* CTA group */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/courses"
                  className="group/btn inline-flex items-center gap-3 px-10 py-5 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_60px_rgba(212,175,55,0.3)] hover:shadow-[0_0_80px_rgba(212,175,55,0.5)]"
                >
                  {t("viewModules")}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white/5 text-white border border-white/10 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  {t("aboutUs")}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
