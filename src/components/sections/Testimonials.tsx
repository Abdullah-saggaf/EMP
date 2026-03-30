"use client";

import { useTranslations } from "next-intl";
import { motion, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonialKeys = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10"];

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setScrollWidth(containerRef.current.scrollWidth);
    }
  }, []);

  const dragConstraint = scrollWidth - containerWidth;

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal-950/30" />
      <div className="absolute bottom-0 start-1/2 w-[600px] h-[300px] bg-gradient-to-t from-gold-500/3 to-transparent rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label={t("sectionLabel")}
          title={t("headline")}
          subtitle={t("subtitle")}
        />

        {/* Draggable Carousel */}
        <div className="overflow-hidden mt-12 cursor-grab active:cursor-grabbing">
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{
              right: 0,
              left: -(dragConstraint > 0 ? dragConstraint : 0),
            }}
            dragElastic={0.1}
            className="flex gap-6 pb-4"
          >
            {testimonialKeys.map((key, index) => (
              <TestimonialCard
                key={key}
                name={t(`items.${key}.name`)}
                location={t(`items.${key}.location`)}
                text={t(`items.${key}.text`)}
                rating={5}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-6 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === 0
                  ? "w-8 bg-gold-500"
                  : "w-4 bg-charcoal-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
