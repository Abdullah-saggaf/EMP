"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  end: number;
  suffix?: string;
  label?: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  end,
  suffix = "+",
  label,
  duration = 2,
  className,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  // If className is passed, render just the number (used in custom layouts like stat strips)
  if (className) {
    return (
      <span ref={ref as any} className={cn(className)}>
        {count}
      </span>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-2">
        {count}{suffix}
      </div>
      {label && (
        <div className="text-sm font-bold tracking-[0.2em] uppercase text-white/30">
          {label}
        </div>
      )}
    </motion.div>
  );
}
