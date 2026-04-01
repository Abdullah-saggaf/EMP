"use client";

import { useTranslations } from "next-intl";
import Marquee from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const ReviewCard = ({
  name,
  location,
  text,
}: {
  name: string;
  location: string;
  text: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1",
        "border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/30",
        "hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.2)]"
      )}
    >
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 w-5 h-5 text-primary/20" />

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-primary text-primary" />
        ))}
      </div>

      {/* Text */}
      <blockquote className="text-sm leading-relaxed text-white/60 font-medium mb-5">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex flex-row items-center gap-3 pt-4 border-t border-white/8">
        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
          <span className="text-primary font-black text-xs">{name?.charAt(0)}</span>
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-black text-white tracking-tight">
            {name}
          </figcaption>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
            {location}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const testimonialKeys = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10"];

  const reviews = testimonialKeys.map((key) => {
    const name = t.raw ? t.raw(`items.${key}.name`) : t(`items.${key}.name`);
    const location = t.raw ? t.raw(`items.${key}.location`) : t(`items.${key}.location`);
    const text = t.raw ? t.raw(`items.${key}.text`) : t(`items.${key}.text`);
    return { name, location, text };
  }).filter((review) => {
    const name = String(review.name ?? "");
    return name && !name.includes(".name");
  });

  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="container mx-auto px-6 mb-20 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-primary" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
            {t("sectionLabel")}
          </span>
          <div className="w-8 h-px bg-primary" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05]">
          {t("headline")}
        </h2>
      </motion.div>

      {/* Marquee rows */}
      <div className="relative flex h-[480px] w-full flex-col items-center justify-center overflow-hidden gap-4">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}
