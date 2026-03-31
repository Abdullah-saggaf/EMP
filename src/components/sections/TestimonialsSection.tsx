"use client";

import { useTranslations } from "next-intl";
import Marquee from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

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
        "relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02]",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-white/10 dark:bg-white/[0.02] dark:hover:bg-white/[0.05]",
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-4">
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold text-white tracking-tight">
            {name}
          </figcaption>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
            {location}
          </p>
        </div>
        <div className="ms-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 fill-primary text-primary" />
          ))}
        </div>
      </div>
      <blockquote className="text-sm leading-relaxed text-white/50 italic font-medium">
        "{text}"
      </blockquote>
    </figure>
  );
};

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const reviews = [
    {
      name: t("items.t1.name"),
      location: t("items.t1.location"),
      text: t("items.t1.text"),
    },
    {
      name: t("items.t2.name"),
      location: t("items.t2.location"),
      text: t("items.t2.text"),
    },
    {
      name: t("items.t3.name"),
      location: t("items.t3.location"),
      text: t("items.t3.text"),
    },
    {
      name: t("items.t4.name"),
      location: t("items.t4.location"),
      text: t("items.t4.text"),
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
          {t("sectionLabel")}
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
          {t("headline")}
        </h2>
      </div>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
      </div>
    </section>
  );
}
