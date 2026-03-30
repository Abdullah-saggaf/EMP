"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-16 ${centered ? "text-center" : "text-start"}`}
    >
      {label && (
        <span className="inline-block text-xs font-heading font-semibold tracking-[0.3em] uppercase text-gold-500 mb-4">
          — {label} —
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 ${
          light ? "text-charcoal-900" : "text-cream-100"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-charcoal-500" : "text-charcoal-400"}`}
        >
          {subtitle}
        </p>
      )}
      <div className="gold-line max-w-24 mt-6 mx-auto" />
    </motion.div>
  );
}
