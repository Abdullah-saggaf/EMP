"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Handshake,
  Lock,
  Megaphone,
  Eye,
  TrendingUp,
  Building,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  index: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  zap: Zap,
  shieldCheck: ShieldCheck,
  handshake: Handshake,
  lock: Lock,
  megaphone: Megaphone,
  eye: Eye,
  trendingUp: TrendingUp,
  building: Building,
};

export default function ServiceCard({
  title,
  description,
  iconName,
  index,
}: ServiceCardProps) {
  const Icon = iconMap[iconName] || Building;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative bg-charcoal-800/60 backdrop-blur-sm rounded-2xl p-7 border border-charcoal-700/40 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-1 gold-glow-hover"
    >
      {/* Icon */}
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300">
        <Icon className="w-5 h-5 text-gold-500" />
      </div>

      {/* Title */}
      <h3 className="font-heading text-base font-semibold text-cream-100 mb-3 group-hover:text-gold-400 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-charcoal-400 leading-relaxed">
        {description}
      </p>

      {/* Corner Accent */}
      <div className="absolute top-0 end-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 end-0 w-full h-full bg-gradient-to-bl from-gold-500/10 to-transparent rounded-2xl" />
      </div>
    </motion.div>
  );
}
