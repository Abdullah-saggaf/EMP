"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating?: number;
  index: number;
}

export default function TestimonialCard({
  name,
  location,
  text,
  rating = 5,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative bg-charcoal-800/50 backdrop-blur-sm rounded-2xl p-8 border border-charcoal-700/40 hover:border-gold-500/20 transition-all duration-500 flex flex-col min-w-[320px] max-w-[400px] flex-shrink-0"
    >
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-gold-500/20 mb-4 scale-x-[-1]" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-gold-500 text-gold-500"
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-charcoal-300 text-sm leading-relaxed mb-6 flex-1">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="border-t border-charcoal-700/50 pt-4">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center border border-gold-500/20">
            <span className="text-gold-500 font-heading font-bold text-sm">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-cream-100">
              {name}
            </h4>
            <p className="text-xs text-charcoal-400">{location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
